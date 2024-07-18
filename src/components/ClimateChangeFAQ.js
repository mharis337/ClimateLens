/* eslint-disable jsx-a11y/no-redundant-roles */
import { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import "./styles/FAQ.css";

const loadLocale = async (locale) => {
  const response = await fetch(`/locales/${locale}.json`);
  const data = await response.json();
  return data;
};

const ClimateChangeFAQ = ({ locale }) => {
  const [texts, setTexts] = useState({});
  const [faqItems, setFaqItems] = useState([]);

  useEffect(() => {
    const fetchTexts = async () => {
      const loadedTexts = await loadLocale(locale);
      setTexts(loadedTexts);
      setFaqItems(loadedTexts.faqItems);
    };
    fetchTexts();
  }, [locale]);

  return (
    <div className="faq-page-wrapper" role="region" aria-label={texts.faqHeader}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="faq-header" role="heading" aria-level="1">{texts.faqHeader}</h1>
        </div>
        <Accordion defaultActiveKey="0" aria-live="polite">
          {faqItems.map((item, index) => (
            <Accordion.Item eventKey={String(index)} key={index}>
              <Accordion.Header>{item.question}</Accordion.Header>
              <Accordion.Body>{item.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default ClimateChangeFAQ;
