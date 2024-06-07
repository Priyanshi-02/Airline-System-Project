// JavaScript for form validation and interactivity

// Function to validate the booking form
function validateBookingForm() {
    const name = document.getElementById('name').value;
    const flight = document.getElementById('flight').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (!name || !flight || !date || !time) {
        alert('All fields are required.');
        return false;
    }

    alert('Booking successful!');
    return true;
}

// Function to validate the login form
function validateLoginForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert('Both username and password are required.');
        return false;
    }

    alert('Login successful!');
    return true;
}

// Event listeners for form submissions
document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.querySelector('#book form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(event) {
            if (!validateBookingForm()) {
                event.preventDefault();
            }
        });
    }

    const loginForm = document.querySelector('#login form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            if (!validateLoginForm()) {
                event.preventDefault();
            }
        });
    }
});
