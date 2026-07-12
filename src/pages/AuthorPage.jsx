import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getArticles } from '../data/materials';
import { getAssetUrl } from '../utils/assets';
import { formatLongDate } from '../utils/date';
import { getMaterialExcerpt } from '../utils/text';

const authorLabels = {
  by: {
    eyebrow: 'Аўтар',
    role: 'Даследчык, аўтар і куратар Belarus-Taiwan & East Asia Platform.',
    bio: 'Піша пра Тайвань, грамадзянскую супольнасць, памяць, культуру і дэмакратычныя пераходы ва Усходняй Азіі.',
    topics: ['Тайвань', 'дэмакратыя', 'грамадзянская супольнасць', 'культура'],
    articles: 'Матэрыялы аўтара',
    empty: 'Матэрыялы гэтага аўтара пакуль не апублікаваныя.',
    read: 'Чытаць'
  },
  ru: {
    eyebrow: 'Автор',
    role: 'Исследователь, автор и куратор Belarus-Taiwan & East Asia Platform.',
    bio: 'Пишет о Тайване, гражданском обществе, памяти, культуре и демократических переходах в Восточной Азии.',
    topics: ['Тайвань', 'демократия', 'гражданское общество', 'культура'],
    articles: 'Материалы автора',
    empty: 'Материалы этого автора пока не опубликованы.',
    read: 'Читать'
  },
  en: {
    eyebrow: 'Author',
    role: 'Researcher, author, and curator of Belarus-Taiwan & East Asia Platform.',
    bio: 'Writes about Taiwan, civil society, memory, culture, and democratic transitions in East Asia.',
    topics: ['Taiwan', 'democracy', 'civil society', 'culture'],
    articles: 'Author articles',
    empty: 'No articles by this author have been published yet.',
    read: 'Read'
  },
  pl: {
    eyebrow: 'Autor',
    role: 'Badacz, autor i kurator Belarus-Taiwan & East Asia Platform.',
    bio: 'Pisze o Tajwanie, społeczeństwie obywatelskim, pamięci, kulturze i przemianach demokratycznych w Azji Wschodniej.',
    topics: ['Tajwan', 'demokracja', 'społeczeństwo obywatelskie', 'kultura'],
    articles: 'Teksty autora',
    empty: 'Nie opublikowano jeszcze tekstów tego autora.',
    read: 'Czytaj'
  },
  zh: {
    eyebrow: '作者',
    role: 'Belarus-Taiwan & East Asia Platform 的研究者、作者與策展人。',
    bio: '關注台灣、公民社會、記憶、文化與東亞民主轉型。',
    topics: ['台灣', '民主', '公民社會', '文化'],
    articles: '作者文章',
    empty: '此作者尚未發布文章。',
    read: '閱讀'
  }
};

function cleanAuthorName(author = '') {
  return decodeURIComponent(author).trim();
}

function sameAuthor(left = '', right = '') {
  return left.localeCompare(right, undefined, { sensitivity: 'base' }) === 0;
}

function isArkhipenka(author = '') {
  const normalized = author.toLowerCase();
  return normalized.includes('arkhipenka')
    || normalized.includes('архипен')
    || normalized.includes('архіпен');
}

function AuthorPage() {
  const { author = '' } = useParams();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const lang = i18n.language.split('-')[0];
  const labels = authorLabels[lang] || authorLabels.en;
  const authorName = cleanAuthorName(author);

  const articles = useMemo(() => {
    const allArticles = getArticles(lang);
    const exactMatches = allArticles.filter(item => sameAuthor(item.author, authorName));

    if (exactMatches.length > 0 || !isArkhipenka(authorName)) {
      return exactMatches;
    }

    return allArticles.filter(item => isArkhipenka(item.author));
  }, [authorName, lang]);

  return (
    <main className="author-page">
      <section className="author-hero">
        <p className="author-eyebrow">{labels.eyebrow}</p>
        <div className="author-hero-grid">
          <div>
            <h1>{authorName}</h1>
            <p className="author-role">{labels.role}</p>
          </div>
          <div className="author-note">
            <p>{labels.bio}</p>
            <div className="author-tags" aria-label="Author topics">
              {labels.topics.map(topic => (
                <span key={topic}>{topic}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="author-materials">
        <div className="author-section-line" />
        <div className="author-section-heading">
          <h2>{labels.articles}</h2>
          <span>{articles.length}</span>
        </div>

        {articles.length > 0 ? (
          <div className="author-article-list">
            {articles.map(article => (
              <article
                key={article.slug || article.id}
                className="author-article-row"
                onClick={() => navigate(`/${lang}/articles/${article.slug}`)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    navigate(`/${lang}/articles/${article.slug}`);
                  }
                }}
                role="button"
                tabIndex={0}
              >
                {article.image && (
                  <img src={getAssetUrl(article.image)} alt="" />
                )}
                <div>
                  <p className="author-article-date">{formatLongDate(article.date, lang)}</p>
                  <h3>{article.title}</h3>
                  <p className="author-article-excerpt">{getMaterialExcerpt(article)}</p>
                  <span className="author-read-link">{labels.read}</span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="author-empty">{labels.empty}</p>
        )}
      </section>
    </main>
  );
}

export default AuthorPage;
