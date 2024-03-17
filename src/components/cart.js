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
import React from "react";
import Nav from './navbar'
import { useState, useEffect } from 'react';
// import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import CartItem from './cart_item';
import { db } from './firebase';
import { collection, getDocs , deleteDoc} from 'firebase/firestore';
import BillComponent from "./bill";

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

  const deleteCartItem = async (itemId) => {
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
  };
  const updateTotalPrice = async () => {
    // const querySnapshot =  await getDocs(collection(db, 'items'));
    // const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    // setCartItems(items);
    calculateTotalPrice(cartItems);
  };

  const setItems =  async (itemId,quantityChange) => {
    setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === itemId ? { ...item, quantity: item.quantity + quantityChange } : item
        )
      );
      calculateTotalPrice(cartItems);
  }


return (
<section className="h-100 h-custom" style={{ backgroundImage: "./background.png" }}>
    <Nav/>
    <MDBContainer className="py-5 h-100">
    <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol>
        <MDBCard>
            <MDBCardBody className="p-4">
            <MDBRow>
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
                <MDBCard className="bg-primary text-white rounded-3">
                    <MDBCardBody>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <MDBTypography tag="h5" className="mb-0">
                        Card details
                        </MDBTypography>
                        <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                        fluid className="rounded-3" style={{ width: "45px" }} alt="Avatar" />
                    </div>

                    <p className="small">Card type</p>
                    <a href="#!" type="submit" className="text-white">
                        <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
                    </a>
                    <a href="#!" type="submit" className="text-white">
                        <MDBIcon fab icon="cc-visa fa-2x me-2" />
                    </a>
                    <a href="#!" type="submit" className="text-white">
                        <MDBIcon fab icon="cc-amex fa-2x me-2" />
                    </a>
                    <a href="#!" type="submit" className="text-white">
                        <MDBIcon fab icon="cc-paypal fa-2x me-2" />
                    </a>

                    <form className="mt-4">
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
                    </form>

                    <hr />

                    <div className="d-flex justify-content-between">
                  <p className="mb-2">Total</p>
                  <p className="mb-2">${totalPrice}</p>
                </div>

                    <button color="info" variant="warning" block size="lg" className="btn btn-warning">
                        PROCEED !
                        {/* <div className="d-flex justify-content-between">
                        <span>
                            Checkout{" "}
                        </span>
                        </div> */}
                    </button>
                    <BillComponent/>
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