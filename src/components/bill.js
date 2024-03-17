import React, { useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

const BillComponent = () => {
  const [items, setItems] = useState([]);
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'items'));
        const itemsData = querySnapshot.docs.map(doc => doc.data());
        const filteredItems = itemsData.filter(item => item.quantity > 0);
        setItems(filteredItems);
        calculateTotalSum(filteredItems);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };
    fetchItems();
  }, []);

  const calculateTotalSum = (items) => {
    let sum = 0;
    items.forEach(item => {
      sum += item.price * item.quantity;
    });
    setTotalSum(sum);
  };

  const generateBill = () => {
    const doc = new jsPDF();
    let y = 20; // Initial y position

    // Header
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    doc.setFontSize(12);
    doc.text('Invoice', 100, y, 'center');
    doc.text(`Date: ${date}  Time: ${time}`, 100, y + 10, 'center');
    y += 20; // Increase y position for next line

    // Add bill content
    doc.setFontSize(10);
    items.forEach(item => {
      // Draw rows
      doc.line(10, y-5 , 200, y-5 ); // Horizontal line
      doc.text(`${item.name}`, 15, y);
      doc.line(90, y - 2, 90, y + 8); // Vertical line
      doc.text(`$${item.price}`, 95, y);
      doc.line(150, y - 2, 150, y + 8); // Vertical line
      doc.text(`${item.quantity}`, 155, y);
      doc.line(10, y + 8, 200, y + 8); // Horizontal line

      y += 10; // Increase y position for next line
    });

    // Total sum
    y += 10;
    doc.line(10, y - 2, 200, y - 2); // Horizontal line
    doc.text('Total:', 145, y);
    doc.text(`$${totalSum}`, 180, y);
    doc.line(10, y + 5, 200, y + 5); // Horizontal line

    // Footer
    doc.line(10, 280, 200, 280); // Horizontal line
    doc.setFontSize(8);
    doc.text('Thank you for your purchase!', 100, 285, 'center');

    // Save the PDF
    doc.save('bill.pdf');
  };

  return (
    <div>
      <h1>Your Bill</h1>
      <button onClick={generateBill}>Generate Bill</button>
    </div>
  );
};

export default BillComponent;
