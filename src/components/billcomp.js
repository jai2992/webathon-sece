import jsPDF from 'jspdf';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export const generateBill = async () => {
  const querySnapshot = await getDocs(collection(db, 'items'));
  const itemsData = querySnapshot.docs.map(doc => doc.data());
  const filteredItems = itemsData.filter(item => item.quantity > 0);

  const doc = new jsPDF();
  let y = 50;

 
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  doc.setFontSize(14);
  doc.text('Invoice', 105, y - 30, 'center');
  doc.setFontSize(10);
  doc.text(`Date: ${date}  Time: ${time}`, 105, y - 20, 'center');
  y += 20;

  doc.setFontSize(10);
  doc.text('Item', 25, y);
  doc.text('Price', 80, y);
  doc.text('Quantity', 120, y);
  doc.text('Total', 160, y);
  y += 8;
  doc.line(10, y, 200, y);
  y += 5;

  filteredItems.forEach(item => {
    const totalPrice = item.price * item.quantity; 
    doc.text(item.name, 25, y);
    doc.text(`INR ${item.price}`, 80, y);
    doc.text(item.quantity.toString(), 120, y);
    doc.text(`INR ${totalPrice}`, 160, y);

    y += 8;
    doc.line(10, y, 200, y);
    y += 5;
  });

  const totalSum = filteredItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  y += 5;
  doc.line(10, y, 200, y);
  doc.text('Total:', 100, y + 10);
  doc.text(`Rs . ${totalSum} /- `, 160, y + 10);
  y += 20;

  doc.text('Thank you for your purchase!', 105, y + 10, 'center');
  doc.text('Visit again!', 105, y + 20, 'center');


  doc.save('bill.pdf');
};


export default BillComponent;
