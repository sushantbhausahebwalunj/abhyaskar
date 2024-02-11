import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUserCircle } from "react-icons/fa";

export default function Header() {
  return (
    <div>
      {/* <div className='container-fluid' style={{width:"100%", backgroundColor:"#BEBEBE", height:"100px"}} >
        <div className='header' style={{borderRadius:"50%", backgroundColor:'#36454F', width:'70px',height:'70px' ,marginLeft:'20px'}}></div>
    </div> */}
      <Navbar
        expand="lg"
        className="bg-body-success"
        style={{ backgroundColor: "#808080" }}
      >
        <Container fluid>
          <Navbar.Brand
            href="#"
            style={{
              borderRadius: "50%",
              backgroundColor: "#36454F",
              width: "70px",
              height: "70px",
              marginLeft: "20px",
            }}
          ></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <h2
                style={{ marginLeft: "350px" }}
                className="me-auto my-4 my-lg-0 "
              >
                Abhyaskar
              </h2>
            </Nav>
            <Form className="d-flex" style={{ marginRight: "200px" }}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button
                variant="outline-success"
                className="border border-2 "
                style={{backgroundColor:'#2C2C2C'}}
              >
                Search
              </Button>
              
            </Form>
            <FaUserCircle
              className=" my-4 my-lg-0 "
              style={{ fontSize: "60px", marginRight:'120px' }}
            />
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
