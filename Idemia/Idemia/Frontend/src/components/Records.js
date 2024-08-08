// // import React, { useState, useEffect } from 'react';
// // import Table from 'react-bootstrap/Table';
// // import Card from 'react-bootstrap/Card';
// // import Container from 'react-bootstrap/Container';
// // import Button from 'react-bootstrap/Button';
// // import { useNavigate } from 'react-router-dom';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// // function Records() {
// //   const [data, setData] = useState([]);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await fetch('http://localhost:8080/records');
// //         if (!response.ok) {
// //           throw new Error('Network response was not ok');
// //         }
// //         const jsonData = await response.json();
// //        // console.log(jsonData);
// //         setData(jsonData);
// //       } catch (error) {
// //         console.error('Error fetching data:', error);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   const handleDelete = async (personId) => {
// //     try {
// //       const response = await fetch(`http://localhost:8080/records/delete/${personId}`, {
// //         method: 'DELETE',
// //       });
// //       if (!response.ok) {
// //         throw new Error('Network response was not ok');
// //       }
// //       setData(data.filter(item => item.personId !== personId));
// //     } catch (error) {
// //       console.error('Error deleting record:', error);
// //     }
// //   };

// //   const handleEdit = (personId) => {
// //     navigate(`/edit/${personId}`);
// //   };

// //   return (
// //     <Container className="my-5">
// //       <Card>
// //         <Card.Header as="h3" className="text-center">
// //           Records
// //         </Card.Header>
// //         <Card.Body>
// //           <Table striped bordered hover responsive="sm">
// //             <thead>
// //               <tr>
// //                 <th>First Name</th>
// //                 <th>Last Name</th>
// //                 <th>Address</th>
// //                 <th>Email</th>
// //                 <th>Phone Number</th>
// //                 <th>Gender</th>
// //                 <th>Date of Birth</th>
// //                 <th>Image</th>
// //                 <th>Action</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {data.map((item, index) => (
// //                 <tr key={index}>
// //                   <td>{item.firstName}</td>
// //                   <td>{item.lastName}</td>
// //                   <td>{item.address}</td>
// //                   <td>{item.email}</td>
// //                   <td>{item.mobileNo}</td>
// //                   <td>{item.gender}</td>
// //                   <td>{item.dob}</td>
// //                   <td>
// //                     {item.img && item.img.base64Image ? (
// //                       <img
// //                         src={`data:image/jpeg;base64,${item.img.base64Image}`}
// //                         alt="Profile"
// //                         style={{ width: '100px', height: '100px' }}
// //                       />
// //                     ) : (
// //                       'No Image'
// //                     )}
// //                   </td>
// //                   <td>
// //                     <Button 
// //                       variant="danger" 
// //                       onClick={() => handleDelete(item.personId)}
// //                     >
// //                       Delete
// //                     </Button>
// //                     <br/>
// //                     <Button 
// //                       variant="primary" 
// //                       onClick={() => handleEdit(item.personId)}
// //                       className="mt-2"
// //                     >
// //                       Edit
// //                     </Button>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </Table>
// //         </Card.Body>
// //       </Card>
// //     </Container>
// //   );
// // }

// // export default Records;



// import React, { useState, useEffect } from 'react';
// import Table from 'react-bootstrap/Table';
// import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useNavigate } from 'react-router-dom';

// function Records() {
//   const [data, setData] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [deleteId, setDeleteId] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/records');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleDelete = async (personId) => {
//     try {
//       const response = await fetch(`http://localhost:8080/records/delete/${personId}`, {
//         method: 'DELETE',
//       });
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       setData(data.filter(item => item.personId !== personId));
//       handleCloseModal();
//     } catch (error) {
//       console.error('Error deleting record:', error);
//     }
//   };

//   const handleEdit = (personId) => {
//     navigate(`/edit/${personId}`);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setDeleteId(null);
//   };

//   const handleShowModal = (personId) => {
//     setDeleteId(personId);
//     setShowModal(true);
//   };

//   return (
//     <Container className="my-5">
//       <Card>
//         <Card.Header as="h3" className="text-center">
//           Records
//         </Card.Header>
//         <Card.Body>
//           <Table striped bordered hover responsive="sm">
//             <thead>
//               <tr>
//                 <th>First Name</th>
//                 <th>Last Name</th>
//                 <th>Address</th>
//                 <th>Email</th>
//                 <th>Phone Number</th>
//                 <th>Gender</th>
//                 <th>Date of Birth</th>
//                 <th>Image</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((item, index) => (
//                 <tr key={index}>
//                   <td>{item.firstName}</td>
//                   <td>{item.lastName}</td>
//                   <td>{item.address}</td>
//                   <td>{item.email}</td>
//                   <td>{item.mobileNo}</td>
//                   <td>{item.gender}</td>
//                   <td>{item.dob}</td>
//                   <td>
//                     {item.img && item.img.base64Image ? (
//                       <img
//                         src={`data:image/jpeg;base64,${item.img.base64Image}`}
//                         alt="Profile"
//                         style={{ width: '100px', height: '100px' }}
//                       />
//                     ) : (
//                       'No Image'
//                     )}
//                   </td>
//                   <td>
//                     <Button
//                       variant="danger"
//                       onClick={() => handleShowModal(item.personId)}
//                     >
//                       Delete
//                     </Button>
//                     <br />
//                     <Button
//                       variant="primary"
//                       onClick={() => handleEdit(item.personId)}
//                       className="mt-2"
//                     >
//                       Edit
//                     </Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </Card.Body>
//       </Card>

