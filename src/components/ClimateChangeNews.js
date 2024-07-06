import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './styles/ClimateChangeNews.css';

const ClimateChangeNews = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    fetch('/newsData.json')
      .then(response => response.json())
      .then(data => setNewsItems(data))
      .catch(error => console.error('Error fetching news data:', error));
  }, []);

  return (
    <div className="news-page-wrapper">
      <div className="container" style={{ overflow: "hidden" }}>
        <h1 className="news-header">Climate Change News</h1>
        {newsItems.map((news, index) => (
          <Card key={index} className="news-card">
            <Card.Body className="d-flex justify-content-between align-items-center">
              <div>
                <Card.Title className="card-title">{news.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{`Published on ${news.date} by ${news.author}`}</Card.Subtitle>
                <Card.Text>{news.description}</Card.Text>
                <div className="news-actions">
                  <a href={news.link} className="card-link">Read more</a>
                  <a href="#" className="card-link">Favorite</a>
                  <a href="#" className="card-link">Share</a>
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
