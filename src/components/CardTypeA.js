import { Card, Button } from "react-bootstrap";
import "./styles/DiscussionBoard.css";

const CardTypeA = ({ title, description, author, date, replies }) => {
  return (
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
            <Button variant="link">Favorite</Button>
            <Button variant="link">Share</Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardTypeA;
