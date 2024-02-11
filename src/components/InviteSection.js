import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const InviteSection = () => {
  return (
    <div className="container">
      <h2 className="mb-3">Invite Your Friends and Explore Endless</h2>
      <h2 className="mb-5">Learning Possibilities at Abhyaskar.com</h2>
      <div className="mb-3">
        <label htmlFor="urlInput" className="form-label">Invite URL:</label>
        <input type="text" id="urlInput" name="urlInput" value='Abhyaskar.com/Index' className="form-control" />
      </div>
      <button className="btn btn-success">Copy</button>
      <Button className="btn btn-danger mx-2 my-2 text-white" > <Link to="/" className="text-white" style={{ textDecoration: 'none' }}>
              <h4>Home</h4>
            </Link>
            
        </Button>
    </div>
  );
};

export default InviteSection;
