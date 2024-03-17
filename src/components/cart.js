import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
    } from "mdb-react-ui-kit";

import QRCode from 'react-qr-code';
import { useNavigate } from 'react-router-dom';
import React from "react";
import Nav from './navbar'
import { useState, useEffect } from 'react';
import CartItem from './cart_item';
import { db } from './firebase';
import { collection, getDocs , deleteDoc} from 'firebase/firestore';
import { generateBill } from './billcomp';
import './loading.css'


export default function Basic() {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'items'));
        const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCartItems(items);
        calculateTotalPrice(items);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };
    fetchCartItems();
  }, []);

  const deleteCartItem =  (itemId) => {
    try {
      // Remove item from UI
      setCartItems(cartItems.filter(item => item.id !== itemId));
      // Remove item from database
    //   await deleteDoc(db, 'items', itemId);
    // calculateTotalPrice(cartItems.filter(item => item.id !== itemId));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const calculateTotalPrice = (items) => {
    let total = 0;
    items.forEach(item => {
      total += Number(item.quantity) * Number(item.price);
    //   console.log(item.price);
    // console.log(typeof(item.price));
    // console.log(typeof(item.quantity));

    });
    console.log("CALLED UPDATE");
    console.log(total);
    console.log(typeof(total));

    setTotalPrice(total);
    setTotalPrice(total);
  };
  const updateTotalPrice =  () => {
    // const querySnapshot =  await getDocs(collection(db, 'items'));
    // const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    // setCartItems(items);
    calculateTotalPrice(cartItems);
    calculateTotalPrice(cartItems);
  };
  const [isLoading, setIsLoading] = useState(false);

  const setItems = async (itemId, quantityChange) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: item.quantity + quantityChange } : item
      )
    );
  };
  
  useEffect(() => {
    // Calculate total price based on updated quantities
    let total = 0;
    cartItems.forEach(item => {
      total += Number(item.quantity) * Number(item.price);
    });
    setTotalPrice(total);
  }, [cartItems]);
  
  const [showQRCode, setShowQRCode] = useState(false);

  useEffect(() => {
      const timer = setTimeout(() => {
          setShowQRCode(true);
      }, 2000);

      return () => clearTimeout(timer);
  }, []);


  const navigate = useNavigate();

  const handleProceed = () => {
    setIsLoading(true); // Show loading screen

    generateBill();
        // Simulate loading for 3 seconds
        setTimeout(() => {
            setIsLoading(false); // Hide loading screen
            navigate('/signin');
        }, 3000);

};

return (
<section className="h-100 h-custom" style={{ backgroundImage: "./background.png" }}>
    <Nav/>
                {/* Your loading screen */}
                {isLoading && (
                <div className="loading-screen">
                    <img src="https://i.pinimg.com/originals/1a/25/d4/1a25d431e3878b587a8275a3968a1bd0.gif" alt="Loading..." />
                </div>
            )}
                <MDBContainer className="py-5 h-100">
    <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol>
        <MDBCard>
            <MDBCardBody className="p-4">
            <MDBRow>
            <h2 style={{fontWeight:"bolder"}}>Payment</h2>
                <MDBCol lg="7">
                <MDBContainer>
                    {cartItems.map(item => (
                        item.quantity > 0 && (
                            <MDBRow key={item.id}>
                                <MDBCol md="15">
                                    <CartItem id={item.id} initialQuantity={item.quantity} onDelete={deleteCartItem} updateTotalPrice={updateTotalPrice} setItems={setItems}/>
                                </MDBCol>
                            </MDBRow>
                        )
                    ))}
                </MDBContainer>
                </MDBCol> 

                <MDBCol lg="5">
                <MDBContainer>
                <MDBCard style={{background:'orange'}}>
                    <MDBCardBody>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <MDBTypography tag="h4" className="mb-0">
                        Amount (Id)
                        </MDBTypography>
                        <h5>Bal : INR 5001/-</h5>
                    </div>

                    <h5 className="small">Scan to pay</h5>
                    {showQRCode && (
                        <QRCode
                            title="SECE PAYMENT"
                            value={`upi://pay?pa=jaiguru2992@okhdfcbank&pn=Jai%20guru&am=${totalPrice}.00&cu=INR&aid=uGICAgMDE16mMcg`}
                            style={{padding:'5px',background:'white',borderRadius:'20px',padding:'10px'}}
                        />
                    )}
                    {/* <form className="mt-4">
                        <MDBInput className="mb-4" label="Cardholder's Name" type="text" size="lg"
                        placeholder="Cardholder's Name" contrast />

                        <MDBInput className="mb-4" label="Card Number" type="text" size="lg"
                        minLength="19" maxLength="19" placeholder="1234 5678 9012 3457" contrast />

                        <MDBRow className="mb-4">
                        <MDBCol md="6">
                            <MDBInput className="mb-4" label="Expiration" type="text" size="lg"
                            minLength="7" maxLength="7" placeholder="MM/YYYY" contrast />
                        </MDBCol>
                        <MDBCol md="6">
                            <MDBInput className="mb-4" label="Cvv" type="text" size="lg" minLength="3"
                            maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast />
                        </MDBCol>
                        </MDBRow>
                    </form> */}

                    <hr />

                    <div className="d-flex justify-content-between">
                  <h5 className="mb-2">Total</h5>
                  <h5 className="mb-2">INR {totalPrice}/-</h5>
                </div>

                    <button color="info" variant="warning" block size="lg" className="btn btn-primary"  onClick={handleProceed}>
                        PROCEED !
                    </button>
                    </MDBCardBody>
                </MDBCard>
                </MDBContainer>
                </MDBCol>
            </MDBRow>
            </MDBCardBody>
        </MDBCard>
        </MDBCol>
    </MDBRow>
    </MDBContainer>
</section>
);
}