import React, { useState } from 'react';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import { addProductToCart } from './addproducttocart'; 
import Product from './product';

const CartItem = ({ id, initialQuantity }) => {
    const [itemQuantity, setItemQuantity] = useState(initialQuantity);
  
    const handleIncrease = () => {
      setItemQuantity(itemQuantity + 1);
      addProductToCart(id, 1); // Add 1 to the quantity of the product with this id in Firestore
    };
  
    const handleDecrease = () => {
      if (itemQuantity > 0) {
        setItemQuantity(itemQuantity - 1);
        addProductToCart(id, -1); // Subtract 1 from the quantity of the product with this id in Firestore
      }
    };
  
    return (
      <MDBCard className="mb-3">
        <MDBCardBody>
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-row align-items-center">
              {/* Assuming Product is a component to display product details */}
              <Product id={id} />
              <div className="ml-3">
                <button className="btn btn-primary btn-sm" onClick={handleDecrease}>-</button>
                <span className="mx-2">{itemQuantity}</span>
                <button className="btn btn-primary btn-sm" onClick={handleIncrease}>+</button>
              </div>
            </div>
          </div>
        </MDBCardBody>
      </MDBCard>
    );
  };
  
  export default CartItem;
  