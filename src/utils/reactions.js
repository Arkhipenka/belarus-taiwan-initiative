const EMPTY_REACTIONS = {
  like: 0,
  love: 0,
  fire: 0
};

const REACTION_TYPES = new Set(Object.keys(EMPTY_REACTIONS));

function normalizeReactions(value) {
  return {
    like: Number(value?.like) || 0,
    love: Number(value?.love) || 0,
    fire: Number(value?.fire) || 0
  };
}

function getReactionStorageKey(slug) {
  return `article-reactions-${slug}`;
}

function getSelectedReactionKey(slug) {
  return `article-reaction-selected-${slug}`;
}

export function readLocalReactions(slug, lang) {
  try {
    const stored = localStorage.getItem(getReactionStorageKey(slug));
    if (stored) return normalizeReactions(JSON.parse(stored));

    const legacyStored = localStorage.getItem(`reactions-${lang}-${slug}`);
    if (legacyStored) return normalizeReactions(JSON.parse(legacyStored));
  } catch {
    return EMPTY_REACTIONS;
  }

  return EMPTY_REACTIONS;
}

export function readSelectedReaction(slug) {
  try {
    const selected = localStorage.getItem(getSelectedReactionKey(slug));
    return REACTION_TYPES.has(selected) ? selected : null;
  } catch {
    return null;
  }
}

export function writeSelectedReaction(slug, type) {
  try {
    if (REACTION_TYPES.has(type)) {
      localStorage.setItem(getSelectedReactionKey(slug), type);
    } else {
      localStorage.removeItem(getSelectedReactionKey(slug));
    }
  } catch {
    // Ignore storage failures; the API still returns the canonical state.
  }
}

export function writeLocalReactions(slug, reactions) {
  try {
    localStorage.setItem(
      getReactionStorageKey(slug),
      JSON.stringify(normalizeReactions(reactions))
    );
  } catch {
    // Ignore storage failures; reactions still work for the current render.
  }
}

export async function fetchArticleReactions(slug) {
  const response = await fetch(`/api/reactions?slug=${encodeURIComponent(slug)}`, {
    headers: {
      Accept: 'application/json'
    },
    cache: 'no-store'
  });

  if (!response.ok) {
    throw new Error(`Unable to load reactions: ${response.status}`);
  }

  const data = await response.json();
  const reactions = normalizeReactions(data.reactions);
  const selected = REACTION_TYPES.has(data.selected) ? data.selected : null;

  writeLocalReactions(slug, reactions);
  writeSelectedReaction(slug, selected);

  return {
    reactions,
    selected
  };
}

export async function toggleArticleReaction(slug, type) {
  if (!REACTION_TYPES.has(type)) {
    throw new Error(`Unsupported reaction type: ${type}`);
  }

  const response = await fetch('/api/reactions', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ slug, type })
  });

  if (!response.ok) {
    throw new Error(`Unable to save reaction: ${response.status}`);
  }

  const data = await response.json();
  const reactions = normalizeReactions(data.reactions);
  const selected = REACTION_TYPES.has(data.selected) ? data.selected : null;

  writeLocalReactions(slug, reactions);
  writeSelectedReaction(slug, selected);

  return {
    reactions,
    selected,
    action: data.action || 'selected'
  };
}

export function toggleLocalReaction(reactions, currentSelected, type) {
  const normalizedReactions = normalizeReactions(reactions);

  if (currentSelected === type) {
    return {
      reactions: {
        ...normalizedReactions,
        [type]: Math.max(0, normalizedReactions[type] - 1)
      },
      selected: null
    };
  }

  return {
    reactions: {
      ...normalizedReactions,
      ...(currentSelected
        ? { [currentSelected]: Math.max(0, normalizedReactions[currentSelected] - 1) }
        : null),
      [type]: normalizedReactions[type] + 1
    },
    selected: type
  };
}
