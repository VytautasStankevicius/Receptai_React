import './header.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'


function Header() {
    return (
      <>
        <Navbar data-bs-theme="light">
          <Container>
            <Navbar.Brand href="#home">Recipedia</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#recipe">Recipe</Nav.Link>
              <Nav.Link href="#community">Community</Nav.Link>
              <Nav.Link href="#about_us">About us</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#searchIcon"><FontAwesomeIcon icon={faMagnifyingGlass} /></Nav.Link>
              <Nav.Link href="#searchIcon"><FontAwesomeIcon icon={faUser} /></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
  
  export default Header;