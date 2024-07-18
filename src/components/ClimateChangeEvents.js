/* eslint-disable jsx-a11y/no-redundant-roles */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Alert } from 'react-bootstrap';
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
  const [alert, setAlert] = useState({ show: false, message: '', variant: '' });

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

  const handleJoinEvent = (title) => {
    setAlert({ show: true, message: `You have joined the event: ${title}`, variant: 'success' });
  };

  const handleCloseAlert = () => {
    setAlert({ ...alert, show: false });
  };

  return (
    <div className='thread' role="region" aria-label={texts.eventsTitle}>
      <div className="innerText">
        <div className="container mt-5">
          {alert.show && (
            <Alert variant={alert.variant} onClose={handleCloseAlert} dismissible style={{color:'Red', fontSize:'20px'}} aria-live="assertive">
              {alert.message}
            </Alert>
          )}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="eventsTitle" role="heading" aria-level="1">{texts.eventsTitle}</h1>
            <Button className="createEventButton largeText" onClick={handleCreateEvent} aria-label="Create a new event">{texts.createNewEvent}</Button>
          </div>

          <div className="event-cards">
            {events.map((event, index) => (
              <Card key={index} className="mb-4 event-card" role="article" aria-labelledby={`event-title-${index}`}>
                <Card.Body>
                  <Card.Title id={`event-title-${index}`} className='eventTitle'>{event.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{event.date}</Card.Subtitle>
                  <Card.Text>{event.description}</Card.Text>
                  <Card.Text><strong>{texts.organizer}</strong> {event.organizer}</Card.Text>
                  <Card.Text><strong>{texts.participants}</strong> {event.participants}</Card.Text>
                  <Button
                    variant="primary"
                    className='createEventButton mediumText'
                    onClick={() => handleJoinEvent(event.title)}
                    aria-label={`Join the event: ${event.title}`}
                  >
                    {texts.joinEvent}
                  </Button>
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
