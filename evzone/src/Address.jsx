import React from 'react'
import './Address.css';

const Address = () => {
  return (
    <div class="container">
        <h2>ADDRESS DETAILS</h2>
        <form action="Payment"id="purchaseForm" >
            <label for="fullName">Full Name:</label>
            <input type="text" id="fullName" name="fullName" required />

            <label for="address">Address:</label>
            <textarea id="address" name="address" rows="4" required ></textarea>

            <label for="city">City:</label>
            <input type="text" id="city" name="city" required />

            <label for="pinCode">Pin Code:</label>
            <input type="text" id="pinCode" name="pinCode" required />

            <button type="submit">Buy</button>
        </form>
    </div>
  )
}

export default Address