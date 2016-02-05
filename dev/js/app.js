let userCardInput = document.getElementById('cardNumber')
let cvcInput = document.getElementById('cvc')
let nameInput = document.getElementById('cardName')
let emailInput = document.getElementById('email')
let submitBtn = document.querySelector('.payment-form__submit')

let digitKeyCodes = [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 37, 39, 8]
let pattern = /(\d{4})/g
let whitespaces = /\s/g



let validateEmail = function() {


    let pattern = /([a-zA-Z0-9\-\.])+@([a-zA-Z0-9\-\.])+([a-zA-Z.])+$/g

    if (emailInput.value.match(pattern)) {
        console.log("valid email");
    } else {
        alert("yoooo check the email bro")
    }

}

let validateName = function(event) {
    let pattern = /[a-zA-Z'\s -]/g
    let keyPressed = event.keyCode
    keyPressed = String.fromCharCode(keyPressed)
    if (!keyPressed.match(pattern)) {
        event.preventDefault()
    }
}

let blockNonDigits = function(event) {

    if (digitKeyCodes.indexOf(event.keyCode) === -1) {
        console.log("not in the array");
        event.preventDefault()
    }

}


userCardInput.addEventListener('blur', function() {

    if (!this.value.match(whitespaces)) {
        this.value = this.value.replace(pattern, "$1 ").trim()
    }

}, false)
userCardInput.addEventListener('keydown', function(event) {

    blockNonDigits(event)

}, false)
cvcInput.addEventListener('keydown', function(event) {

    blockNonDigits(event)

}, false)
nameInput.addEventListener('keypress', function(event) {
    validateName(event);
})
submitBtn.addEventListener('click', validateEmail, false)
