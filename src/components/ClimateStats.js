import { useState, useEffect } from 'react';
import { Container, Carousel, Row, Col } from 'react-bootstrap';
import './styles/ClimateStats.css';

const ClimateStats = () => {
  const [index, setIndex] = useState(0);
  const [groupedStats, setGroupedStats] = useState([]);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const stats = [
    { title: 'Arctic Sea Ice Minimum Extent', value: '12.2', unit: 'percent per decade since 1979', trend: 'down' },
    { title: 'Ice Sheets', value: '408', unit: 'billion metric tons per year', trend: 'down' },
    { title: 'Sea Level', value: '4', unit: 'inches since January 1993', trend: 'up' },
    { title: 'Ocean Warming', value: '360', unit: 'zettajoules since 1955', trend: 'up' },
    { title: 'Carbon Dioxide', value: '427', unit: 'parts per million', trend: 'up' },
    { title: 'Global Temperature', value: '1.4', unit: '°C since preindustrial', trend: 'up' },
    { title: 'Methane', value: '1932', unit: 'parts per billion', trend: 'up' },
  ];

  useEffect(() => {
    const updateGrouping = () => {
      const newGroupedStats = [];
      let itemsPerGroup;

      if (window.innerWidth < 775) {
        itemsPerGroup = 1;
      } else if (window.innerWidth < 1225) {
        itemsPerGroup = 2;
      } else {
        itemsPerGroup = 3;
      }

      for (let i = 0; i < stats.length; i += itemsPerGroup) {
        newGroupedStats.push(stats.slice(i, i + itemsPerGroup));
      }

      setGroupedStats(newGroupedStats);
    };

    updateGrouping();
    window.addEventListener('resize', updateGrouping);

    return () => window.removeEventListener('resize', updateGrouping);
  }, []);

  return (
    <Container className="stat-colors" fluid>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null} style={{ color: '#FFF' }}>
        {groupedStats.map((group, idx) => (
          <Carousel.Item key={idx}>
            <Row>
              {group.map((stat, index) => (
                <Col key={index} md={3}>
                  <div className="stat-card">
                    <h3>{stat.title}</h3>
                    <div className={`value ${stat.trend}`}>{stat.value}</div>
                    <div className="unit">{stat.unit}</div>
                  </div>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default ClimateStats;
