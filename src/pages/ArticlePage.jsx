import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const articleModules = import.meta.glob('../data/articles/*/*.json', {
  eager: true,
  import: 'default'
});

function ArticlePage() {

  const { slug } = useParams();
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const lang = i18n.language.split('-')[0];

  const [article, setArticle] = useState(null);
  const [views, setViews] = useState(0);
  const [reactions, setReactions] = useState({
    like: 0,
    love: 0,
    fire: 0
  });

  useEffect(() => {

    const loadedArticles = Object.entries(articleModules)
      .filter(([path]) => path.includes(`/articles/${lang}/`))
      .map(([, data]) => data);

    const foundArticle = loadedArticles.find(a => a.slug === slug);

    setArticle(foundArticle);

    if (foundArticle) {

      const viewKey = `views-${slug}`;
      const storedViews = localStorage.getItem(viewKey);

      const newViews = storedViews ? parseInt(storedViews) + 1 : 1;

      localStorage.setItem(viewKey, newViews);
      setViews(newViews);

      const reactionKey = `reactions-${slug}`;

      const storedReactions = JSON.parse(localStorage.getItem(reactionKey));

      if (storedReactions) {
        setReactions(storedReactions);
      }

    }

  }, [lang, slug]);

  function addReaction(type) {

    const newReactions = {
      ...reactions,
      [type]: reactions[type] + 1
    };

    setReactions(newReactions);

    localStorage.setItem(
      `reactions-${slug}`,
      JSON.stringify(newReactions)
    );
  }

  if (!article) return <p>Loading...</p>;

  const formattedDate = new Date(article.date).toLocaleDateString(lang, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <article className="article-page">

      <h1>{article.title}</h1>

      <p className="article-meta">

        <span>{formattedDate}</span>

        {article.author && (
          <>
            {' '}·{' '}
            <span
              className="article-author"
              onClick={() =>
                navigate(`/${lang}/author/${encodeURIComponent(article.author)}`)
              }
            >
              {article.author}
            </span>
          </>
        )}

        {article.categories?.length > 0 && (
          <> · <span>{article.categories.join(', ')}</span></>
        )}

        <span className="article-views">
          {' '}· 👁 {views}
        </span>

      </p>

      {article.image && (
  <figure className="article-main-image-block">
    <img src={article.image} alt={article.title} className="article-main-image" />
    {article.imageCaption && (
      <figcaption className="image-caption">{article.imageCaption}</figcaption>
    )}
  </figure>
)}

      {article.lead && (
        <p className="article-lead">{article.lead}</p>
      )}

      {/* Контент */}
      {Array.isArray(article.content) &&
        article.content.map((block, i) => {

          if (!block || typeof block !== 'object') return null;

          switch (block.type) {

            case 'paragraph':
              return <p key={i}>{block.text}</p>;

            case 'heading':{
              const Tag = `h${block.level || 2}`;
              return <Tag key={i}>{block.text}</Tag>;
            }
              

            case 'link':
              return (
                <p key={i}>
                  <a href={block.url} target="_blank" rel="noopener noreferrer">
                    {block.name || block.url}
                  </a>
                </p>
              );

            case 'image':
              return (
                <figure className="article-main-image-block">
                  <img
                  key={i}
                  src={block.src}
                  alt={block.alt || ''}
                  className="article-inline-image"
                />
                    {article.imageCaption && (
                  <figcaption className="image-caption">{article.imageCaption}</figcaption>
                )}
                </figure>
                
              );

            default:
              return null;
          }
        })
      }

      {/* Галерея */}
      

      {/* Реакции */}
      <div className="article-reactions">

        <button onClick={() => addReaction('like')}>
          👍 {reactions.like}
        </button>

        <button onClick={() => addReaction('love')}>
          ❤️ {reactions.love}
        </button>

        <button onClick={() => addReaction('fire')}>
          🔥 {reactions.fire}
        </button>

      </div>

      {/* Источник */}
      {article.source && article.source.url && (
        <p className="article-source">
          Source:{' '}
          <a href={article.source.url} target="_blank" rel="noopener noreferrer">
            {article.source.name || article.source.url}
          </a>
        </p>
      )}

    </article>
  );
}

export default ArticlePage;