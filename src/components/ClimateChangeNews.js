import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './styles/ClimateChangeNews.css';

const loadLocale = async (locale) => {
  const response = await fetch(`/locales/${locale}.json`);
  const data = await response.json();
  return data;
};

const ClimateChangeNews = ({ locale }) => {
  const [texts, setTexts] = useState({});
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    const fetchTexts = async () => {
      const loadedTexts = await loadLocale(locale);
      setTexts(loadedTexts);
    };
    fetchTexts();
  }, [locale]);

  useEffect(() => {
    if (texts.newsArticle && Array.isArray(texts.newsArticle)) {
      setNewsItems(texts.newsArticle);
    }
  }, [texts]);

  return (
    <div className="news-page-wrapper">
      <div className="container" style={{ overflow: "hidden" }}>
        <h1 className="news-header">{texts.newsHeader}</h1>
        {newsItems.map((news, index) => (
          <Card key={index} className="news-card">
            <Card.Body className="d-flex justify-content-between align-items-center">
              <div>
                <Card.Title className="card-title">{news.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{`${texts.publishedOn} ${news.date} ${texts.by} ${news.author}`}</Card.Subtitle>
                <Card.Text>{news.description}</Card.Text>
                <div className="news-actions">
                  <a href={news.link} className="card-link">{texts.readMore}</a>
                  <a href={news.link} className="card-link">{texts.favorite}</a>
                  <a href={news.link} className="card-link">{texts.share}</a>
                </div>
              </div>
              <div className="dark-square"></div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ClimateChangeNews;
