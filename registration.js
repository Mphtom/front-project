document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    var namePattern = /^[A-Za-z]+$/;
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!namePattern.test(firstName)) {
        alert('First Name should be a series of alphabetical characters.');
        return;
    }

    if (!namePattern.test(lastName)) {
        alert('Last Name should be a series of alphabetical characters.');
        return;
    }
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address (example@gmail.com).');
        return;
    }
    if (password.length < 8) {
        alert('Password should be at least 8 characters long.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    var users = JSON.parse(localStorage.getItem('users')) || [];
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    var existingUser = users.find(function(user) {
        return user.email === email;
    });
console.log (existingUser)
    if (existingUser) {
        alert('User with this email already exists. Please use a different email.');
        return;
    }

    var newUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful!');
    window.location.href = 'login.html'
});
