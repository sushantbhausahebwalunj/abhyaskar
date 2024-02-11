import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EditProfile = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const cityName = e.target.cityName.value;
    const profession = e.target.profession.value;
    const interest = e.target.interest.value;
    const education = e.target.education.value;
   
    console.log('City Name:', cityName);
    console.log('Profession:', profession);
    console.log('Interest:', interest);
    console.log('Education:', education);
   
  };

  return (
    <div className="container mt-5">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="cityName" className="form-label">City Name:</label>
          <input type="text" className="form-control" id="cityName" name="cityName" required />
        </div>
        <div className="mb-3">
          <label htmlFor="profession" className="form-label">Profession:</label>
          <input type="text" className="form-control" id="profession" name="profession" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="interest" className="form-label">Interest:</label>
          <input type="text" className="form-control" id="interest" name="interest" required />
        </div>
        <div className="mb-3">
          <label htmlFor="education" className="form-label">Education:</label>
          <input type="text" className="form-control" id="education" name="education" required />
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <Button className="btn btn-danger my-2 text-white" > <Link to="/" className="text-white" style={{ textDecoration: 'none' }}>
              <h4>Home</h4>
            </Link>
            
        </Button>
    </div>
  );
};

export default EditProfile;
