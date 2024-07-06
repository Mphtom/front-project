document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const userEmail = document.getElementById('userEmail').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('remember').checked;

        if (userEmail.trim() === '' || password.trim() === '') {
            alert('Please enter both email and password.');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const validUser = users.find(function(user) {
            return user.email === userEmail;
        });
        console.log(validUser)

        if (!validUser || validUser.password !== password) {
            alert("Invalid email or password. Please try again.");
            document.getElementById('password').value = "";
            return;
        }

        if (rememberMe) {
            localStorage.setItem('rememberedUser', JSON.stringify({ userEmail, password }));
        } else {
            localStorage.removeItem('rememberedUser');
        }

        window.location.href = 'exam-page.html';
        loginForm.reset();
    });
});