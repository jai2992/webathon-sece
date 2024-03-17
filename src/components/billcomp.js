// BillComponent.js
// import React, { useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export const generateBill = async () => {
  const querySnapshot = await getDocs(collection(db, 'items'));
  const itemsData = querySnapshot.docs.map(doc => doc.data());
  const filteredItems = itemsData.filter(item => item.quantity > 0);

  const doc = new jsPDF();
  let y = 50; // Initial y position

  // Header
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  doc.setFontSize(14);
  doc.text('Invoice', 105, y - 30, 'center');
  doc.setFontSize(10);
  doc.text(`Date: ${date}  Time: ${time}`, 105, y - 20, 'center');
  y += 20; // Increase y position for next line

  // Add bill content
  doc.setFontSize(10);
  doc.text('Item', 25, y);
  doc.text('Price', 80, y); // Adjusted position for the new column
  doc.text('Quantity', 120, y); // Adjusted position for the new column
  doc.text('Total', 160, y); // Adjusted position for the new column
  y += 8; // Increase y position for next line
  doc.line(10, y, 200, y); // Horizontal line
  y += 5; // Increase y position for next line

  filteredItems.forEach(item => {
    // Draw rows
    const totalPrice = item.price * item.quantity; // Calculate total amount
    doc.text(item.name, 25, y);
    doc.text(`INR ${item.price}`, 80, y); // Adjusted position for the new column
    doc.text(item.quantity.toString(), 120, y); // Adjusted position for the new column
    doc.text(`INR ${totalPrice}`, 160, y); // Adjusted position for the new column

    y += 8; // Increase y position for next line
    doc.line(10, y, 200, y); // Horizontal line
    y += 5; // Increase y position for next line
  });

  // Total sum
  const totalSum = filteredItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  y += 5;
  doc.line(10, y, 200, y); // Horizontal line
  doc.text('Total:', 100, y + 10);
  doc.text(`Rs . ${totalSum} /- `, 160, y + 10);
  y += 20; // Increase y position for next section

  // Add more content for enhancement
  doc.text('Thank you for your purchase!', 105, y + 10, 'center');
  doc.text('Visit again!', 105, y + 20, 'center');

  // Save the PDF
  doc.save('bill.pdf');
};

const BillComponent = () => {
  // Your component code here
};

export default BillComponent;
