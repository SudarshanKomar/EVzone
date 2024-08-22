
function configureAndRedirect() {
    const startDateTime = document.getElementById('startDateTime').value;
    const endDateTime = document.getElementById('endDateTime').value;

    sessionStorage.setItem('price1', calculatePrice(startDateTime, endDateTime, 50));
    sessionStorage.setItem('price2', calculatePrice(startDateTime, endDateTime, 500));
    sessionStorage.setItem('price3', calculatePrice(startDateTime, endDateTime, 500));
    sessionStorage.setItem('price4', calculatePrice(startDateTime, endDateTime, 500));
    sessionStorage.setItem('price5', calculatePrice(startDateTime, endDateTime, 750));
    sessionStorage.setItem('price6', calculatePrice(startDateTime, endDateTime, 2000));

}

function calculatePrice(startDateTime, endDateTime, basePrice) {
    const hourlyRate = 30;

    const startDate = new Date(startDateTime);
    const endDate = new Date(endDateTime);

    const timeDifferenceInMilliseconds = endDate - startDate;
    const timeDifferenceInHours = timeDifferenceInMilliseconds / (1000 * 60 * 60);

    const totalPrice = basePrice + timeDifferenceInHours * hourlyRate;

    return totalPrice;
}

export {configureAndRedirect};
