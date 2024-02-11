const form = document.getElementById("form");
const name = document.getElementById("name");
const eyeIcon = document.getElementById("eye");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log("logged in")
    checkInputs();
})

var state = false;

function showPassword() {
    const type = passwordInput.getAttribute("type");
    if (type === "password") {
        passwordInput.setAttribute("type","text");
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    } else {
        passwordInput.setAttribute("type", "password");
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    }
}

function checkInputs() {
    const nameValue  = name.value.trim();
    const passwordValue = password.value.trim();
    
    if (nameValue === "") {
        alert("Please enter your phone number, username, or email address");
        console.error("Name field is empty");
    } else {
        console.log("Name value was provided");
    }

    if(passwordValue.length < 4) {
        alert("Please enter a stronger password");
    } else {
        console.log("Password length is sufficient");
    }
}

