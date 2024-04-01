function register() {
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    if (!username || !email || !password) {
        alert('Please fill in all fields.');
        return;
    }

    // Check if user already exists
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = existingUsers.some(user => user.username === username || user.email === email);
    if (userExists) {
        alert('Username or email already exists.');
        return;
    }

    // Add new user
    existingUsers.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(existingUsers));
    alert('Registration successful.');
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (!username || !password) {
        alert('Please fill in all fields.');
        return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const user = existingUsers.find(user => user.username === username && user.password === password);
    if (!user) {
        alert('Invalid username or password.');
        return;
    }

    alert('Login successful. Redirecting to homepage...');
    // Redirect to homepage (replace with your actual URL)
    window.location.href = 'hm.html';
}

function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
    registerForm.style.display = registerForm.style.display === 'none' ? 'block' : 'none';
}
