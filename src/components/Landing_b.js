import React from 'react'
import Nav from './nav_b'
import './Landing.css'
import Productbar from './product'
import Footer from './footer'


export default function Landing_b() {
  return (
    <div>
        <Nav/>
        <div class='land'>
          <p class='title'>Efficiency meets comfort with our Amenity Management System.</p>
        </div>
        <div>
        <div className="container">
      <h4 className="center-heading">Our Products</h4>
      <br/> <br/><br/> <br/>
      
      
      <div className="circle-container">
        <div className="circle">
          <img src='https://d4t7t8y8xqo0t.cloudfront.net/resized/720X480/restaurant%2F690852%2Frestaurant020230923111214.png' alt="Image 1"/>
          <p>Order Now, taste <br/>
            happiness in every dish...</p>
        </div>
        <div className="circle">
          <img src="https://static.toiimg.com/photo/53490136.cms" alt="Image 2" />
          <p>Enhance your aura,<br/>
             with a haircut and spa allure...</p>
        </div>
        <div className="circle">
          <img src="https://media.istockphoto.com/id/485725200/photo/school-and-office-accessories-on-wooden-background.jpg?b=1&s=612x612&w=0&k=20&c=ZPKbyKvfLH_xgHYxhXaPKz-lBJxT5g2g04jZFx4LHXk=" alt="Image 3" />
          <p>From notes to novel,<br/> let your words find home...</p>
        </div>
      </div>
    </div>
    <br/> <br/><br/> <br/>
    <br/>
    {/* <div class='land'>
    <div className="container" style={{color:'orange'}}>
    <h4 className="center-heading">Frequently Ordered Items</h4>
    <br/> <br/><br/> <br/>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px', padding: '50px',alignContent:'center',marginLeft:'100px', marginRight:'200px',zIndex:'100'}}>
        <Productbar id="1"/>
        <Productbar id="1"/>
    </div>
    </div>
    <br/> <br/><br/> <br/>

    </div> */}
  
    </div>
    <Footer/>
    </div>
  )
}
