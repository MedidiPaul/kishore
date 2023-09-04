document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const message = document.getElementById('message');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // You should perform server-side authentication here.
        // For this example, we'll simulate a successful login.
        if (username === 'yourusername' && password === 'yourpassword') {
            message.textContent = 'Login successful!';
            message.style.color = 'green';
        } else {
            message.textContent = 'Invalid username or password';
            message.style.color = 'red';
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');
    const message = document.getElementById('message');

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // You should perform server-side validation and registration here.
        // For this example, we'll just display a success message.
        message.textContent = 'Registration successful!';
        message.style.color = 'green';

        // You can also send the registration data to the server using AJAX or fetch API.
        // Example:
        // fetch('/register', {
        //     method: 'POST',
        //     body: JSON.stringify({ username, email, password }),
        //     headers: { 'Content-Type': 'application/json' },
        // })
        // .then(response => {
        //     if (response.ok) {
        //         return response.json();
        //     } else {
        //         throw new Error('Registration failed.');
        //     }
        // })
        // .then(data => {
        //     // Handle the server's response, e.g., show a success message.
        // })
        // .catch(error => {
        //     console.error('Error:', error);
        //     message.textContent = 'Registration failed.';
        //     message.style.color = 'red';
        // });
    });
});

