import React from 'react';
import './Payment.css';

const Payment = () => {
  return (
    <>
    <body className='paymentbody'>
        <div class="payment-container">
        <h2>Payment Options</h2>

        <div class="payment-options">
            <a href="Visa">
                <div class="payment-option" id="visa">
                    <img src="visa.jpg" alt="Visa" />
                    <p>Visa Card</p>
                </div>
            </a>

            <a href="Mcard">
                <div class="payment-option" id="mastercard">
                    <img src="mastercard.jpg" alt="MasterCard" />
                    <p>MasterCard</p>
                </div>
            </a>

            <a href="Upi">
                <div class="payment-option" id="upi">
                    <img src="upi.webp" alt="UPI" />
                    <p>UPI</p>
                </div>
            </a>
            
                <div class="payment-option" id="cod">
                    <img src="cod.jpg" alt="cod" />
                    <p>Cash On Delivery</p>
                </div>
            
            
        </div>
    </div>
    </body>
    </>
  )
}

export default Payment