import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';
import './styles/Carousel.css';

const loadLocale = async (locale) => {
  const response = await fetch(`/locales/${locale}.json`);
  const data = await response.json();
  return data;
};

const CarouselSection = ({ locale }) => {
  const [texts, setTexts] = useState({});

  useEffect(() => {
    const fetchTexts = async () => {
      const loadedTexts = await loadLocale(locale);
      setTexts(loadedTexts);
    };
    fetchTexts();
  }, [locale]);

  const gradient1 = 'linear-gradient(to right, rgba(248, 187, 60, 0.7), rgba(165, 222, 252, 0.7))';
  const gradient2 = 'linear-gradient(to right, rgba(213, 55, 55, 0.7), rgba(208, 232, 244, 0.7))';
  const gradient3 = 'linear-gradient(to right, rgba(4, 196, 245, 0.7), rgba(32, 108, 60, 0.7))';

  return (
    <div className="hero-section">
      <div className="overlay"></div>
      <div className="hero-content">
        <Carousel slide={true}>
          <Carousel.Item>
            <CarouselImage
              image="/img/hero-bg.png"
              gradient={gradient1}
            >
              <h3>{texts.understandingClimateChange}</h3>
              <p>{texts.climateChangeImpact}</p>
            </CarouselImage>
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImage
              image="/img/hero2-bg.jpg"
              gradient={gradient2}
            >
              <h3>{texts.renewableEnergySolutions}</h3>
              <p>{texts.renewableEnergyAdvancements}</p>
            </CarouselImage>
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImage
              image="/img/hero3-bg.jpg"
              gradient={gradient3}
            >
              <h3>{texts.takeAction}</h3>
              <p>{texts.sustainablePractices}</p>
            </CarouselImage>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselSection;
