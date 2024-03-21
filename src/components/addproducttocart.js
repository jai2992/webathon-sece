import { db } from './firebase';
import { doc, getDoc, updateDoc, setDoc } from 'firebase/firestore';


const addProductToCart = async (productId, quantity) => {
    try {
      const docRef = doc(db, 'items', productId);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        await updateDoc(docRef, {
          quantity: docSnap.data().quantity + quantity
        });
      } else {
        await setDoc(docRef, { quantity });
      }
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };
  
  export { addProductToCart };
  