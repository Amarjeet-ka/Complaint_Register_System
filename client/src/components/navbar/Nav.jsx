import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default  function Nav() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              url="https://www.flaticon.com/free-icons/complaint" 
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
             Complaint Registration System
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

