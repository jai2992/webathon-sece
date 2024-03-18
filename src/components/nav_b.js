import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'
import { Link } from 'react-router-dom';

function NavScrollExample() {
  return (
    <Navbar expand="lg" style={{borderRadius:'0px 0px 30px 30px',paddingLeft:'50px',paddingRight:'50px'}}>
      <Container fluid >
        <Navbar.Brand as={Link} to="/" style={{fontWeight:'bolder'}}>SECE AMINITY</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px',fontWeight:'bold',paddingLeft:'30px',color:'black' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/signin" style={{paddingRight:'20px'}}>Home</Nav.Link>
            <Nav.Link as={Link} to="/signin" style={{paddingRight:'20px'}}>Store</Nav.Link>
            <Nav.Link as={Link} to="/signin" style={{paddingRight:'20px'}}>Saloon</Nav.Link>
            <Nav.Link as={Link} to="/signin" style={{paddingRight:'20px'}}>Food Court</Nav.Link>
            <Nav.Link as={Link} to="/signin" style={{paddingRight:'20px'}}>Cart</Nav.Link>
          </Nav>
          
          <div className="d-flex align-items-center ms-2">  
            <Nav.Link className='user' as={Link} to="/signin">Sign in / Sign up</Nav.Link>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
