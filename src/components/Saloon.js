import React from 'react'
import Productbar from './product';
import Nav from './navbar'
import Footer from './footer';

export default function Saloon() {
  return (
    <div>
        <Nav/>
        <br/><br/>
        <h2 style={{margin:'30px 30px 30px 120px',fontWeight:'bolder'}}>Naturals</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', padding: '0px',alignSelf:'center',marginLeft:'120px', marginRight:'200px'}}>
            <Productbar id="saloon 1"/>
            <Productbar id="saloon 2"/>
            <Productbar id="saloon 3"/>
            <Productbar id="saloon 4"/>
            <Productbar id="saloon 5"/>
            <Productbar id="saloon 6"/>
        </div>
    <br/><br/><br/>
    <br/><br/><br/>
    <Footer/>
    </div>
  )
}
