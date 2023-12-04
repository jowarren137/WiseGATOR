const registerForm = document.getElementById('register-form')
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirm = document.getElementById("password-confirm")
const checkbox = document.getElementById('checkbox')
const errorMessages = [];

// Hallo this is the current register-form.js which handles the register form functionality
// Commented code is for refrence for if error functionality will be tied to element or in its own container
// (Will be finalized once style is decided in meantime we will push all errors to one div)

registerForm.addEventListener('submit', function(e) {
    e.preventDefault()
    errorMessages.length = 0
    validateInputs()
});

const addError = (message) => {
    errorMessages.push(message)
}

// Hypothetical individual error messages and red green color change would be implemented in setError and setSuccess
// const setSuccess/Error(input, message)
//      const inputControl = element.parentElement;
//      const errorDisplay = input Control.querySelector(".error")
// 
// Keep the rest same and use inputControl to change color and errorDisplay to control innerText message

const setError = () => {
    document.getElementById('error').innerText = 'Error: ' + errorMessages.join(', ')
}

const setSuccess = () => {
    document.getElementById('error').innerText = 'Success:' 
}

const isValidEmail = email => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return re.test(String(email).toLowerCase())
}

const isValidPassword = password => {
    const re = /[A-Z]/.test(password)
    const ree = /\d/g.test(password)
    return re && ree
}

const validateInputs = () => {
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const passwordConfirmValue = passwordConfirm.value.trim()
    const checkboxValue = checkbox.checked

    document.getElementById('error').innerText = ""
    errorMessages.length = 0


    if(emailValue == "" || emailValue == null){
        //setError(email, "email is required")
        addError("Email is required")
    }else if (!isValidEmail(emailValue)){
        addError("Email needs to be valid email address")
    // }else{
    //     setSuccess(email)
    }

    if(passwordValue == "" || passwordValue == null){
        addError("Password is required")
    }else if(passwordValue.length < 8){
        addError("Password must be 8 characters in length")
    }else if(!isValidPassword(passwordValue)){
        addError("Password needs at least one Capital and one Numerical character")
    }

    if(passwordConfirmValue !== passwordValue){
        addError("Your passwords do not match")
    }

    if(!checkboxValue){
        addError("Confirm that you have read our TOS")
    }

    //This function is for individual div error if we want individual write else and setError like email example
    if (errorMessages.length > 0){
        setError()
    }else{
        setSuccess();
    }
}
