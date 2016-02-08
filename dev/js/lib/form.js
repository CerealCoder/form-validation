// Exported Variables
export let userCardInput = document.getElementById('cardNumber')
export let cvcInput = document.getElementById('cvc')
export let nameInput = document.getElementById('cardName')
export let emailInput = document.getElementById('email')
export let submitBtn = document.querySelector('.payment-form__submit')
export let overlaySuccess = document.querySelector('.success-message')


// Local variables
let allInputs = Array.prototype.slice.call(document.querySelectorAll('.form-group input'))
let overlayError = document.querySelector('.error-message')
let audioLoop = document.querySelector('.audio-loop')

// Regex patterns
let digitKeyCodes = [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 37, 39, 8, 9]
let directionKeyCodes = [9, 20, 37, 39, 8]
let emailPattern = /([a-zA-Z0-9\-\.])+@([a-zA-Z0-9\-\.])+\.[a-zA-Z.]+$/g
let fourDigitPattern = /(\d{4})/g
let whitespacesPattern = /\s/g


let errorMessageShowing = false
let isFormValid = false
let errors = []


let createErrorMessage = function(errMessage) {

    let paragraph = document.createElement("p")
    paragraph.innerHTML = errMessage
    return paragraph
}

let showErrors = function() {

    overlayError.innerHTML = ""

    errors.forEach(function (errorMessage) {

        overlayError.appendChild(errorMessage) // then we append the p tag to the body of the container

    })

    overlayError.classList.add("is-showing")
    errorMessageShowing = true

}

let hideError = function() {
    overlayError.classList.remove("is-showing")
    errorMessageShowing = true
}

let showSuccessMessage = function() {
    overlaySuccess.classList.add("is-showing")
    audioLoop.play()
}

let clearForm = function() {

    allInputs.forEach(function (input) {

        input.value = ""

    })

}





export let insertSpacesBetweenDigits = function () {

    if (!userCardInput.value.match(whitespacesPattern)) {
        userCardInput.value = userCardInput.value.replace(fourDigitPattern, "$1 ").trim()
    }

}

export let hideSuccessMessage = function() {
    overlaySuccess.classList.remove("is-showing")
    audioLoop.pause()
    audioLoop.currentTime = 0
}

export let validateName = function(event) {
    let evt = event || window.event
    let pattern = /[a-zA-Z'\s -]/g
    let keyPressed = evt.keyCode

    if (directionKeyCodes.indexOf(keyPressed) === -1) {
        keyPressed = String.fromCharCode(keyPressed)
    }

    if (!keyPressed.match(pattern)) {
        evt.preventDefault()
    }
}

export let blockNonDigits = function(event) {

    if (digitKeyCodes.indexOf(event.keyCode) === -1) {
        event.preventDefault()
    }

}

export let validateForm = function() {

        // Form valid is true
        if (emailInput.value.match(emailPattern) && userCardInput.value.length === 19 && cvcInput.value.length === 3 && nameInput.value.length > 0) {

            isFormValid = true

            if (isFormValid == true && errorMessageShowing == true) {

                hideError()
                showSuccessMessage()
                clearForm()

            } else {
                showSuccessMessage()
                clearForm()
            }

        }

        // If from valid is false
        else {
            // 1- User leaves the name field empty = "Please enter your name"

            if (nameInput.value === "") {
                errors.push(createErrorMessage("Name field should not be left empty"))
            }

            // 2- User Enters an invalid email address
            if (!emailInput.value.match(emailPattern)) {
                errors.push(createErrorMessage("Rihanna is upset, please provide a valid email address"))
            }

            // 3- User Enters a card number shorter than 19 characters
            if (userCardInput.value.length != 19) {
                errors.push(createErrorMessage("Please provide a valid card number"))
                userCardInput.value = ""
                userCardInput.focus()
            }

            if (cvcInput.value.length < 3) {
                errors.push(createErrorMessage("CVC number must be 3 digits long"))
            }

            // show errors
            showErrors()
            errors = []

        }
}
