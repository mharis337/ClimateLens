import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./styles/ClimateArticle.css";

const ClimateArticle = () => {
  const articles = [
    {
      title: "Understanding Climate Change",
      description:
        "This article explores the fundamental concepts of climate change, its causes, and its effects on the planet.",
    },
    {
      title: "Impact of Global Warming",
      description:
        "An in-depth analysis of how global warming affects ecosystems, weather patterns, and human life.",
    },
    {
      title: "Renewable Energy Solutions",
      description:
        "Explore various renewable energy sources and how they can help mitigate the effects of climate change.",
    },
    {
      title: "Climate Change and Wildlife",
      description:
        "Discover how climate change impacts wildlife habitats and the survival of various species.",
    },
    {
      title: "Policies for a Greener Future",
      description:
        "Examine the policies and regulations aimed at combating climate change and promoting sustainability.",
    },
    {
      title: "Technological Innovations",
      description:
        "Learn about cutting-edge technologies being developed to address climate change challenges.",
    },
    {
      title: "Climate Change and Agriculture",
      description:
        "Understand the effects of climate change on agriculture and food security worldwide.",
    },
  ];

  return (
    <div style={{ background: "#a5d5e7ff" }}>
      <Container fluid style={{ paddingTop: "20px", paddingBottom: "20px" }}>
        {articles.map((article, index) => (
          <Row key={index} className="mb-3">
            <Col>
              <Card className="custom-card">
                <Card.Body>
                  <Card.Title className="custom-card-title">
                    {article.title}
                  </Card.Title>
                  <Card.Text>
                    {article.description}
                  </Card.Text>
                  <Button className="custom-button">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default ClimateArticle;
