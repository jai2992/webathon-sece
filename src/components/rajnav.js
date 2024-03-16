import React from 'react';
import Nav from 'react-bootstrap/Nav';

import { FaSearch, FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav style={{display:'flex',alignItems:'center' , justifyContent:'space-between', backgroundColor: 'orange', padding: '1rem' }}>
                  <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px',fontWeight:'bold' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Store</Nav.Link>
            <Nav.Link href="#action2">Saloon</Nav.Link>
            <Nav.Link href="#action2">Food Court</Nav.Link>
            <Nav.Link href="#action2">Cart</Nav.Link>
          </Nav>
      <ul style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', listStyleType: 'none', margin: 0, padding: 0 }}>

        <li style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '0.5rem', display: 'flex', alignItems: 'center' }}>
            <FaSearch style={{ marginRight: '0.5rem' }} />
            <input type="text" placeholder="Search" style={{ border: 'none', outline: 'none', backgroundColor: 'transparent' }} />
          </div>
        </li>
        <li style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FaUser style={{ marginRight: '0.5rem' }} />
            <span>John Doe</span>
            <span style={{ marginLeft: '0.5rem' }}>$100</span>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
