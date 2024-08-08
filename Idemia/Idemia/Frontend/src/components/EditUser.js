import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { message } from 'antd';

const EditUser = () => {
  const { personId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    mobileNo: '',
    gender: '',
    dob: '',
    img: ''
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:8082/records/update/${personId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setUser(jsonData);
        if (jsonData.img && jsonData.img.base64Image) {
          setPreview(`data:image/jpeg;base64,${jsonData.img.base64Image}`);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, [personId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleClick = async () => {
    const formData = new FormData();
    formData.append('file', image);

    try {
      const response = await fetch(`http://localhost:8082/biometric/${personId}`, {
        method: 'POST',
        body: formData,
      });
      const result = await response.text();
      if (result === "Image uploaded!") {
        message.success("Image uploaded!");
      } else {
        message.error("Failed to upload image");
      }
    } catch (err) {
      message.error("Error uploading image: " + err.message);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:8082/records/update/${personId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error('Failed to update user details');
      }

      message.success("User details updated successfully!");
      navigate('/records');
    } catch (err) {
      message.error("Error updating user details: " + err.message);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-4">
        <div className="card-body text-center">
          <h4 className="card-title mb-4">Edit User</h4>
          <div className="user-info mb-3">
            <input
              type="text"
              name="firstName"
              value={user.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="form-control mb-3"
            />
            <input
              type="text"
              name="lastName"
              value={user.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="form-control mb-3"
            />
            <input
              type="text"
              name="address"
              value={user.address}
              onChange={handleChange}
              placeholder="Address"
              className="form-control mb-3"
            />
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Email"
              className="form-control mb-3"
            />
            <input
              type="text"
              name="mobileNo"
              value={user.mobileNo}
              onChange={handleChange}
              placeholder="Mobile No"
              className="form-control mb-3"
            />
            <select
              name="gender"
              value={user.gender}
              onChange={handleChange}
              className="form-control mb-3"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
            <input
              type="date"
              name="dob"
              value={user.dob}
              onChange={handleChange}
              placeholder="Date of Birth"
              className="form-control mb-3"
            />
            {preview ? (
              <div className="mb-3">
                <img
                  src={preview}
                  alt="Profile"
                  style={{ width: '100px', height: '100px' }}
                />
              </div>
            ) : (
              <div className="mb-3">
                <span>No Image</span>
              </div>
            )}
            <input
              type="file"
              name="file"
              onChange={handleImageChange}
              className="form-control mb-3"
            />
            <button onClick={handleClick} className="btn btn-primary mb-3">Upload Image</button>
            <button onClick={handleUpdate} className="btn btn-success">Update Details</button>
          </div>
        </div>
      </div>
      <style>
        {`
          .card-title {
            font-size: 1.5rem;
            font-weight: bold;
          }

          .user-info input, .user-info select {
            margin: 0.5rem 0;
            font-size: 1rem;
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

export default EditUser;
