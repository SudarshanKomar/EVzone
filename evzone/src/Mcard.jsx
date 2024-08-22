import React from 'react'
import './Payitem.css';
const Mcard = () => {
  return (
    <>
    <body className='paybody'>
        <div class="payment-details-container">
        <h2>MasterCard Payment</h2>

        <form id="payment-form">

            <label for="cardNumber">Card Number:</label>
            <input type="text" id="cardNumber" placeholder="Enter your MasterCard number" required />

            <label for="expiryDate">Expiry Date:</label>
            <input type="text" id="expiryDate" placeholder="MM/YY" required />

            <label for="cvv">CVV:</label>
            <input type="text" id="cvv" placeholder="Enter CVV" required />

            <label for="mastercardSecureCode">Secure Code:</label>
            <input type="text" id="mastercardSecureCode" placeholder="Enter MasterCard secure code" required />

            <button type="button" onclick="processPayment()" className='paybutton'>Process Payment</button>
        </form>
    </div>
    </body>
    </>
  )
}

export default Mcard