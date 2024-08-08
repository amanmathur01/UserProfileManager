import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Appbar() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">IDEMIA</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Enrollment</Nav.Link>
            <Nav.Link href="/">Biometrics</Nav.Link>
            <Nav.Link href="/">Records</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Appbar;