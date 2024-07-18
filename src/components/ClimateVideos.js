/* eslint-disable jsx-a11y/iframe-has-title */
import { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import "./styles/Videos.css";

const loadLocale = async (locale) => {
  const response = await fetch(`/locales/${locale}.json`);
  const data = await response.json();
  return data;
};

const ClimateVideos = ({ locale }) => {
  const [texts, setTexts] = useState({});

  useEffect(() => {
    const fetchTexts = async () => {
      const loadedTexts = await loadLocale(locale);
      setTexts(loadedTexts);
    };
    fetchTexts();
  }, [locale]);

  const videos = [
    {
      title: texts.video1Title,
      description: texts.video1Description,
      url: texts.video1Url,
    },
    {
      title: texts.video2Title,
      description: texts.video2Description,
      url: texts.video2Url,
    },
    {
      title: texts.video3Title,
      description: texts.video3Description,
      url: texts.video3Url,
    },
    {
      title: texts.video4Title,
      description: texts.video4Description,
      url: texts.video4Url,
    },
    {
      title: texts.video5Title,
      description: texts.video5Description,
      url: texts.video5Url,
    },
    {
      title: texts.video6Title,
      description: texts.video6Description,
      url: texts.video6Url,
    },
    {
      title: texts.video1Title,
      description: texts.video1Description,
      url: texts.video1Url,
    },
    {
      title: texts.video2Title,
      description: texts.video2Description,
      url: texts.video2Url,
    },
    {
      title: texts.video3Title,
      description: texts.video3Description,
      url: texts.video3Url,
    },
    {
      title: texts.video4Title,
      description: texts.video4Description,
      url: texts.video4Url,
    },
    {
      title: texts.video5Title,
      description: texts.video5Description,
      url: texts.video5Url,
    },
    {
      title: texts.video6Title,
      description: texts.video6Description,
      url: texts.video6Url,
    },
  ];

  return (
    <div style={{ background: "#a5d5e7ff" }}>
      <Container fluid style={{ paddingTop: "20px", paddingBottom: "20px" }} role="region" aria-label={texts.climateVideos}>
        <Row className="justify-content-center">
          {videos.map((video, index) => (
            <Col key={index} md={2}>
              <Card className="video-card w-100">
                <div className="video-wrapper">
                  <iframe
                    className="video-iframe"
                    src={video.url}
                    title={video.title}
                    allowFullScreen
                    aria-label={video.description}
                  ></iframe>
                </div>
                <Card.Body>
                  <Card.Title>{video.title}</Card.Title>
                  <Card.Text>{video.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ClimateVideos;
