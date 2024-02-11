import React from "react";
import { Container, Row, Col, Form, Button, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { FaFacebook ,FaLinkedin,FaTwitter} from "react-icons/fa";


export default function Footer() {
  return (
    <div>
      <Container fluid className=" text-light p-5 bg-dark" style={{ backgroundColor: "#808080" }}>
        <Row>
          {/* Contact Information */}
          <Col md={3}>
            <h5>Contact Information</h5>
            <p>Email: abhyaskar@gmail.com</p>
            <p>Phone: +1234567890</p>
          </Col>

          {/* Our Services */}
          <Col md={3}>
            <h5>Our Services</h5>
            <Nav className="flex-column ">
              <Nav.Link href="#"  >Service 2</Nav.Link>
              <Nav.Link href="#"  >Service 3</Nav.Link>
              <Nav.Link href="#"  >Service 1</Nav.Link>
            </Nav>
          </Col>

          {/* Social Links */}
          <Col md={3}>
            <h5>Social Links</h5>
            <Nav className="flex-column ">
              <Nav.Link href="#" target="_blank">
                Facebook
                <FaFacebook className="ms-2 fs-4"/>
              </Nav.Link>
              <Nav.Link href="#" target="_blank">
                LinkedIn
                <FaLinkedin className="ms-2 fs-4" />
              </Nav.Link>
              <Nav.Link href="#" target="_blank">
                Twitter
                <FaTwitter className="ms-2 fs-4"/>

              </Nav.Link>
            </Nav>
          </Col>

          {/* Newsletter */}
          <Col md={3}>
            <h5>Newsletter</h5>
            <Form>
              <Form.Group className="mb-3" controlId="newsletterEmail">
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Button variant="light" type="submit">
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
