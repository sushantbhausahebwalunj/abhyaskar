import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";


import "./style.css"; // Custom CSS for circles

const CircleWithText = ({ text }) => {
  return (
    <div className="circle">
      <p>{text}</p>
    </div>
  );
};

const MyComponent = () => {
  return (
    <Container>
      <Row className="justify-content-center align-items-center">
        <Col xs={2} style={{ marginTop: "20px", marginLeft: "px" }}>
          <CircleWithText text="Bronze " />
          <FaStar style={{ marginTop: "50px", marginLeft: "10px" }} />
          <FaRegStar style={{ marginTop: "50px", marginLeft: "10px" }} />
          <FaRegStar style={{ marginTop: "50px", marginLeft: "10px" }} />
          <FaRegStar style={{ marginTop: "50px", marginLeft: "10px" }} />
          <FaRegStar style={{ marginTop: "50px", marginLeft: "10px" }} />
        </Col>
        <Col xs={2} style={{ marginTop: "20px", marginLeft: "20px" }}>
          <CircleWithText text="Silver" />
          <FaStar style={{ marginTop: "50px", marginLeft: "10px" }} />
          <FaStar style={{ marginTop: "50px", marginLeft: "10px" }} />
          <FaRegStar style={{ marginTop: "50px", marginLeft: "10px" }} />
          <FaRegStar style={{ marginTop: "50px", marginLeft: "10px" }} />
          <FaRegStar style={{ marginTop: "50px", marginLeft: "10px" }} />
        </Col>
        <Col xs={2} style={{ marginTop: "20px", marginLeft: "20px" }}>
          <CircleWithText text="Gold" />
          <FaStar style={{ marginTop: "50px", marginLeft: "20px" }} />
          <FaStar style={{ marginTop: "50px", marginLeft: "10px" }} />
          <FaStar style={{ marginTop: "50px", marginLeft: "10px" }} />
          <FaRegStar style={{ marginTop: "50px", marginLeft: "10px" }} />
          <FaRegStar style={{ marginTop: "50px", marginLeft: "10px" }} />
        </Col>
        <Col xs={2} style={{ marginTop: "20px", marginLeft: "20px" }}>
          <CircleWithText text="Platinum" />
          <FaStar style={{ marginTop: "50px", marginLeft: "20px" }} />
          <FaStar style={{ marginTop: "50px", marginLeft: "10px" }} />
          <FaStar style={{ marginTop: "50px", marginLeft: "10px" }} />
          <FaStar style={{ marginTop: "50px", marginLeft: "10px" }} />
          <FaRegStar style={{ marginTop: "50px", marginLeft: "10px" }} />
        </Col>
        <Col xs={2} style={{ marginTop: "20px", marginLeft: "20px" }}>
          <CircleWithText text="Diamond" />
          <FaStar style={{ marginTop: "50px", marginLeft: "20px" }} />
          <FaStar style={{ marginTop: "50px", marginLeft: "10px" }} />
          <FaStar style={{ marginTop: "50px", marginLeft: "10px" }} />
          <FaStar style={{ marginTop: "50px", marginLeft: "10px" }} />
          <FaStar style={{ marginTop: "50px", marginLeft: "10px" }} />
        </Col>
      </Row>
    </Container>
  );
};

export default MyComponent;
