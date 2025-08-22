document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Stop form from submitting

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long!");
        return;
    }

    alert("Registration Successful!");
    // Here you can send data to server using fetch() or AJAX
});