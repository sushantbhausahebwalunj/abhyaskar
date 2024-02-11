import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Articals() {
  return (
    <div>
    <h2 style={{textAlign:'center'}}>Articals Landing Page</h2>
    <Button className="btn btn-danger my-2 text-white" > <Link to="/" className="text-white" style={{ textDecoration: 'none' }}>
              <h4>Home</h4>
            </Link>
            
        </Button>
    </div>
  )
}
