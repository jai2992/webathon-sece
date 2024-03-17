import React from 'react'
import Productbar from './product';
import Nav from './navbar'
import Footer from './footer';

export default function FoodCourt() {
  return (
    <div>
    <Nav/>
    <br/><br/>
    <h2 style={{margin:'30px 30px 30px 120px',fontWeight:'bolder'}}>Tiffin</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', padding: '0px',alignSelf:'center',marginLeft:'120px', marginRight:'200px'}}>
        <Productbar id="food 1"/>
        <Productbar id="food 2"/>
        <Productbar id="food 3"/>
        <Productbar id="food 4"/>
        <Productbar id="food 5"/>
        <Productbar id="food 6"/>
    </div>
    <h2 style={{margin:'30px 30px 30px 120px',fontWeight:'bolder'}}>Fast Food</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', padding: '0px',alignSelf:'center',marginLeft:'120px', marginRight:'200px'}}>
        <Productbar id="food 11"/>
        <Productbar id="food 12"/>
        <Productbar id="food 13"/>
        <Productbar id="food 14"/>
        <Productbar id="food 15"/>
        <Productbar id="food 16"/>
    </div>
    <h2 style={{margin:'30px 30px 30px 120px',fontWeight:'bolder'}}>Bakery Items</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', padding: '0px',alignSelf:'center',marginLeft:'120px', marginRight:'200px'}}>
        <Productbar id="food 21"/>
        <Productbar id="food 22"/>
        <Productbar id="food 23"/>
        <Productbar id="food 24"/>
        <Productbar id="food 25"/>
        <Productbar id="food 26"/>
    </div>
    <br/><br/><br/>
    <Footer/>
    </div>
  )
}
