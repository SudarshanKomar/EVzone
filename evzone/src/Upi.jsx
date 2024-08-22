import React from 'react'
import './Payitem.css';

const Upi = () => {
  return (
    <>
    <body className='paybody'>
        <div className="payment-details-container">
        <h2>UPI Payment</h2>

        <form id="payment-form">
         
            <label for="upiId">UPI ID:</label>
            <input type="text" id="upiId" placeholder="Enter your UPI ID" required />

            <button type="button" onclick="processPayment()" className='paybutton'>Process Payment</button>
        </form>
    </div>
    </body>
    </>
  )
}

export default Upi