import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChangePassword = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentPassword = e.target.currentPassword.value;
    const newPassword = e.target.newPassword.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (newPassword !== confirmPassword) {
      alert("New password and confirm password don't match. Please enter them again.");
    } else {
      setIsConfirmed(true);
      setIsPasswordChanged(true);
    }
  };

  const handleConfirm = () => {
    setIsConfirmed(true);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Change Password</h2>
      {!isConfirmed && (
        <div>
          <p>Please confirm that you want to change your password.</p>
          <Button onClick={handleConfirm} className="btn btn-primary">Confirm</Button>
        </div>
      )}
      {isConfirmed && !isPasswordChanged && (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="currentPassword" className="form-label">Current Password:</label>
            <input type="password" className="form-control" id="currentPassword" name="currentPassword" required />
          </div>
          <div className="mb-3">
            <label htmlFor="newPassword" className="form-label">New Password:</label>
            <input type="password" className="form-control" id="newPassword" name="newPassword" required />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
            <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" required/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      )}
      {isPasswordChanged && (
        <div className="alert alert-success mt-3" role="alert">
          Password changed successfully!
        </div>
      )}
      <Button className="btn btn-danger my-2 text-white">
        <Link to="/" className="text-white" style={{ textDecoration: 'none' }}>
          <h4>Home</h4>
        </Link>
      </Button>
    </div>
  );
};

export default ChangePassword;
