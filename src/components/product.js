import React from 'react'
import { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function Product() {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const dataCollection = await getDocs(collection(db, 'items'));
        setData(dataCollection.docs.map(doc => doc.data()));
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        <h1>Data from Firebase:</h1>
        {data.map((item, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <img src={item.image} alt={item.name} style={{ width: '100%', maxWidth: '200px' }} />
            </div>
            <div style={{ flex: 1, paddingLeft: '10px' }}>
              <h3>{item.name}</h3>
              <p>{item.des}</p>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    );
}
