import { useState } from 'react';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles/Navigation.css';

const NavigationBar = ({ onToggle }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
    onToggle(!expanded);
  };

  return (
    <Navbar
      expand="xxl"
      className="mb-3 nav_specs"
      fixed="top"
      expanded={expanded}
      onToggle={handleToggle}
    >
      <Container fluid>
        <Navbar.Brand href="/">
          <Row className="row">
            <Col>
              <img
                alt="Logo"
                src={process.env.PUBLIC_URL + "/img/logo.png"}
                className="logo"
              />
            </Col>
            <Col>
              <Nav.Link as={Link} to="/" className="logoName">
                ClimateLens
              </Nav.Link>
            </Col>
          </Row>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto nav_bar_spacing">
            <Row className="secondRow">
              <Col>
                <Nav.Link as={Link} to="/news" className="nav_links">
                  News
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link as={Link} to="/discussion" className="nav_links">
                  Discussion
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link as={Link} to="/faq" className="nav_links">
                  FAQ
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link as={Link} to="/events" className="nav_links">
                  Events
                </Nav.Link>
              </Col>
              <Col>
                <button className="donateButton">Donate</button>
              </Col>
            </Row>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
