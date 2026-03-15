import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

// Загружаем все JSON статьи
const articles = import.meta.glob('../data/articles/**/*.json');

function ArticlePage() {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticle = async () => {
      setLoading(true);
      const lang = i18n.language.split('-')[0];

      // Ищем ключ по id и языку
      const key = Object.keys(articles).find(p =>
        p.endsWith(`/${lang}/${id}.json`)
      );

      if (!key) {
        setArticle(null);
        setLoading(false);
        return;
      }

      try {
        const module = await articles[key]();
        setArticle(module.default);
      } catch (err) {
        console.error('Ошибка при загрузке статьи', err);
        setArticle(null);
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [id, i18n.language]);

  if (loading) return <p>Loading...</p>;
  if (!article) return <p>Article not found</p>;

  return (
    <article className="article-page">
      <h1>{article.title}</h1>

      <p className="article-meta">
        <span>{article.date}</span> · <span>{article.category}</span>
      </p>

      {article.image && (
        <img src={article.image} alt={article.title} />
      )}

      {Array.isArray(article.content) &&
        article.content.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
    </article>
  );
}

export default ArticlePage;
