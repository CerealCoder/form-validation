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
let digitKeyCodes = [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 37, 39, 8, 9]
let emailPattern = /([a-zA-Z0-9\-\.])+@([a-zA-Z0-9\-\.])+([a-zA-Z.])+$/g

let errorMessageShowing = false
let fourDigitPattern = /(\d{4})/g
let whitespacesPattern = /\s/g



export let insertSpacesBetweenDigits = function () {

    if (!userCardInput.value.match(whitespacesPattern)) {
        userCardInput.value = userCardInput.value.replace(fourDigitPattern, "$1 ").trim()
    }

}

let showError = function() {
    overlayError.classList.add("is-showing")
    errorMessageShowing = true

}

let hideError = function() {
    overlayError.classList.remove("is-showing")
    errorMessageShowing = true
}

let highlightEmailInput = function() {
    emailInput.classList.add("error")
}

let toneDownEmailInput = function() {
    emailInput.classList.remove("error")
}

let showSuccessMessage = function() {


    overlaySuccess.classList.add("is-showing")

}

export let hideSuccessMessage = function() {

    overlaySuccess.classList.remove("is-showing")

}

let clearForm = function() {

    allInputs.forEach(function (input) {

        input.value = ""

    })

}

export let validateForm = function() {

    // If the user enters a valid email

    if (emailInput.value.match(emailPattern)) {

        showSuccessMessage()
        clearForm()

        if (errorMessageShowing = true) {
            hideError()
            toneDownEmailInput()
        }
    }

    // If the user fails to enter a valid email
    else {
        showError()
        highlightEmailInput()
        emailInput.focus()
    }

}

export let validateName = function(event) {
    let pattern = /[a-zA-Z'\s -]/g
    let keyPressed = event.keyCode
    keyPressed = String.fromCharCode(keyPressed)
    if (!keyPressed.match(pattern)) {
        event.preventDefault()
    }
}

export let blockNonDigits = function(event) {

    if (digitKeyCodes.indexOf(event.keyCode) === -1) {
        event.preventDefault()
    }

}
