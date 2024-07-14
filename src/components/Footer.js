import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles/Footer.css';

const loadLocale = async (locale) => {
  const response = await fetch(`/locales/${locale}.json`);
  const data = await response.json();
  return data;
};

const Footer = ({ locale }) => {
  const [texts, setTexts] = useState({});

  useEffect(() => {
    const fetchTexts = async () => {
      const loadedTexts = await loadLocale(locale);
      setTexts(loadedTexts);
    };
    fetchTexts();
  }, [locale]);

  return (
    <footer className="footer mt-auto py-3">
      <Container>
        <Row className="justify-content-between">
          <Col className="text-center">
            {texts.footerCopyright}
          </Col>
          <Col className="text-center">
            {texts.footerPrivacyPolicy}
          </Col>
          <Col className="text-center">
            {texts.footerTermsConditions}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