//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Confirm Deletion</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           Do you really want to delete this user?
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Cancel
//           </Button>
//           <Button
//             variant="danger"
//             onClick={() => handleDelete(deleteId)}
//           >
//             Delete
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </Container>
//   );
// }

// export default Records;


// import React, { useState, useEffect } from 'react';
// import Table from 'react-bootstrap/Table';
// import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
// import Modal from 'react-bootstrap/Modal';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useNavigate } from 'react-router-dom';

// function Records() {
//   const [data, setData] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [deleteId, setDeleteId] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/records');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleDelete = async (personId) => {
//     try {
//       const response = await fetch(`http://localhost:8080/records/delete/${personId}`, {
//         method: 'DELETE',
//       });
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       setData(data.filter(item => item.personId !== personId));
//       handleCloseModal();
//     } catch (error) {
//       console.error('Error deleting record:', error);
//     }
//   };

//   const handleEdit = (personId) => {
//     navigate(`/edit/${personId}`);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setDeleteId(null);
//   };

//   const handleShowModal = (personId) => {
//     setDeleteId(personId);
//     setShowModal(true);
//   };

//   return (
//     <Container className="my-5">
//       <Card>
//         <Card.Header as="h3" className="text-center">
//           Records
//         </Card.Header>
//         <Card.Body>
//           <Table striped bordered hover responsive="sm">
//             <thead>
//               <tr>
//                 <th>First Name</th>
//                 <th>Last Name</th>
//                 <th>Address</th>
//                 <th>Email</th>
//                 <th>Phone Number</th>
//                 <th>Gender</th>
//                 <th>Date of Birth</th>
//                 <th>Image</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((item, index) => (
//                 <tr key={index}>
//                   <td>{item.firstName}</td>
//                   <td>{item.lastName}</td>
//                   <td>{item.address}</td>
//                   <td>{item.email}</td>
//                   <td>{item.mobileNo}</td>
//                   <td>{item.gender}</td>
//                   <td>{item.dob}</td>
//                   <td>
//                     {item.img && item.img.base64Image ? (
//                       <img
//                         src={`data:image/jpeg;base64,${item.img.base64Image}`}
//                         alt="Profile"
//                         style={{ width: '100px', height: '100px' }}
//                       />
//                     ) : (
//                       'No Image'
//                     )}
//                   </td>
//                   <td>
//                     <FontAwesomeIcon
//                       icon={faTrashAlt}
//                       className="text-danger mr-3"
//                       style={{ cursor: 'pointer' }}
//                       onClick={() => handleShowModal(item.personId)}
//                     />
//                     <FontAwesomeIcon
//                       icon={faEdit}
//                       className="text-primary"
//                       style={{ cursor: 'pointer' }}
//                       onClick={() => handleEdit(item.personId)}
//                     />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </Card.Body>
//       </Card>

//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Confirm Deletion</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           Do you really want to delete this user?
//         </Modal.Body>
//         <Modal.Footer>
//           <button className="btn btn-secondary" onClick={handleCloseModal}>
//             Cancel
//           </button>
//           <button
//             className="btn btn-danger"
//             onClick={() => handleDelete(deleteId)}
//           >
//             Delete
//           </button>
//         </Modal.Footer>
//       </Modal>
//     </Container>
//   );
// }

// export default Records;

import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Records() {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8082/records');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (personId) => {
    try {
      const response = await fetch(`http://localhost:8082/records/delete/${personId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setData(data.filter(item => item.personId !== personId));
      handleCloseModal();
    } catch (error) {
      console.error('Error deleting record:', error);
    }
  };

  const handleEdit = (personId) => {
    navigate(`/edit/${personId}`);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setDeleteId(null);
  };

  const handleShowModal = (personId) => {
    setDeleteId(personId);
    setShowModal(true);
  };

  return (
    <Container className="my-5">
      <Card>
        <Card.Header as="h3" className="text-center">
          Records
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover responsive="sm">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Gender</th>
                <th>Date of Birth</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.address}</td>
                  <td>{item.email}</td>
                  <td>{item.mobileNo}</td>
                  <td>{item.gender}</td>
                  <td>{item.dob}</td>
                  <td>
                    {item.img && item.img.base64Image ? (
                      <img
                        src={`data:image/jpeg;base64,${item.img.base64Image}`}
                        alt="Profile"
                        style={{ width: '100px', height: '100px' }}
                      />
                    ) : (
                      'No Image'
                    )}
                  </td>
                  <td>
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      className="text-danger mr-3"
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleShowModal(item.personId)}
                    />
                    <br/><br/>
                    <FontAwesomeIcon
                      icon={faEdit}
                      className="text-primary"
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleEdit(item.personId)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you really want to delete this user?
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleCloseModal}>
            Cancel
          </button>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(deleteId)}
          >
            Delete
          </button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Records;
