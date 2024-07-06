import { Container, Row, Col } from 'react-bootstrap';
import './styles/Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer mt-auto py-3">
            <Container>
                <Row className="justify-content-between">
                    <Col className="text-center">
                        © 2024 ClimateLens. All rights reserved
                    </Col>
                    <Col className="text-center">
                        Privacy Policy
                    </Col>
                    <Col className="text-center">
                        Terms & Conditions
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
