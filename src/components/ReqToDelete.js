import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ReqToDelete = () => {
  const handleDelete = () => {
    const confirmed = window.confirm("Are you sure you want to delete the profile?");
    if (confirmed) {
      
      document.getElementsByClassName("container").innerHtml=<h1>Profile Deleted</h1>;
    } else {
      document.getElementsByClassName("container").innerHtml=<h1>Deletion Cancelled</h1>;
      <Button className="btn btn-danger mx-2 my-2 text-white" > <Link to="/" className="text-white" style={{ textDecoration: 'none' }}>
      <h4>Home</h4>
    </Link>
    
</Button>
    }
  };

  return (
    <div className="container mt-5">
      <h2>Profile Deleted Successfully {handleDelete()}</h2>
      
      <Button className="btn btn-danger mx-2 my-2 text-white" > <Link to="/" className="text-white" style={{ textDecoration: 'none' }}>
              <h4>Home</h4>
            </Link>
            
        </Button>
    </div>
  );
};

export default ReqToDelete;
