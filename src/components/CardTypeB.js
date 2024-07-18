/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Card, ListGroup, Alert } from "react-bootstrap";
import { Heart, Share } from "react-bootstrap-icons";
import "./styles/DiscussionBoard.css";

const CardTypeB = ({ author, time, platform, content, tags }) => {
  const [alert, setAlert] = useState({ show: false, message: '', variant: '' });

  const handleFavorite = () => {
    setAlert({ show: true, message: `You have favorited the post by ${author}`, variant: 'success' });
  };

  const handleShare = () => {
    setAlert({ show: true, message: `You have shared the post by ${author}`, variant: 'info' });
  };

  const handleCloseAlert = () => {
    setAlert({ ...alert, show: false });
  };

  return (
    <>
      {alert.show && (
        <Alert variant={alert.variant} onClose={handleCloseAlert} dismissible style={{color:'red', fontSize:'20px'}}>
          {alert.message}
        </Alert>
      )}
      <Card className="cardStyle">
        <Card.Body>
          <div className="post-card-header">
            <div className="post-card-avatar"></div>
            <div className="innerText">
              <Card.Title className="crd-title">{author}</Card.Title>
              <Card.Subtitle>
                {time} - {platform}
              </Card.Subtitle>
            </div>
          </div>
          <div className="crd-content-placeholder"></div>
          <Card.Text className="innerText">{content}</Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <ListGroup horizontal className="crd-tags innerText flex-grow-1">
              {tags.map((tag, index) => (
                <ListGroup.Item key={index} className="crd-tag">
                  {tag}
                </ListGroup.Item>
              ))}
            </ListGroup>
            <div className="overview-card-actions ml-3">
              <a href="#" className="card-link icon" onClick={handleFavorite}>
                <Heart />
              </a>
              <a href="#" className="card-link icon" onClick={handleShare}>
                <Share />
              </a>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardTypeB;
