/* eslint-disable jsx-a11y/no-redundant-roles */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";

const NewEvent = ({ events, setEvents }) => {
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    organizer: "",
    date: "",
    participants: 0,
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!newEvent.title) formErrors.title = 'Title is required';
    if (!newEvent.organizer) formErrors.organizer = 'Organizer is required';
    if (!newEvent.date) formErrors.date = 'Date is required';
    if (!newEvent.description) formErrors.description = 'Description is required';
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setEvents([newEvent, ...events]);
      navigate("/events");
    }
  };

  return (
    <div className="thread" role="region" aria-label="Create new event">
      <div className="container mt-5">
        <h1 className="title" role="heading" aria-level="1">Create New Event</h1>
        <Form onSubmit={handleSubmit} className="innerTextThread">
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter event title"
              name="title"
              value={newEvent.title}
              onChange={handleInputChange}
              isInvalid={!!errors.title}
              aria-required="true"
            />
            <Form.Control.Feedback type="invalid">
              {errors.title}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formOrganizer">
            <Form.Label>Organizer</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter organizer name"
              name="organizer"
              value={newEvent.organizer}
              onChange={handleInputChange}
              isInvalid={!!errors.organizer}
              aria-required="true"
            />
            <Form.Control.Feedback type="invalid">
              {errors.organizer}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={newEvent.date}
              onChange={handleInputChange}
              isInvalid={!!errors.date}
              aria-required="true"
            />
            <Form.Control.Feedback type="invalid">
              {errors.date}
            </Form.Control.Feedback>
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
              isInvalid={!!errors.description}
              aria-required="true"
            />
            <Form.Control.Feedback type="invalid">
              {errors.description}
            </Form.Control.Feedback>
          </Form.Group>
          {Object.keys(errors).length > 0 && (
            <Alert variant="danger" style={{ color: "white" }} aria-live="assertive">
              Please fill in all fields.
            </Alert>
          )}
          <Button
            variant="primary"
            type="submit"
            className="threadButton create-thread-button"
            aria-label="Create new event"
          >
            Create Event
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default NewEvent;
