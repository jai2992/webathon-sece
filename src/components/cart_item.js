import React, { useState } from 'react';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import { addProductToCart } from './addproducttocart'; 
// import Product from './product';
import CartProduct from './cartProduct';

const CartItem = ({ id, initialQuantity, onDelete , updateTotalPrice , setItems }) => {
  const [itemQuantity, setItemQuantity] = useState(initialQuantity);
    const handleIncrease = () => {
      setItemQuantity(itemQuantity + 1);
      addProductToCart(id, 1); // Add 1 to the quantity of the product with this id in Firestore
      setItems(id,+1) ;
      
      // updateTotalPrice();
    };
  
    const handleDecrease = () => {
      if (itemQuantity > 1) {
        setItemQuantity(itemQuantity - 1);
        addProductToCart(id, -1); // Subtract 1 from the quantity of the product with this id in Firestore
        setItems(id,-1) ;
        // updateTotalPrice();
      }
    };
  
    const handleDelete = () => {
      if (itemQuantity > 0) {
        // setItemQuantity(itemQuantity - 1);
        onDelete(id); // Call the delete function with the id of the item to be deleted
        addProductToCart(id, - itemQuantity); // Subtract 1 from the quantity of the product with this id in Firestore
      }
    };
  
    return (
      <MDBCard className="mb-3">
        <MDBCardBody>
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-row align-items-center">
              {/* Assuming Product is a component to display product details */}
              <CartProduct id={id} />
              <div className="ml-3">
                <button className="btn btn-primary btn-sm" onClick={handleDecrease}>-</button>
                <span className="mx-2">{itemQuantity}</span>
                <button className="btn btn-primary btn-sm" onClick={handleIncrease}>+</button>
              </div>
              <div>
            <img
              src={'https://cdn-icons-png.flaticon.com/512/6861/6861362.png'}
              alt="Delete"
              style={{ cursor: 'pointer', height: '32px', marginLeft: '20px' }}
              onClick={handleDelete} // Call handleDelete function when clicked
            />
          </div>
            </div>
          </div>
        </MDBCardBody>
      </MDBCard>
    );
  };
  
  export default CartItem;
  