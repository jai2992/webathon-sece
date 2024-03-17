import React from 'react'
import Productbar from './product';
import Nav from './navbar'
import Footer from './footer';

export default function store() {
  return (
    <div>
    <Nav/>
    <br/><br/>
    <h2 style={{margin:'30px 30px 30px 120px',fontWeight:'bolder'}}>Stationary</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', padding: '0px',alignSelf:'center',marginLeft:'120px', marginRight:'200px'}}>
        <Productbar id="Store 1"/>
        <Productbar id="Store 2"/>
        <Productbar id="Store 3"/>
        <Productbar id="Store 4"/>
        <Productbar id="Store 5"/>
        <Productbar id="Store 6"/>
        
    </div>
    <h2 style={{margin:'30px 30px 30px 120px',fontWeight:'bolder'}}>Snacks</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', padding: '0px',alignSelf:'center',marginLeft:'120px', marginRight:'200px'}}>
        <Productbar id="store 11"/>
        <Productbar id="store 12"/>
        <Productbar id="store 13"/>
        <Productbar id="store 14"/>
        <Productbar id="store 15"/>
        <Productbar id="store 16"/>
    </div>
    <h2 style={{margin:'30px 30px 30px 120px',fontWeight:'bolder'}}>Essentials</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', padding: '0px',alignSelf:'center',marginLeft:'120px', marginRight:'200px'}}>
        <Productbar id="store 21"/>
        <Productbar id="store 22"/>
        <Productbar id="store 23"/>
        <Productbar id="store 24"/>
        <Productbar id="store 25"/>
        <Productbar id="store 26"/>
    </div>
    <br/><br/><br/>
    <Footer/>
    </div>
  )
}
