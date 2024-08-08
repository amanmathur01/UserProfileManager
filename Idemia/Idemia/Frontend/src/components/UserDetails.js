import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { message } from 'antd';

const UserDetails = ({ user }) => {
  const [image, setImage] = useState('');

  function handleChange(e) {
    setImage(e.target.files[0]);
  }

  function handleClick() {
    const formData = new FormData();
    formData.append('file', image);

    fetch(`http://localhost:8082/biometric/${user.personId}`, {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.text())
      .then((val) => {
        if (val === "Image uploaded!") {
          message.success("Image uploaded!");
        } else {
          message.error("Failed to upload");
        }
      })
      .catch(err => {
        message.error("Error uploading image: " + err.message);
      });
  }

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-4">
        <div className="card-body text-center">
          <h4 className="card-title mb-4">User Details</h4>
          <div className="user-info mb-3">
            <p><strong>First Name:</strong> {user.firstName}</p>
            <p><strong>Last Name:</strong> {user.lastName}</p>
            <p><strong>Address:</strong> {user.address}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Mobile No:</strong> {user.mobileNo}</p>
            <p><strong>Gender:</strong> {user.gender}</p>
            <p><strong>Date of Birth:</strong> {user.dob}</p>
          </div>
          <span className="text-danger">Only jpeg/jpg/png format allowed!</span><br />
          <input type="file" name='file' onChange={handleChange} className="form-control mb-3" />
          <button onClick={handleClick} className="btn btn-primary">Upload</button>
        </div>
      </div>
      <style>
        {`
          .card-title {
            font-size: 1.5rem;
            font-weight: bold;
          }

          .user-info p {
            margin: 0.5rem 0;
            font-size: 1rem;
          }

          .user-info strong {
            color: #333;
          }

          input[type="file"] {
            display: block;
            margin: 1rem 0;
          }

          button {
            display: block;
            width: 100%;
            margin-top: 1rem;
          }
        `}
      </style>
    </div>
  );
};

export default UserDetails;

