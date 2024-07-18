/* eslint-disable jsx-a11y/no-redundant-roles */
import { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles/Navigation.css';

const loadLocale = async (locale) => {
  const response = await fetch(`/locales/${locale}.json`);
  const data = await response.json();
  return data;
};

const NavigationBar = ({ onToggle, onLanguageChange, locale }) => {
  const [expanded, setExpanded] = useState(false);
  const [texts, setTexts] = useState({});
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const fetchTexts = async () => {
      const loadedTexts = await loadLocale(locale);
      setTexts(loadedTexts);
    };
    fetchTexts();

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [locale]);

  return (
    <Navbar
      expand="xl"
      className="mb-3 nav_specs custom-navbar"
      fixed="top"
      expanded={expanded}
      onToggle={handleToggle}
    >
      <Container fluid>
        <Navbar.Brand href="/">
          <Row className="row" role="banner">
            <Col>
              <img
                alt={texts.logoAlt}
                src={process.env.PUBLIC_URL + "/img/logo.png"}
                className="logo"
                role="img"
              />
            </Col>
            {windowWidth > 1650 && (
              <Col>
                <Nav.Link as={Link} to="/" className="logoName">
                  {texts.logoName}
                </Nav.Link>
              </Col>
            )}
          </Row>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" aria-expanded={expanded} onClick={handleToggle} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto nav_bar_spacing" role="navigation" aria-label="Main Navigation">
            <Row className="secondRow">
              <Col>
                <Nav.Link as={Link} to="/news" className="nav_links">
                  {texts.news}
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link as={Link} to="/discussion" className="nav_links">
                  {texts.discussion}
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link as={Link} to="/faq" className="nav_links">
                  {texts.faq}
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link as={Link} to="/events" className="nav_links">
                  {texts.events}
                </Nav.Link>
              </Col>
              <Col>
                <button className="donateButton">
                  <a
                    style={{ textDecoration: "none", color: "rgb(248, 187, 60)" }}
                    href="https://www.givingwhatwecan.org/charities/giving-green-fund"
                    aria-label="Donate"
                  >
                    {texts.donate}
                  </a>
                </button>
              </Col>
              <Col>
                <button className="languageButton" onClick={onLanguageChange} aria-label="Change Language">
                  {locale === 'en' ? 'FR' : 'EN'}
                </button>
              </Col>
            </Row>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
