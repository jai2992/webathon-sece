import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';

const Product = ({ id }) => {
  const [product, setProduct] = useState(null);

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

  return (
    <div style={{ width: '400px', height: '200px', display: 'flex', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: '10px' }}>
      <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '10px' }}>
        <div>
          <h4 style={{ paddingTop: '5px', padding: '5px 5px' }}>{product?.name}</h4>
          <p style={{ paddingTop: '5px', padding: '5px 0px' }}>{product?.des}</p>
        </div>
        <h4 style={{ alignSelf: 'flex-end',textAlign:'center' }}>INR {product?.price} /-</h4>
      </div>
      <div style={{ flex: '1', padding: '10px', position: 'relative' }}>
        <img
            src={product?.image}
            alt={product?.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
        />
        <button
            style={{
            position: 'absolute',
            bottom: '5%',
            right: '5%',
            padding: '5px 10px',
            borderRadius: '10px 0px 0px 0px',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            color: 'black',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight:'bolder'
            }}>+</button>
      </div>
    </div>
  );
};

export default Product;
