import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ArticleCard from "../components/ArticleCard";

const articleModules = import.meta.glob("../data/articles/*/*.json", {
  eager: true,
  import: "default"
});

function Articles() {

  const { t, i18n } = useTranslation();
  const lang = i18n.language.split("-")[0];

  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const [allArticles, setAllArticles] = useState([]);
  const [categories, setCategories] = useState(["all"]);

  const [visibleCount, setVisibleCount] = useState(6);

  // загрузка статей при смене языка
  useEffect(() => {

    const loadedArticles = Object.entries(articleModules)
      .filter(([path]) => path.includes(`/articles/${lang}/`))
      .map(([, data]) => data)
      .sort((a, b) => new Date(b.date) - new Date(a.date));

    setAllArticles(loadedArticles);

    // категории
    const categorySet = new Set(["all"]);

    loadedArticles.forEach(article => {
      article.categories?.forEach(cat => categorySet.add(cat));
    });

    setCategories(Array.from(categorySet));

    // сброс фильтров при смене языка
    setSearch("");
    setSearchInput("");
    setCategory("all");
    setVisibleCount(6);

  }, [lang]);

  // сброс showMore при фильтрах
  useEffect(() => {
    setVisibleCount(6);
  }, [category, search]);

  // фильтрация
  const filteredArticles = allArticles.filter(article => {

    const matchesCategory =
      category === "all" || article.categories?.includes(category);

    const title = article.title?.toLowerCase() || "";
    const text = article.content?.join(" ").toLowerCase() || "";

    const matchesSearch =
      title.includes(search.toLowerCase()) ||
      text.includes(search.toLowerCase());

    return matchesCategory && matchesSearch;

  });

  const visibleArticles = filteredArticles.slice(0, visibleCount);

  return (
    <div className="articles-page">

      <section className="articles-header">
        <div className="articles-text">
          <h1>{t("articles.title")}</h1>
          <p className="articles-subtitle">{t("articles.subtitle")}</p>
        </div>
      </section>

      <div className="articles-controls">

        {/* поиск */}
        <div className="articles-search-box">

          <input
            type="text"
            placeholder={t("articles.search")}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="articles-search"
          />

          <button
            className="search-button"
            onClick={() => setSearch(searchInput)}
          >
            {t("articles.searchButton")}
          </button>

        </div>

        {/* категории */}
        <div className="articles-categories">

          {categories.map(cat => (

            <button
              key={cat}
              className={`category-btn ${cat === category ? "active" : ""}`}
              onClick={() => setCategory(cat)}
            >
              {t(`articles.categories.${cat}`, cat)}
            </button>

          ))}

        </div>

      </div>

      {/* статьи */}

      <div className="articles-grid">

        {visibleArticles.map(article => (
          <ArticleCard
            key={article.slug || article.id}
            article={article}
          />
        ))}

      </div>

      {/* показать ещё */}

      {visibleCount < filteredArticles.length && (

        <button
          className="search-button"
          style={{ marginBottom: "40px" }}
          onClick={() => setVisibleCount(prev => prev + 6)}
        >
          {t("articles.showMore")}
        </button>

      )}

      {/* нет результатов */}

      {filteredArticles.length === 0 && (
        <p className="no-results">{t("articles.noResults")}</p>
      )}

    </div>
  );
}

export default Articles;