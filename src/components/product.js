import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const Product = ({ id }) => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, 'items', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProduct(docSnap.data());
      } else {
        console.log('No such document!');
      }
    };

    fetchProduct();
  }, [id]);

  const handleIncrement = async () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);

    // Update the quantity in the Firestore database
    const docRef = doc(db, 'items', id);
    await updateDoc(docRef, { quantity: newQuantity });
  };

  return (
    <div style={{ width: '400px', height: '200px', display: 'flex', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',background:'rgba(255,255,255,0.9)', borderRadius: '10px',zIndex:'1' }}>
      <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '10px' }}>
        <div style={{paddingLeft:'15px'}}>
          <h5 style={{alignSelf:'center' ,marginTop:'25px',alignContent:'center',marginLeft:'0px', paddingTop: '5px' }}>{product?.name}</h5>
          <p style={{ paddingTop: '5px', padding: '5px 0px',marginBottom:'0px' }}>{product?.des}</p>
        </div>
        <h5 style={{ textAlign:'center', paddingTop:'-20px',marginBottom:'15px'}}>INR {product?.price} /-</h5>
      </div>
      <div style={{ flex: '1', padding: '10px', position: 'relative' }}>
        <img
            src={product?.image}
            alt={product?.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
        />
        <button
            onClick={handleIncrement}
            style={{
            position: 'absolute',
            bottom: '5%',
            right: '5%',
            padding: '5px 10px 0px 15px' ,
            borderRadius: '10px 0px 10px 0px',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            color: 'black',
            border: 'none',
            cursor: 'pointer',
            fontSize: '30px',
            fontWeight:'bolder'
            }}>+</button>
      </div>
    </div>
  );
};

export default Product;
