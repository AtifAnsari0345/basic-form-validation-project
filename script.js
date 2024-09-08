document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    let valid = true;

    // Name validation
    if (fullName.value.length < 5) {
        fullName.classList.add('is-invalid');
        valid = false;
    } else {
        fullName.classList.remove('is-invalid');
    }

    // Email validation
    if (!email.value.includes('@')) {
        email.classList.add('is-invalid');
        valid = false;
    } else {
        email.classList.remove('is-invalid');
    }

    // Phone number validation
    const phoneNumber = /^[0-9]{10}$/;
    if (!phoneNumber.test(phone.value) || phone.value === '1234567890') {
        phone.classList.add('is-invalid');
        valid = false;
    } else {
        phone.classList.remove('is-invalid');
    }

    // Password validation
    if (password.value === 'password' || password.value.length < 8 || password.value === fullName.value) {
        password.classList.add('is-invalid');
        valid = false;
    } else {
        password.classList.remove('is-invalid');
    }

    // Confirm password validation
    if (confirmPassword.value !== password.value) {
        confirmPassword.classList.add('is-invalid');
        valid = false;
    } else {
        confirmPassword.classList.remove('is-invalid');
    }

    if (valid) {
        alert('Registration successful!');
    }
}
