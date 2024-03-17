import React from 'react'
import Nav from './navbar'
import './Landing.css'
import Productbar from './product'
import Footer from './footer'
import { TypeAnimation } from 'react-type-animation';



export default function Landing() {
  return (
    <div>
        <Nav/>
        <div class='land'>
          {/* <p class='title'>Efficiency meets comfort with our Amenity Management System.</p> */}
          <TypeAnimation
          sequence={[
            'Efficiency meets comfort with our Emporium',
            3000, // wait 1s before replacing "Emporium" with "Parlor"
            'Efficiency meets comfort with our Parlor',
            3000,
            'Efficiency meets comfort with our Bistro',
            3000,
            'Efficiency meets comfort with our Market',
            3000,
            'Efficiency meets comfort with our Lounge',
            3000
          ]}
          
      
      
      wrapper="span"
      speed={10}
      // class='title'
      style={{
        color: 'rgb(255, 153, 0)',
        zIndex: 2,
        fontWeight: 'bolder',
        fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
        fontSize: '60px',
        display: 'inline-block',
      }}
      repeat={Infinity}
    />
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
    <div class='land'>
    <div className="container" style={{color:'orange'}}>
    <h4 className="center-heading">Frequently Ordered Items</h4>
    <br/> <br/><br/> <br/>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px', padding: '50px',alignContent:'center',marginLeft:'100px', marginRight:'200px',zIndex:'100'}}>
        <Productbar id="food 4"/>
        <Productbar id="store 12"/>
    </div>
    </div>
    <br/> <br/><br/> <br/>

    </div>

    </div>
    <Footer/>
    </div>
  )
}
