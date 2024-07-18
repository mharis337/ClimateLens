import { useEffect, useState } from "react";
import "./styles/Article.css";

const loadArticle = async (locale) => {
  const response = await fetch(`/locales/${locale}.json`);
  const data = await response.json();
  return data.staticArticle;
};

const Article = ({ locale }) => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const articleData = await loadArticle(locale);
      setArticle(articleData);
    };

    fetchArticle();
  }, [locale]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="article-page">
      <div className=" container" style={{ background: "#A5D5E7ff" }}>
        <h1 className="article-title">{article.title}</h1>
        <h4>{article.author}</h4>
        <p>{article.date}</p>
        {article.content.map((section, index) => (
          <p key={index}>{section.text}</p>
        ))}
      </div>
    </div>
  );
};

export default Article;
