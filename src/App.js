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
import Article from './components/Article';

import 'bootstrap/dist/css/bootstrap.min.css';

const loadLocale = async (locale) => {
  const response = await fetch(`/locales/${locale}.json`);
  const data = await response.json();
  return data;
};

const App = () => {
  const [setNavbarExpanded] = useState(false);
  const [discussions, setDiscussions] = useState([]);
  const [events, setEvents] = useState([]);
  const [locale, setLocale] = useState('en');

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

  const handleLanguageChange = () => {
    const newLocale = locale === 'en' ? 'fr' : 'en';
    setLocale(newLocale);
  };

  return (
    <Router>
      <div className="App" style={{ paddingTop: '60px' }}>
        <NavigationBar onToggle={handleToggle} onLanguageChange={handleLanguageChange} locale={locale} />
        <Routes>
          <Route path="/" element={<Home locale={locale} />} />
          <Route path="/discussion" element={<DiscussionPage discussions={discussions} setDiscussions={setDiscussions} locale={locale} />} />
          <Route path="/faq" element={<Faq locale={locale} />} />
          <Route path="/news" element={<News locale={locale} />} />
          <Route path="/events" element={<ClimateChangeEvents events={events} setEvents={setEvents} locale={locale} />} />
          <Route path="/new-thread" element={<NewThread discussions={discussions} setDiscussions={setDiscussions} locale={locale} />} />
          <Route path="/new-event" element={<NewEvent events={events} setEvents={setEvents} locale={locale} />} />
          <Route path="/article" element={<Article locale={locale} />} />
        </Routes>
        <Footer locale={locale} />
      </div>
    </Router>
  );
}

const Home = ({ locale }) => {
  const [texts, setTexts] = useState({});

  useEffect(() => {
    const fetchTexts = async () => {
      const loadedTexts = await loadLocale(locale);
      setTexts(loadedTexts);
    };
    fetchTexts();
  }, [locale]);

  return (
    <>
      <CarouselSection locale={locale} />
      <ClimateStats locale={locale} />
      <Tabs defaultActiveKey="maps" className="tabStyle" fill role="tablist">
        <Tab eventKey="maps" title={texts.maps} role="tab" aria-label={texts.maps}>
          <div style={{ height: '100%' }}>
            <GlobalWarmingMap locale={locale} />
          </div>
        </Tab>
        <Tab eventKey="charts" title={texts.charts} role="tab" aria-label={texts.charts}>
          <div style={{ height: '100%' }}>
            <GlobalWarmingCharts locale={locale} />
          </div>
        </Tab>
        <Tab eventKey="resources" title={texts.resources} role="tab" aria-label={texts.resources}>
          <Tabs className="tabStyle" fill role="tablist">
            <Tab eventKey="videos" title={texts.videos} role="tab" aria-label={texts.videos}>
              <ClimateVideos locale={locale} />
            </Tab>
            <Tab eventKey="articles" title={texts.articles} role="tab" aria-label={texts.articles}>
              <ClimateArticle locale={locale} />
            </Tab>
          </Tabs>
        </Tab>
      </Tabs>
    </>
  );
};

const DiscussionPage = ({ discussions, setDiscussions, locale }) => (
  <DiscussionBoard discussions={discussions} setDiscussions={setDiscussions} locale={locale} />
);

const Faq = ({ locale }) => <ClimateChangeFAQ locale={locale} />;
const News = ({ locale }) => <ClimateChangeNews locale={locale} />;

export default App;
