import { Container, Row, Col, Card } from "react-bootstrap";
import "./styles/Videos.css";

const videos = [
  {
    title: "Climate change: Earth's giant game of Tetris - Joss Fong",
    description:
      "There's a game of Tetris happening on a global scale: The playing space is planet Earth, and all those pesky, stacking blocks represent carbon dioxide",
    url: "https://www.youtube.com/embed/ztWHqUFJRTs",
  },
  {
    title: "What's the Deal with Carbon?",
    description:
      "This animation describes the carbon cycle and how it is affected by human activity. It was featured in the Sustainable Shelters exhibit at the Bell Museum of Natural History at the University of Minnesota. Written by Rachel O'Malley...",
    url: "https://www.youtube.com/embed/2Jp1D1dzxj8",
  },
  {
    title: "Climate Science in a Nutshell #4: Too Much Carbon Dioxide",
    description:
      "View the complete Climate Science in a Nutshell Series at www.planetnutshell.com/climate What is the role of Carbon Dioxide in the atmosphere? What is the Greenhouse Effect?",
    url: "https://www.youtube.com/embed/HK8LLWSIIm4",
  },
  {
    title: "How 2023 Broke Our Climate Models with Neil deGrasse Tyson",
    description:
      "Why were climate models so wrong about 2023? Neil deGrasse Tyson learns about why 2023 was hotter than we expected it to be and what effects need to be factored into future climate...",
    url: "https://www.youtube.com/embed/CHJKKsOHtAk",
  },
  {
    title: "What Earth in 2050 could look like - Shannon Odell",
    description:
      "While we’re already feeling the devastating effects of human-caused climate change, governments continue to fall short on making and executing emissions ... ",
    url: "https://www.youtube.com/embed/2njn71TqkjA",
  },
  {
    title: "Climate Science in a Nutshell #5: Where Does Carbon Dioxide",
    description:
      "View the complete Climate Science in a Nutshell Series at www.planetnutshell.com/climate. Carbon Dioxide, the gas that's primarily responsible for warming up our planet, comes from our success.",
    url: "https://www.youtube.com/embed/bpazvRVh4y0",
  },
  {
    title: "Climate change: Earth's giant game of Tetris - Joss Fong",
    description:
      "There's a game of Tetris happening on a global scale: The playing space is planet Earth, and all those pesky, stacking blocks represent carbon dioxide",
    url: "https://www.youtube.com/embed/ztWHqUFJRTs",
  },
  {
    title: "What's the Deal with Carbon?",
    description:
      "This animation describes the carbon cycle and how it is affected by human activity. It was featured in the Sustainable Shelters exhibit at the Bell Museum of Natural History at the University of Minnesota. Written by Rachel O'Malley...",
    url: "https://www.youtube.com/embed/2Jp1D1dzxj8",
  },
  {
    title: "Climate Science in a Nutshell #4: Too Much Carbon Dioxide",
    description:
      "View the complete Climate Science in a Nutshell Series at www.planetnutshell.com/climate What is the role of Carbon Dioxide in the atmosphere? What is the Greenhouse Effect?",
    url: "https://www.youtube.com/embed/HK8LLWSIIm4",
  },
  {
    title: "How 2023 Broke Our Climate Models with Neil deGrasse Tyson",
    description:
      "Why were climate models so wrong about 2023? Neil deGrasse Tyson learns about why 2023 was hotter than we expected it to be and what effects need to be factored into future climate...",
    url: "https://www.youtube.com/embed/CHJKKsOHtAk",
  },
  {
    title: "What Earth in 2050 could look like - Shannon Odell",
    description:
      "While we’re already feeling the devastating effects of human-caused climate change, governments continue to fall short on making and executing emissions ... ",
    url: "https://www.youtube.com/embed/2njn71TqkjA",
  },
  {
    title: "Climate Science in a Nutshell #5: Where Does Carbon Dioxide",
    description:
      "View the complete Climate Science in a Nutshell Series at www.planetnutshell.com/climate. Carbon Dioxide, the gas that's primarily responsible for warming up our planet, comes from our success.",
    url: "https://www.youtube.com/embed/bpazvRVh4y0",
  },
];

const ClimateVideos = () => {
  return (
    <div style={{ background: "#a5d5e7ff" }}>
      <Container fluid style={{ paddingTop: "20px", paddingBottom: "20px" }}>
        <Row className="justify-content-center">
          {videos.map((video, index) => (
            <Col key={index} md={2}>
              <Card className="video-card w-100">
                <div className="video-wrapper">
                  <iframe
                    className="video-iframe"
                    src={video.url}
                    allowFullScreen
                  ></iframe>
                </div>
                <Card.Body>
                  <Card.Title>{video.title}</Card.Title>
                  <Card.Text>{video.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ClimateVideos;
