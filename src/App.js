import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab } from 'react-bootstrap';

import NavigationBar from './components/NavigationBar';
import CarouselSection from './components/CarouselSection';
import ClimateStats from './components/ClimateStats';
import GlobalWarmingMap from './components/GlobalWarmingMap';
import GlobalWarmingCharts from './components/GlobalWarmingCharts';
import Footer from './components/Footer';
import ClimateVideos from './components/ClimateVideos';
import ClimateArticle from './components/ClimateArticle';
import DiscussionBoard from './components/Discussion';
import ClimateChangeFAQ from './components/ClimateChangeFAQ';
import ClimateChangeNews from './components/ClimateChangeNews';
import NewThread from './components/NewThread';
import ClimateChangeEvents from './components/ClimateChangeEvents';
import NewEvent from './components/NewEvent';

const App = () => {
  const [navbarExpanded, setNavbarExpanded] = useState(false);
  const [discussions, setDiscussions] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/discussions.json')
      .then(response => response.json())
      .then(data => setDiscussions(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    fetch('/events.json')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleToggle = (isExpanded) => {
    setNavbarExpanded(isExpanded);
  };

  return (
    <Router>
      <div className="App" style={{ paddingTop: '60px' }}>
        <NavigationBar onToggle={handleToggle} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discussion" element={<DiscussionPage discussions={discussions} setDiscussions={setDiscussions} />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/news" element={<News />} />
          <Route path="/events" element={<ClimateChangeEvents events={events} setEvents={setEvents} />} />
          <Route path="/new-thread" element={<NewThread discussions={discussions} setDiscussions={setDiscussions} />} />
          <Route path="/new-event" element={<NewEvent events={events} setEvents={setEvents} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const Home = () => (
  <>
    <CarouselSection />
    <ClimateStats />
    <Tabs defaultActiveKey="maps" className="tabStyle" fill>
      <Tab eventKey="maps" title="Maps">
        <div style={{ height: '100%' }}>
          <GlobalWarmingMap />
        </div>
      </Tab>
      <Tab eventKey="charts" title="Charts">
        <div style={{ height: '100%' }}>
          <GlobalWarmingCharts />
        </div>
      </Tab>
      <Tab eventKey="resources" title="Resources">
        <Tabs className="tabStyle" fill>
          <Tab eventKey="videos" title="Videos">
            <ClimateVideos />
          </Tab>
          <Tab eventKey="articles" title="Articles">
            <ClimateArticle />
          </Tab>
        </Tabs>
      </Tab>
    </Tabs>
  </>
);

const DiscussionPage = ({ discussions, setDiscussions }) => (
  <DiscussionBoard discussions={discussions} setDiscussions={setDiscussions} />
);

const Faq = () => <ClimateChangeFAQ />;
const News = () => <ClimateChangeNews />;

export default App;
