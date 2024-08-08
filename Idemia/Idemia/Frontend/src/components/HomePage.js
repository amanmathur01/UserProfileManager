// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import bg from '../images/bg.jpg';

// function HomePage() {
//   return (
//     <Container 
//       fluid 
//       style={{ 
//         backgroundImage: `url(${bg})`, 
//         backgroundSize: 'cover', 
//         backgroundPosition: 'center', 
//         minHeight: '100vh', 
//         paddingTop: '1px' 
//       }}
//     >
//       <Row className="justify-content-center">
//         <Col md={8} style={{ position: 'absolute', marginTop: '120px', transition: '0.5s ease' }}>
//           <div className="text-center">
//             <h1 style={{ color: '#fff', fontSize: '45px' }}>Welcome to IDEMIA</h1>
//             <p className="lead" style={{ color: '#eeeee4' }}>
//               IDEMIA is the global leader in Augmented Identity for an increasingly digital world.
//               With the ultimate objective to ensure people have the best possible user experience
//               when interacting with their digital identity, IDEMIA provides cutting-edge solutions
//               for security, identity verification, and much more.
//             </p>
//             <p style={{ color: '#eeeee4' }}>
//               Explore our dashboard to access various features and services designed to enhance
//               security and streamline identity management processes.
//             </p>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default HomePage;


import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import bg from '../images/bg.jpg';

function HomePage() {
  return (
    <Container 
      fluid 
      style={{ 
        backgroundImage: `url(${bg})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        minHeight: '100vh', 
        paddingTop: '1px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Row className="justify-content-center w-100">
        <Col md={8} className="text-area" style={{ padding: '20px', borderRadius: '10px' }}>
          <div className="text-center">
            <h1 style={{ color: '#fff', fontSize: '45px' }}>Welcome to IDEMIA</h1>
            <p className="lead" style={{ color: '#000' }}>
              IDEMIA is the global leader in Augmented Identity for an increasingly digital world.
              With the ultimate objective to ensure people have the best possible user experience
              when interacting with their digital identity, IDEMIA provides cutting-edge solutions
              for security, identity verification, and much more.<br/>
              Explore our dashboard to access various features and services designed to enhance
              security and streamline identity management processes.
            </p>
          </div>
        </Col>
      </Row>
      <style>
        {`
          .text-area {
            background: rgba(255, 255, 255, 0.4);
            backdrop-filter: blur(1px);
            -webkit-backdrop-filter: blur(1px);
            border: 1px solid rgba(255, 255, 255, 0.3);
          }
        `}
      </style>
    </Container>
  );
}

export default HomePage;
