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

// const isValidEmail = email => {
//     // TO DO write code to ensure email is corrent and aligns with one in our db
// }

// const isValidPassword = password => {
//     // TO DO write code to ensure password is correct and aligns with the password matched with the email
// }

const validateInputs = () => {
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()

    document.getElementById('error').innerText = ""
    errorMessages.length = 0


    if(emailValue == "" || emailValue == null){
        addError("Email is required")
    // }else if (!isValidEmail(emailValue)){
    //     addError("Email doesn't match, try again")
    }

    if(passwordValue == "" || passwordValue == null){
        addError("Password is required")
    // }else if(!isValidPassword(passwordValue)){
    //     addError("Password doesnt match, try again")
    }

    if (errorMessages.length > 0){
        setError()
    }else{
        setSuccess();
    }
}