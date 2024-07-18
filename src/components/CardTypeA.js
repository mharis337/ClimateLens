/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Card, Alert } from "react-bootstrap";
import { Heart, Share } from "react-bootstrap-icons";
import "./styles/DiscussionBoard.css";

const CardTypeA = ({ title, description, author, date, replies }) => {
  const [alert, setAlert] = useState({ show: false, message: '', variant: '' });

  const handleFavorite = () => {
    setAlert({ show: true, message: `You have favorited the article: ${title}`, variant: 'success'});
  };

  const handleShare = () => {
    setAlert({ show: true, message: `You have shared the article: ${title}`, variant: 'info'});
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
      <Card className="cardStyle innerText">
        <Card.Body>
          <Card.Title className="crd-title">{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <div className="crd-footer">
            <div>
              <span>
                Posted by {author} on {date}
              </span>
              <span> • </span>
              <span>Replies: {replies}</span>
            </div>
            <div className="overview-card-actions">
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

export default CardTypeA;
