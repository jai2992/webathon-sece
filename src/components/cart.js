import React from 'react'
import { Form, Button } from 'react-bootstrap';

function Cart() {
  return (
    <div style={{display:'flex'}}>
        <div style={{backgroundColor:'blue' , flex:2,height:"100vh"}}>
            <div>
                <div>
                    Confirm Payment
                </div>



    <Form>
      <Form.Group controlId="nameOnCard">
        <Form.Label>NAME ON CARD</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group controlId="cardNumber">
        <Form.Label>CARD NUMBER</Form.Label>
        <Form.Control type="text" placeholder="Enter card number" />
      </Form.Group>

      <Form.Group controlId="expDate">
        <Form.Label>EXP DATE</Form.Label>
        <Form.Control type="text" placeholder="MM / YY" />
      </Form.Group>

      <Form.Group controlId="cvv">
        <Form.Label>CVV</Form.Label>
        <Form.Control type="text" placeholder="Enter CVV" />
      </Form.Group>

      <Button variant="warning" block>
        PAY NOW
      </Button>
    </Form>
  

            </div>
        </div>
        <div style={{backgroundColor:'pink' , flex:3,height:"100vh"}}>dijidjv</div>
    </div>
  )
}

export default Cart