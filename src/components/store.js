import React from 'react'
import Productbar from './product';
import Nav from './navbar'

export default function store() {
  return (
    <div>
    <Nav/>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', padding: '0px',alignSelf:'center',marginLeft:'50px', marginRight:'200px'}}>
        <Productbar id="1"/>
        <Productbar id="1"/>
        <Productbar id="1"/>
        <Productbar id="1"/>
        <Productbar id="1"/>
        <Productbar id="1"/>
    </div>
    </div>
  )
}
