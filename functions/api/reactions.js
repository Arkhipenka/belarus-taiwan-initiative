const EMPTY_REACTIONS = {
  like: 0,
  love: 0,
  fire: 0
};

const REACTION_TYPES = new Set(Object.keys(EMPTY_REACTIONS));

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store'
    }
  });
}

function normalizeSlug(value) {
  return String(value || '').trim().slice(0, 220);
}

function normalizeRow(row) {
  return {
    like: Number(row?.like_count) || 0,
    love: Number(row?.love_count) || 0,
    fire: Number(row?.fire_count) || 0
  };
}

async function ensureTables(db) {
  await db
    .prepare(
      `CREATE TABLE IF NOT EXISTS article_reactions (
        slug TEXT PRIMARY KEY,
        like_count INTEGER NOT NULL DEFAULT 0,
        love_count INTEGER NOT NULL DEFAULT 0,
        fire_count INTEGER NOT NULL DEFAULT 0,
        updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
      )`
    )
    .run();

  await db
    .prepare(
      `CREATE TABLE IF NOT EXISTS article_reaction_votes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        slug TEXT NOT NULL,
        voter_key TEXT NOT NULL,
        type TEXT NOT NULL,
        created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(slug, voter_key)
      )`
    )
    .run();
}

async function getReactions(db, slug) {
  const row = await db
    .prepare(
      `SELECT like_count, love_count, fire_count
       FROM article_reactions
       WHERE slug = ?`
    )
    .bind(slug)
    .first();

  return normalizeRow(row);
}

async function getVoterKey(request, slug) {
  const ip = request.headers.get('CF-Connecting-IP') || request.headers.get('X-Forwarded-For') || '';
  const userAgent = request.headers.get('User-Agent') || '';
  const acceptLanguage = request.headers.get('Accept-Language') || '';
  const source = `${slug}|${ip}|${userAgent}|${acceptLanguage}`;
  const hashBuffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(source));

  return [...new Uint8Array(hashBuffer)]
    .map(byte => byte.toString(16).padStart(2, '0'))
    .join('');
}

async function getVote(db, slug, voterKey) {
  return db
    .prepare(
      `SELECT type
       FROM article_reaction_votes
       WHERE slug = ? AND voter_key = ?`
    )
    .bind(slug, voterKey)
    .first();
}

async function ensureCounterRow(db, slug) {
  await db
    .prepare(
      `INSERT OR IGNORE INTO article_reactions (slug)
       VALUES (?)`
    )
    .bind(slug)
    .run();
}

async function incrementCounter(db, slug, type, direction) {
  const column = `${type}_count`;

  await db
    .prepare(
      `UPDATE article_reactions
       SET ${column} = MAX(0, ${column} + ?),
           updated_at = CURRENT_TIMESTAMP
       WHERE slug = ?`
    )
    .bind(direction, slug)
    .run();
}

export async function onRequestGet({ env, request }) {
  if (!env.DB) {
    return json({ reactions: EMPTY_REACTIONS, selected: null, unavailable: true }, 503);
  }

  const url = new URL(request.url);
  const slug = normalizeSlug(url.searchParams.get('slug'));

  if (!slug) {
    return json({ error: 'Missing slug' }, 400);
  }

  await ensureTables(env.DB);

  const voterKey = await getVoterKey(request, slug);
  const [reactions, vote] = await Promise.all([
    getReactions(env.DB, slug),
    getVote(env.DB, slug, voterKey)
  ]);

  return json({ reactions, selected: vote?.type || null });
}

export async function onRequestPost({ env, request }) {
  if (!env.DB) {
    return json({ reactions: EMPTY_REACTIONS, selected: null, unavailable: true }, 503);
  }

  let body;

  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid JSON' }, 400);
  }

  const slug = normalizeSlug(body.slug);
  const type = String(body.type || '');

  if (!slug || !REACTION_TYPES.has(type)) {
    return json({ error: 'Invalid reaction' }, 400);
  }

  await ensureTables(env.DB);
  await ensureCounterRow(env.DB, slug);

  const voterKey = await getVoterKey(request, slug);
  const existingVote = await getVote(env.DB, slug, voterKey);
  let selected = type;
  let action = 'selected';

  if (!existingVote) {
    await env.DB
      .prepare(
        `INSERT INTO article_reaction_votes (slug, voter_key, type)
         VALUES (?, ?, ?)`
      )
      .bind(slug, voterKey, type)
      .run();
    await incrementCounter(env.DB, slug, type, 1);
  } else if (existingVote.type === type) {
    await env.DB
      .prepare(
        `DELETE FROM article_reaction_votes
         WHERE slug = ? AND voter_key = ?`
      )
      .bind(slug, voterKey)
      .run();
    await incrementCounter(env.DB, slug, type, -1);
    selected = null;
    action = 'removed';
  } else {
    await env.DB
      .prepare(
        `UPDATE article_reaction_votes
         SET type = ?, updated_at = CURRENT_TIMESTAMP
         WHERE slug = ? AND voter_key = ?`
      )
      .bind(type, slug, voterKey)
      .run();
    await incrementCounter(env.DB, slug, existingVote.type, -1);
    await incrementCounter(env.DB, slug, type, 1);
    action = 'changed';
  }

  const reactions = await getReactions(env.DB, slug);

  return json({ reactions, selected, action });
}
