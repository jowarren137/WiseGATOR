const tutorApplicationForm = document.getElementById('tutor-application')
const firstname = document.getElementById("firstname")
const lastname = document.getElementById("lastname")
const topic = document.getElementById("topic")
const description = document.getElementById("description")
const video = document.getElementById("video")
const photo = document.getElementById("photo")
const cv = document.getElementById("cv")
const errorMessages = []

// This is the current login-form.js which handles the login form functionality
// This is set up for displaying errs in single div, check register-form.js for commented per element display idea

tutorApplicationForm.addEventListener('submit', function(e) {
    e.preventDefault()
    errorMessages.length = 0
    validateInputs()
});

const validateFileFormat = (fileInput, allowedFormats) => {
    const file = fileInput.files[0];
    if(!file){
        return false;
    }
    return allowedFormats.includes(file.type)
}

const addError = (message) => {
    errorMessages.push(message)
}

const setError = () => {
    document.getElementById('error').innerText = 'Error: ' + errorMessages.join(', ')
}

const setSuccess = () => {
    document.getElementById('error').innerText = 'Success:' 
}

const validateInputs = () => {
    const firstnameValue = firstname.value.trim()
    const lastnameValue = lastname.value.trim()
    const descriptionValue = description.value.trim()
    const topicValue = topic.options[topic.selectedIndex].value

    document.getElementById('error').innerText = ""
    errorMessages.length = 0

    if(firstnameValue == "" || firstnameValue == null){
        addError("Firstname is required")
    }
    
    if (lastnameValue == "" || lastnameValue == null) {
        addError("Last Name is required");
    }

    if (topicValue == "" || topicValue == null) {
        addError("Selecting one Topic is required");
    }

    if (descriptionValue == "" || descriptionValue == null) {
        addError("Description is required");
    }else if(descriptionValue.length < 10){
        addError("The minimum description length is 10 charaters")
    }else if(descriptionValue.length > 200){
        addError("The maximum description length is 200 characters")
    }

    if (validateFileFormat(video, ["video/mp4", "video/x-m4v"])) {
        addError("HEY! Dont mess with our html! Make sure the video format is MP4 or M4V");
    }

    if (validateFileFormat(photo, ["image/jpeg", "image/png", "image/gif"])) {
        addError("HEY! Dont mess with our html! Make sure the photo you add is a jpeg, png, or gif");
    }

    if (validateFileFormat(cv, ["application/pdf"])) {
        addError("HEY! Dont mess with our html! make sure the cv you are adding is a pdf");
    }

    if (errorMessages.length > 0){
        setError()
    }else{
        setSuccess();
    }
}