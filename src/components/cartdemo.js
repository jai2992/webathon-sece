import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import CartItem from './cart_item';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';
export default function Cartdemo() {
    const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'items'));
        const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCartItems(items);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };
    fetchCartItems();
  }, []);

  return (
    <MDBContainer>
      <h1 className="text-center my-5">Cart</h1>
      <MDBRow>
        {cartItems.map(item => (
          item.quantity > 0 && (
            <MDBCol key={item.id} md="4">
              <CartItem id={item.id} initialQuantity={item.quantity} />
            </MDBCol>
          )
        ))}
      </MDBRow>
    </MDBContainer>
  );
};