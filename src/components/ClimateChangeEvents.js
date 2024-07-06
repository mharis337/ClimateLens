import { useNavigate } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import './styles/EventsPage.css';

const EventsPage = ({ events, setEvents }) => {
  const navigate = useNavigate();

  const handleCreateEvent = () => {
    navigate('/new-event');
  };

  return (
    <div className='thread'>
      <div className="innerText">
        <div className="container mt-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="eventsTitle">Upcoming Events</h1>
            <Button className="createEventButton largeText" onClick={handleCreateEvent}>Create New Event</Button>
          </div>

          <div className="event-cards">
            {events.map((event, index) => (
              <Card key={index} className="mb-4 event-card">
                <Card.Body>
                  <Card.Title className='eventTitle'>{event.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{event.date}</Card.Subtitle>
                  <Card.Text>{event.description}</Card.Text>
                  <Card.Text><strong>Organizer:</strong> {event.organizer}</Card.Text>
                  <Card.Text><strong>Participants:</strong> {event.participants}</Card.Text>
                  <Button variant="primary" className='createEventButton mediumText'>Join Event</Button>
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
