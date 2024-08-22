import React from 'react'
import './Payitem.css'

const Visa = () => {
  return (
    <>
    <body className='paybody'>
        <div className="payment-details-container">
        <h2>Visa Card Payment</h2>

        <form id="payment-form">
        
            <label for="cardNumber">Card Number:</label>
            <input type="text" id="cardNumber" placeholder="Enter your Visa card number" required />

            <label for="expiryDate">Expiry Date:</label>
            <input type="text" id="expiryDate" placeholder="MM/YY" required />

            <label for="cvv">CVV:</label>
            <input type="text" id="cvv" placeholder="Enter CVV" required />

         
            <label for="visaSecurityCode">Security Code:</label>
            <input type="text" id="visaSecurityCode" placeholder="Enter Visa security code" required />

            <button type="button" onclick="processPayment()" className='paybutton'>Process Payment</button>
        </form>
    </div>
    </body>
    </>
  )
}

export default Visa