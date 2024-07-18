import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./styles/ClimateArticle.css";

const loadLocale = async (locale) => {
  const response = await fetch(`/locales/${locale}.json`);
  const data = await response.json();
  return data;
};

const ClimateArticle = ({ locale }) => {
  const [texts, setTexts] = useState({});

  useEffect(() => {
    const fetchTexts = async () => {
      const loadedTexts = await loadLocale(locale);
      setTexts(loadedTexts);
    };
    fetchTexts();
  }, [locale]);

  const articles = [
    {
      title: texts.article1Title,
      description: texts.article1Description,
    },
    {
      title: texts.article2Title,
      description: texts.article2Description,
    },
    {
      title: texts.article3Title,
      description: texts.article3Description,
    },
    {
      title: texts.article4Title,
      description: texts.article4Description,
    },
    {
      title: texts.article5Title,
      description: texts.article5Description,
    },
    {
      title: texts.article6Title,
      description: texts.article6Description,
    },
    {
      title: texts.article7Title,
      description: texts.article7Description,
    },
  ];

  return (
    <div style={{ background: "#a5d5e7ff" }}>
      <Container fluid style={{ paddingTop: "20px", paddingBottom: "20px" }} role="region" aria-label={texts.climateArticles}>
        {articles.map((article, index) => (
          <Row key={index} className="mb-3" role="article">
            <Col>
              <Card className="custom-card">
                <Card.Body>
                  <Card.Title className="custom-card-title" role="heading" aria-level="2">
                    {article.title}
                  </Card.Title>
                  <Card.Text>{article.description}</Card.Text>
                  <Button className="custom-button" href="/article" aria-label={`${texts.button} for ${article.title}`}>
                    {texts.button}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default ClimateArticle;
