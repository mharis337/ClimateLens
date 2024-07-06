import { useState } from 'react';
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';

const GlobalWarmingMap = () => {
  const [activeLayer, setActiveLayer] = useState('co2');

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
    <Container fluid style={{ height: '100vh', width: '100vw', background: '#a5d5e7ff' }}>
      <Row>
        <Col>
          <ButtonGroup>
            {[
              { name: 'CO2', value: 'co2' },
              { name: 'Sea Levels', value: 'sea_levels' },
              { name: 'Temperatures', value: 'temperatures' },
              { name: 'Ocean Warming', value: 'ocean_warming' },
            ].map((radio, idx) => (
              <Button
                key={idx}
                variant={activeLayer === radio.value ? "primary" : "secondary"}
                onClick={() => handleClick(radio.value)}
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
            />
          ) : (
            <img 
              src={media[activeLayer]} 
              alt={activeLayer} 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default GlobalWarmingMap;
