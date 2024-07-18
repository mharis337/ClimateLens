/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import { Card, Alert } from 'react-bootstrap';
import { Heart, Share, Book } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import "./styles/ClimateChangeNews.css";

const loadLocale = async (locale) => {
  const response = await fetch(`/locales/${locale}.json`);
  const data = await response.json();
  return data;
};

const ClimateChangeNews = ({ locale }) => {
  const [texts, setTexts] = useState({});
  const [newsItems, setNewsItems] = useState([]);
  const [alert, setAlert] = useState({ show: false, message: '', variant: '' });

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

  const handleFavorite = (title) => {
    setAlert({ show: true, message: `You have favorited the article: ${title}`, variant: 'success' });
  };

  const handleShare = (title) => {
    setAlert({ show: true, message: `You have shared the article: ${title}`, variant: 'info' });
  };

  const handleCloseAlert = () => {
    setAlert({ ...alert, show: false });
  };

  return (
    <div className="news-page-wrapper">
      <div className="container" style={{ overflow: "hidden" }} role="region" aria-label={texts.newsHeader}>
        <h1 className="news-header">{texts.newsHeader}</h1>
        {alert.show && (
          <Alert variant={alert.variant} onClose={handleCloseAlert} dismissible>
            {alert.message}
          </Alert>
        )}
        {newsItems.map((news, index) => (
          <Card key={index} className="news-card" role="article" aria-labelledby={`news-title-${index}`} aria-describedby={`news-description-${index}`}>
            <Card.Body className="d-flex justify-content-between align-items-center">
              <div>
                <Card.Title id={`news-title-${index}`} className="card-title">
                  {news.title}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {`${texts.publishedOn} ${news.date} ${texts.by} ${news.author}`}
                </Card.Subtitle>
                <Card.Text id={`news-description-${index}`}>
                  {news.description}
                </Card.Text>
                <div className="news-actions">
                  <Link to="/article" className="card-link icon" aria-label={`Read full article: ${news.title}`}>
                    <Book />
                  </Link>
                  <a href="#" className="card-link icon" onClick={() => handleFavorite(news.title)} aria-label={`Favorite article: ${news.title}`}>
                    <Heart />
                  </a>
                  <a href="#" className="card-link icon" onClick={() => handleShare(news.title)} aria-label={`Share article: ${news.title}`}>
                    <Share />
                  </a>
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
