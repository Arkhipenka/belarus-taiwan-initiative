import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const articleModules = import.meta.glob('../data/articles/*/*.json', {
  eager: true,
  import: 'default'
});

function ArticlePage() {
  const { slug } = useParams();
  const { i18n } = useTranslation();
  const lang = i18n.language.split('-')[0]; // en, ru, zh и т.д.
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // Подгружаем все статьи нужного языка
    const loadedArticles = Object.entries(articleModules)
      .filter(([path]) => path.includes(`/articles/${lang}/`))
      .map(([, data]) => data);

    const foundArticle = loadedArticles.find(a => a.slug === slug);
    setArticle(foundArticle);
  }, [lang, slug]);

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
        {article.categories?.length > 0 && (
          <> · <span>{article.categories.join(', ')}</span></>
        )}
      </p>

      {article.image && (
        <img src={article.image} alt={article.title} className="article-main-image" />
      )}

      {/* Контент статьи */}
      {Array.isArray(article.content) &&
        article.content.map((block, i) => (
          <div key={i} dangerouslySetInnerHTML={{ __html: block }} />
        ))
      }

      {/* Галерея */}
      {Array.isArray(article.gallery) && article.gallery.length > 0 && (
        <div className="article-gallery">
          {article.gallery.map((img, idx) => (
            <img key={idx} src={img} alt={`gallery ${idx + 1}`} />
          ))}
        </div>
      )}

      {/* Ссылка на источник */}
      {article.source && (
        <p className="article-source">
          Source: <a href={article.source} target="_blank" rel="noopener noreferrer">{article.source}</a>
        </p>
      )}

    </article>
  );
}

export default ArticlePage;