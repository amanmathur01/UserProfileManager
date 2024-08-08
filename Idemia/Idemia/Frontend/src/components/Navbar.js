import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  const navbarStyle = {
    backgroundColor: '#0d6efd', // Bootstrap primary color
  };

  const brandStyle = {
    fontWeight: 'bold',
    fontSize: '1.5em',
    color: 'white',
  };

  const linkStyle = {
    fontSize: '1.1em',
    color: 'white',
    marginRight: '1rem',
  };

  return (
    <Navbar expand="lg" style={navbarStyle}>
      <Container fluid>
        <Navbar.Brand href="/" style={brandStyle}>
          IDEMIA
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/enrollment" style={linkStyle}>
              Enrollment
            </Nav.Link>
            <Nav.Link href="/biometrics" style={linkStyle}>
              Biometrics
            </Nav.Link>
            <Nav.Link href="/records" style={linkStyle}>
              Records
            </Nav.Link>
            {/* <Nav.Link href="/login" style={linkStyle}>
              Login
            </Nav.Link>
            <Nav.Link href="/signup" style={linkStyle}>
              Signup
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

