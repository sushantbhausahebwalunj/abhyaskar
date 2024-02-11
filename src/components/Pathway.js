import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Pathway() {
  return (
    <div>
    <h1 style={{textAlign:'center'}}>PATHWAY WINDOW WILL DISPLAY HERE</h1>
    <Button className="btn btn-danger my-2 text-white" > <Link to="/" className="text-white" style={{ textDecoration: 'none' }}>
              <h4>Home</h4>
            </Link>
            
        </Button>
    </div>
  )
}
