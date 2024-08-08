import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function EnrollmentForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    mobileNo: '',
    gender: '',
    dob: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    else if (!/^[A-Za-z\s]+$/.test(formData.firstName)) newErrors.firstName = 'First name must contain only letters';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    else if (!/^[A-Za-z\s]+$/.test(formData.lastName)) newErrors.lastName = 'Last name must contain only letters';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.mobileNo) newErrors.mobileNo = 'Mobile number is required';
    else if (!/^\d{10}$/.test(formData.mobileNo)) newErrors.mobileNo = 'Mobile number is invalid. It should be 10 digits without any formatting characters.';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.dob) newErrors.dob = 'Date of birth is required';
    return newErrors;
  };
  

  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      try {
        const response = await fetch('http://localhost:8082/enrollment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        const jsonData = await response.json();

        if (!response.ok) {
          message.error("Error :" + jsonData.message);
        } else {
          message.success("Details submitted successfully");
          navigate('/');
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center min-vh-100"
      style={{
        backgroundImage: 'url("https://stock.adobe.com/in/images/fingerprint-scan-provides-security-access-with-biometrics-identification-businessman-scan-fingerprint-biometric-identity-and-approval-business-technology-safety-internet-concept/294391317")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          backdropFilter: 'blur(10px)',
        }}
      ></div>
      <div className="card shadow p-4 w-100" style={{ maxWidth: '600px', position: 'relative', zIndex: 1 }}>
        <h3 className="text-center mb-4">Enrollment Form</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="e.g.John" 
              name="firstName" 
              value={formData.firstName} 
              onChange={handleChange} 
              isInvalid={!!errors.firstName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.firstName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="e.g.Smith" 
              name="lastName" 
              value={formData.lastName} 
              onChange={handleChange} 
              isInvalid={!!errors.lastName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.lastName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="e.g.123 Main Street" 
              name="address" 
              value={formData.address} 
              onChange={handleChange} 
              isInvalid={!!errors.address}
            />
            <Form.Control.Feedback type="invalid">
              {errors.address}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="e.g.name@example.com" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMobileNo">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control 
              type="tel" 
              placeholder="e.g.1234567890" 
              name="mobileNo" 
              value={formData.mobileNo} 
              onChange={handleChange} 
              isInvalid={!!errors.mobileNo}
            />
            <Form.Control.Feedback type="invalid">
              {errors.mobileNo}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGender">
            <Form.Label>Gender</Form.Label>
            <Form.Control 
              as="select" 
              name="gender" 
              value={formData.gender} 
              onChange={handleChange}
              isInvalid={!!errors.gender}
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.gender}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDOB">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control 
              type="date" 
              name="dob" 
              value={formData.dob} 
              onChange={handleChange} 
              isInvalid={!!errors.dob}
              min="1950-01-01"
            />
            <Form.Control.Feedback type="invalid">
              {errors.dob}
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default EnrollmentForm;

