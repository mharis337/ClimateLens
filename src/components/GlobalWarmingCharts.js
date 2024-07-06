import { useState } from 'react';
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';

const GlobalWarmingCharts = () => {
  const [activeLayer, setActiveLayer] = useState('co2');

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
    <Container fluid style={{ height: '100vh', width: '100vw', background: '#a5d5e7ff' }}>
      <Row>
        <Col>
          <ButtonGroup>
            {[
              { name: 'CO2 vs Temperature', value: 'co2' },
              { name: 'Sea Levels', value: 'sea_levels' },
              { name: 'Temperatures', value: 'temperatures' },
              { name: 'Ice Melt', value: 'ice_melt' },
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
        <Col md={activeLayer === 'temperatures' ? 6 : 10}>
          <video 
            src={media[activeLayer]} 
            autoPlay 
            loop 
            muted 
            style={{ width: '100%', height: '100%', objectFit: 'contain', pointerEvents: 'none' }} 
          />
        </Col>
      </Row>
    </Container>
  );
};

export default GlobalWarmingCharts;
