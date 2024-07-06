import { Card, ListGroup } from "react-bootstrap";
import "./styles/DiscussionBoard.css";

const CardTypeB = ({ author, time, platform, content, tags }) => {
  return (
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
        <ListGroup horizontal className="crd-tags innerText">
          {tags.map((tag, index) => (
            <ListGroup.Item key={index} className="crd-tag">
              {tag}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default CardTypeB;
