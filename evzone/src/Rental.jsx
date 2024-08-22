import React from 'react';
import { useLocation } from 'react-router-dom';

const Rental = () => {
    const location = useLocation();
    const { startDateTime, endDateTime } = location.state || {};

    let hours = 0;
    if (startDateTime && endDateTime) {
        const start = new Date(startDateTime);
        const end = new Date(endDateTime);
        hours = Math.ceil((end - start) / (1000 * 60 * 60)); // Difference in hours, rounded up
    }

    // Sample price calculation based on hours
    const pricePerHour = 10; // Price per hour

    return (
        <>
            <h2>Rental Details:</h2>
            {startDateTime && endDateTime && (
                <>
                    <p>Start Date and Time: {startDateTime}</p>
                    <p>End Date and Time: {endDateTime}</p>
                    <p>Total Hours: {hours}</p>
                </>
            )}

            <section id="vehicles">
                <div className="vehicle-container" id="vehicle1">
                    <h3>Hero lectro</h3>
                    <p>Price: ${pricePerHour * hours}</p>
                </div>
                <div className="vehicle-container" id="vehicle2">
                    <h3>Ola s1 pro</h3>
                    <p>Price: ${pricePerHour * hours}</p>
                </div>
                {/* Add more vehicle containers here */}
            </section>
        </>
    );
};

export default Rental;