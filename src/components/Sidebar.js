import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup,Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import MyComponent from "./MyComponent";

import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

import { useState } from "react";

export default function Sidebar() {
  return (
    <div>
      <Header />
      <Row className="me-0 pe-0 border-0">
      {/* Sidebar */}
      <Col xs={2} id="sidebar">
        <ListGroup className="m-0 p-0">
          <ListGroup.Item className="bg-secondary m-0 p-3">
            <Link to="/" className="text-dark" style={{ textDecoration: 'none' }}>
              <h4>Profile</h4>
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="bg-secondary m-0 p-3">
            <Link to="/ChangePassword" className="text-dark" style={{ textDecoration: 'none' }}>
              <h4>Change Password</h4>
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="bg-secondary m-0 p-3">
            <Link to="/edit-profile" className="text-dark" style={{ textDecoration: 'none' }}>
              <h4>Edit Profile</h4>
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="bg-secondary m-0 p-3">
            <Link to="/saved-articles" className="text-dark" style={{ textDecoration: 'none' }}>
              <h4>Saved Articles</h4>
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="bg-secondary m-0 p-3" >
            <Link to="/pathway" className="text-dark" style={{ textDecoration: 'none' }}>
              <h4>Pathway</h4>
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="bg-secondary m-0 p-3">
            <Link to="/req-to-delete" className="text-dark" style={{ textDecoration: 'none' }}>
              <h4>Req To Del</h4>
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="bg-secondary m-0 p-3">
            <Link to="/invite" className="text-dark" style={{ textDecoration: 'none' }}>
              <h4>Invite</h4>
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="bg-secondary m-0 p-3">
            <Link to="/articles" className="text-dark" style={{ textDecoration: 'none' }}>
              <h4>Articles</h4>
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="bg-secondary m-0 p-3">
            <Link to="/logout" className="text-dark" style={{ textDecoration: 'none' }}>
              <h4>Logout</h4>
            </Link>
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col xs={7}>
          <Profile />
        </Col>
        <Col xs={3}  >
        <div style={{ textAlign: "center" }}>
            <FaUserCircle
              style={{
                width: "8rem",
                height: "8rem",
                borderRadius: "50%",
                backgroundColor: "grey",
                
                marginTop: "1.9rem",
                textAlign: "center",
                display:"inline-block"
                
               
              }}
            />
            <h4 style={{ marginLeft: ".7rem" }}>KodeZera</h4>
          </div>
          <div style={{
              width: "7.5rem",
              height: "6rem",
              borderRadius: "50%",
              backgroundColor: "grey",
              marginTop: "2rem",
              marginLeft:"6rem",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems:"center"
            }}
            
          >
          <span className="fs-5 text-dark">Streak 4 days</span>
            
            
          </div>
          
        </Col>
        <Row className="justify-content-end align-items-start">
          <Col
            xs={10}
            className="col-l-9 offset-l-9 "
            style={{ marginTop: "-300px" }}
          >
            <hr />
            <MyComponent />
          </Col>
        </Row>
      </Row>      


      <Footer />
    </div>
  );
}
