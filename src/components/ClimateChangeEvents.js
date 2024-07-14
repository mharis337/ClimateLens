import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import './styles/EventsPage.css';

const loadLocale = async (locale) => {
  const response = await fetch(`/locales/${locale}.json`);
  const data = await response.json();
  return data;
};

const EventsPage = ({ locale }) => {
  const navigate = useNavigate();
  const [texts, setTexts] = useState({});
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchTexts = async () => {
      const loadedTexts = await loadLocale(locale);
      setTexts(loadedTexts);
      setEvents(loadedTexts.climateEvents);
    };
    fetchTexts();
  }, [locale]);

  const handleCreateEvent = () => {
    navigate('/new-event');
  };

  return (
    <div className='thread'>
      <div className="innerText">
        <div className="container mt-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="eventsTitle">{texts.eventsTitle}</h1>
            <Button className="createEventButton largeText" onClick={handleCreateEvent}>{texts.createNewEvent}</Button>
          </div>

          <div className="event-cards">
            {events.map((event, index) => (
              <Card key={index} className="mb-4 event-card">
                <Card.Body>
                  <Card.Title className='eventTitle'>{event.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{event.date}</Card.Subtitle>
                  <Card.Text>{event.description}</Card.Text>
                  <Card.Text><strong>{texts.organizer}</strong> {event.organizer}</Card.Text>
                  <Card.Text><strong>{texts.participants}</strong> {event.participants}</Card.Text>
                  <Button variant="primary" className='createEventButton mediumText'>{texts.joinEvent}</Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
