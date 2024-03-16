import React from 'react';
import jsPDF from 'jspdf';

const BillComponent = () => {
  const generateBill = () => {
    const doc = new jsPDF();

    doc.text('Invoice', 10, 10);

    // Add your bill content here
    doc.text('Item 1: $10', 10, 20);
    doc.text('Item 2: $20', 10, 30);

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
