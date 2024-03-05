const nameinput = document.querySelector("#name-input input")
const phoneinput = document.querySelector("#phone-input input")
const emailinput = document.querySelector("#email-input input")
const messageinput = document.querySelector("#message-input textarea")
const showValidation = document.querySelector(".validation");
const showValidationNo = document.querySelector(".validationNo");
const validationemail = document.querySelector(".validationemail");
const validationmessage = document.querySelector(".validationmessage");


function validateName() {
    const fullNameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/
    if (nameinput.value === "") {
        showValidation.innerText = "Name is Required"
        return false
    } else if (!nameinput.value.match(fullNameRegex)) {
        showValidation.innerText = "Full Name Required"
        return false
    } else {
        showValidation.innerHTML = `<i class="fa-solid fa-circle-check"></i>`
        return true
    }
}

function validateNumber() {
    const phoneNumberRegex = /^\d{10}$/

    if (phoneinput.value === "") {
        showValidationNo.innerText = "No. is Required"
        return false
    } else if (!phoneinput.value.match(phoneNumberRegex)) {
        showValidationNo.innerText = "Invalid Number"
        return false
    } else {
        showValidationNo.innerHTML = `<i class="fa-solid fa-circle-check"></i>`
        return true
    }
}

function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailinput.value === "") {
        validationemail.innerText = "Email is Required"
        return false
    } else if (!emailinput.value.match(emailRegex)) {
        validationemail.innerText = "Invalid Email"
        return false
    } else {
        validationemail.innerHTML = `<i class="fa-solid fa-circle-check"></i>`
    }
}

function validateMessage() {
    const minWords = 30;


    if (messageinput.value === "") {
        validationmessage.innerText = "Message is Required";
        return false;
    } else if (messageinput.value.length < minWords) {
        validationmessage.innerText = minWords - messageinput.value.length + " words required";
        return false;
    } else {
        validationmessage.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        return true;
    }
}




function validateForm() {
    const submitError = document.querySelector(".submit-error")
    if (!validateName() || !validateNumber() || !validateEmail() || !validateMessage()) {
        submitError.innerText = "Please fix error before next"
        return false
    }
}


