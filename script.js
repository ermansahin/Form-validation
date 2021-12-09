function signup() {
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
var confirmPassword = document.getElementById('confirmpassword').value;
var country = document.getElementById('country').value;
var zipCode = document.getElementById('zip').value;

if (password.length < 10) {
    alert('So weak password. Password should be at least 10 letters!');
    return;
}
if (!/[A-Z]/.test(password[0])) {
    alert('first letter of password should be uppercase!');
    return;
}
if (password !== confirmPassword) {
    alert('Passwords should be the same!');
    return;
}
if (!/[A-Z]/.test(country[0])) {
    alert('Country name should start with uppercase');
    return;
}
 }