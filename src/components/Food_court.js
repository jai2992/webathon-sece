import React from 'react'
import Productbar from './product';
import Nav from './navbar'
import Footer from './footer';

export default function FoodCourt() {
  return (
    <div>
    <Nav/>
    <h2 style={{margin:'30px 30px 30px 50px',fontWeight:'bolder'}}>Tiffin</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', padding: '0px',alignSelf:'center',marginLeft:'50px', marginRight:'200px'}}>
        <Productbar id="1"/>
        <Productbar id="1"/>
        <Productbar id="1"/>
        <Productbar id="1"/>
        <Productbar id="1"/>
        <Productbar id="1"/>
    </div>
    <h2 style={{margin:'30px 30px 30px 50px',fontWeight:'bolder'}}>Fast Food</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', padding: '0px',alignSelf:'center',marginLeft:'50px', marginRight:'200px'}}>
        <Productbar id="1"/>
        <Productbar id="1"/>
        <Productbar id="1"/>
        <Productbar id="1"/>
        <Productbar id="1"/>
        <Productbar id="1"/>
    </div>
    <h2 style={{margin:'30px 30px 30px 50px',fontWeight:'bolder'}}>Bakery Items</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', padding: '0px',alignSelf:'center',marginLeft:'50px', marginRight:'200px'}}>
        <Productbar id="1"/>
        <Productbar id="1"/>
        <Productbar id="1"/>
        <Productbar id="1"/>
        <Productbar id="1"/>
        <Productbar id="1"/>
    </div>
    <br/><br/><br/>
    <Footer/>
    </div>
  )
}
