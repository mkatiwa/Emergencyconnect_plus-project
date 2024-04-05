// Dummy user data for demonstration purposes
let users = [];

function login() {
const username = document.getElementById("loginUsername").value;
const password = document.getElementById("loginPassword").value;

const user = users.find(user => user.username === username && user.password === password);

if (user) {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("usernameDisplay").innerText = user.username;
    document.getElementById("welcomeMessage").style.display = "block";
} else {
    alert("Invalid username or password. Please try again.");
}
}

function signup() {
const username = document.getElementById("signupUsername").value;
const password = document.getElementById("signupPassword").value;

// Check if the username already exists
const existingUser = users.find(user => user.username === username);
if (existingUser) {
    alert("Username already exists. Please choose a different one.");
    return;
}

// Add the new user to the users array
users.push({ username, password });

// Clear the input fields
document.getElementById("signupUsername").value = "";
document.getElementById("signupPassword").value = "";

// Hide the signup form and show the login form
document.getElementById("signupForm").style.display = "none";
document.getElementById("loginForm").style.display = "block";

alert("Signup successful! You can now login.");
}

function showSignupForm() {
document.getElementById("loginForm").style.display = "none";
document.getElementById("signupForm").style.display = "block";
}

function logout() {
document.getElementById("usernameDisplay").innerText = "";
document.getElementById("welcomeMessage").style.display = "none";
document.getElementById("loginForm").style.display = "block";
}


document.getElementById('subscribeForm').addEventListener('submit', function(event) {
event.preventDefault();

var email = document.getElementById('newsletter1').value;
var xhr = new XMLHttpRequest();
xhr.open('POST', 'subscribe.php', true);
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhr.onload = function() {
    if (xhr.status === 200) {
        document.getElementById('subscribeMessage').innerHTML = xhr.responseText;
    } else {
        console.log('Request failed. Returned status of ' + xhr.status);
    }
};
xhr.send('email=' + encodeURIComponent(email));
});
function Subscribe() {
    alert('Thank you for the subscription. We will keep updating you.');
    document.getElementById("Subscribe-form");
   
  }