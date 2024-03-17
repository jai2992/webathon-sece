import React from 'react';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
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
          {/* <Form className="d-flex" style={{paddingRight:'20px',fontWeight:'bold'}}>
            <Form.Control
              type="search"
              placeholder="Type the product name"
              className="sm"
              aria-label="Search"
              style={{background:'rgba(255,255,255,1)',borderRadius:'10px 0px 0px 10px',borderColor:'black'}}

            />
            <Button style={{background:'rgb(254, 190, 71)',borderRadius:'0px 10px 10px 0px',borderColor:'black',color:'black'}}>Search</Button>
          </Form> */}
          <div className="d-flex align-items-center ms-2">
            {/* <img
                src="https://via.placeholder.com/30"
                alt="user"
                className="rounded-circle me-2"
            /> */}
            <Nav.Link className='user' as={Link} to="/signin">Sign in / Sign up</Nav.Link>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
