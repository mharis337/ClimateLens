import { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import "./styles/FAQ.css";

const ClimateChangeFAQ = () => {
  const [faqItems, setFaqItems] = useState([]);

  useEffect(() => {
    fetch("/faqData.json")
      .then((response) => response.json())
      .then((data) => setFaqItems(data))
      .catch((error) => console.error("Error fetching the FAQ data:", error));
  }, []);

  return (
    <div className="faq-page-wrapper">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="faq-header">FAQ</h1>
        </div>
        <Accordion defaultActiveKey="0">
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
