const loginForm = document.getElementById('login-form')
const email = document.getElementById("email")
const password = document.getElementById("password")
const errorMessages = [];

// This is the current login-form.js which handles the login form functionality
// This is set up for displaying errs in single div, check register-form.js for commented per element display idea

loginForm.addEventListener('submit', function(e) {
    e.preventDefault()
    errorMessages.length = 0
    validateInputs()
});

const addError = (message) => {
    errorMessages.push(message)
}

const setError = () => {
    document.getElementById('error').innerText = 'Error: ' + errorMessages.join(', ')
}

const setSuccess = () => {
    document.getElementById('error').innerText = 'Success:' 
}

const isValidEmail = email => {
    // Regular expression for a valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const isValidPassword = password => {
    // Password should be at least 8 characters long
    return password.length >= 8;
}

const validateInputs = () => {
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()

    document.getElementById('error').innerText = ""
    errorMessages.length = 0

    if(isValidEmail){
        addError("Email is required")
    }else if (!isValidEmail(emailValue)){
        addError("Email doesn't match, try again")
    }

    if(isValidPassword){
        addError("Password is required")
    }else if(!isValidPassword(passwordValue)){
        addError("Password doesnt match, try again")
    }

    if (errorMessages.length > 0){
        setError()
    }else{
        setSuccess();
    }
}