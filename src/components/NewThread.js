import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
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

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewThread({ ...newThread, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDiscussions([newThread, ...discussions]);
    navigate('/discussion');
  };

  return (
    <div className='thread'>
      <div className="container mt-5">
        <h1 className='title'>Create New Thread</h1>
        <Form onSubmit={handleSubmit} className='innerTextThread'>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter thread title"
              name="title"
              value={newThread.title}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formAuthor">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="author"
              value={newThread.author}
              onChange={handleInputChange}
            />
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
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="create-thread-button threadButton">
            Create Thread
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default NewThread;
