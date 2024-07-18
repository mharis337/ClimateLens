import { useState, useEffect } from 'react';
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';

const loadLocale = async (locale) => {
  const response = await fetch(`/locales/${locale}.json`);
  const data = await response.json();
  return data;
};

const GlobalWarmingMap = ({ locale }) => {
  const [activeLayer, setActiveLayer] = useState('co2');
  const [texts, setTexts] = useState({});

  useEffect(() => {
    const fetchTexts = async () => {
      const loadedTexts = await loadLocale(locale);
      setTexts(loadedTexts);
    };
    fetchTexts();
  }, [locale]);

  const media = {
    co2: 'img/CO2.mp4',
    sea_levels: 'img/sea-levels.jpg',
    temperatures: 'img/temperature.png',
    ocean_warming: 'img/seaTemp.mp4',
  };

  const handleClick = (layer) => {
    setActiveLayer(layer);
  };

  return (
    <Container fluid style={{ height: '100vh', width: '100vw', background: '#a5d5e7ff' }} role="region" aria-label={texts.globalWarmingMap}>
      <Row>
        <Col>
          <ButtonGroup role="group" aria-label={texts.layerSelection}>
            {[
              { name: texts.co2, value: 'co2' },
              { name: texts.seaLevels, value: 'sea_levels' },
              { name: texts.temperatures, value: 'temperatures' },
              { name: texts.oceanWarming, value: 'ocean_warming' },
            ].map((radio, idx) => (
              <Button
                key={idx}
                variant={activeLayer === radio.value ? "primary" : "secondary"}
                onClick={() => handleClick(radio.value)}
                aria-pressed={activeLayer === radio.value}
              >
                {radio.name}
              </Button>
            ))}
          </ButtonGroup>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center" style={{ height: 'calc(100vh - 50px)' }}>
        <Col md={10}>
          {activeLayer === 'co2' || activeLayer === 'ocean_warming' ? (
            <video 
              src={media[activeLayer]} 
              autoPlay 
              loop 
              muted 
              style={{ width: '100%', height: '100%', objectFit: 'contain', pointerEvents: 'none' }} 
              aria-label={texts[activeLayer]}
            />
          ) : (
            <img 
              src={media[activeLayer]} 
              alt={texts[activeLayer]} 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default GlobalWarmingMap;
