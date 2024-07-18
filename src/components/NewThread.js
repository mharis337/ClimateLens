/* eslint-disable jsx-a11y/no-redundant-roles */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import './styles/NewThread.css';

const NewThread = ({ discussions, setDiscussions }) => {
  const [newThread, setNewThread] = useState({
    title: '',
    description: '',
    author: '',
    date: new Date().toISOString().split('T')[0],
    replies: 0,
    posts: []
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewThread({ ...newThread, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!newThread.title) formErrors.title = 'Title is required';
    if (!newThread.author) formErrors.author = 'Author is required';
    if (!newThread.description) formErrors.description = 'Description is required';
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setDiscussions([newThread, ...discussions]);
      navigate('/discussion');
    }
  };

  return (
    <div className='thread' role="region" aria-label="Create new discussion thread">
      <div className="container mt-5">
        <h1 className='title' role="heading" aria-level="1">Create New Thread</h1>
        <Form onSubmit={handleSubmit} className='innerTextThread'>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter thread title"
              name="title"
              value={newThread.title}
              onChange={handleInputChange}
              isInvalid={!!errors.title}
              aria-required="true"
            />
            <Form.Control.Feedback type="invalid">
              {errors.title}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formAuthor">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="author"
              value={newThread.author}
              onChange={handleInputChange}
              isInvalid={!!errors.author}
              aria-required="true"
            />
            <Form.Control.Feedback type="invalid">
              {errors.author}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter thread description"
              name="description"
              value={newThread.description}
              onChange={handleInputChange}
              isInvalid={!!errors.description}
              aria-required="true"
            />
            <Form.Control.Feedback type="invalid">
              {errors.description}
            </Form.Control.Feedback>
          </Form.Group>
          {Object.keys(errors).length > 0 && (
            <Alert variant="danger" style={{color:"white"}} aria-live="assertive">
              Please fill in all fields.
            </Alert>
          )}
          <Button variant="primary" type="submit" className="create-thread-button threadButton" aria-label="Create new discussion thread">
            Create Thread
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default NewThread;
