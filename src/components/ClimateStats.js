import { useState, useEffect } from 'react';
import { Container, Carousel, Row, Col } from 'react-bootstrap';
import './styles/ClimateStats.css';

const loadLocale = async (locale) => {
  const response = await fetch(`/locales/${locale}.json`);
  const data = await response.json();
  return data;
};

const ClimateStats = ({ locale }) => {
  const [index, setIndex] = useState(0);
  const [groupedStats, setGroupedStats] = useState([]);
  const [texts, setTexts] = useState({});

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const fetchTexts = async () => {
      const loadedTexts = await loadLocale(locale);
      setTexts(loadedTexts);
    };
    fetchTexts();
  }, [locale]);

  const stats = [
    { title: texts.arcticSeaIceMinimumExtent, value: '12.2', unit: texts.percentPerDecade, trend: 'down' },
    { title: texts.iceSheets, value: '408', unit: texts.billionMetricTonsPerYear, trend: 'down' },
    { title: texts.seaLevel, value: '4', unit: texts.inchesSince1993, trend: 'up' },
    { title: texts.oceanWarming, value: '360', unit: texts.zettajoulesSince1955, trend: 'up' },
    { title: texts.carbonDioxide, value: '427', unit: texts.partsPerMillion, trend: 'up' },
    { title: texts.globalTemperature, value: '1.4', unit: texts.degreesSincePreindustrial, trend: 'up' },
    { title: texts.methane, value: '1932', unit: texts.partsPerBillion, trend: 'up' },
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [texts]);

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
