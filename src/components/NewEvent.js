import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const NewEvent = ({ events, setEvents }) => {
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    organizer: "",
    date: "",
    participants: 0,
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEvents([newEvent, ...events]);
    navigate("/events");
  };

  return (
    <div className="thread">
      <div className="container mt-5">
        <h1 className="title">Create New Event</h1>
        <Form onSubmit={handleSubmit} className="innerTextThread">
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter event title"
              name="title"
              value={newEvent.title}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formOrganizer">
            <Form.Label>Organizer</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter organizer name"
              name="organizer"
              value={newEvent.organizer}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={newEvent.date}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter event description"
              name="description"
              value={newEvent.description}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="threadButton create-thread-button"
          >
            Create Event
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default NewEvent;
