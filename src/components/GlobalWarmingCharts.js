import { useState, useEffect } from 'react';
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';

const loadLocale = async (locale) => {
  const response = await fetch(`/locales/${locale}.json`);
  const data = await response.json();
  return data;
};

const GlobalWarmingCharts = ({ locale }) => {
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
    co2: 'img/tempvco2.mp4',
    sea_levels: 'img/sealevel.mp4',
    temperatures: 'img/temperature.mp4',
    ice_melt: 'img/icemelt.mp4',
  };

  const handleClick = (layer) => {
    setActiveLayer(layer);
  };

  return (
    <Container fluid style={{ height: '100vh', width: '100vw', background: '#a5d5e7ff' }} role="region" aria-label={texts.globalWarmingCharts}>
      <Row>
        <Col>
          <ButtonGroup role="group" aria-label={texts.layerSelection}>
            {[
              { name: texts.co2VsTemperature, value: 'co2' },
              { name: texts.seaLevels, value: 'sea_levels' },
              { name: texts.temperatures, value: 'temperatures' },
              { name: texts.iceMelt, value: 'ice_melt' },
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
        <Col md={activeLayer === 'temperatures' ? 6 : 10}>
          <video 
            src={media[activeLayer]} 
            autoPlay 
            loop 
            muted 
            style={{ width: '100%', height: '100%', objectFit: 'contain', pointerEvents: 'none' }} 
            aria-label={texts[activeLayer]}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default GlobalWarmingCharts;
