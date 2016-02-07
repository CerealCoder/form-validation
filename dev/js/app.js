import * as form from './lib/form'


form.userCardInput.addEventListener('blur', form.insertSpacesBetweenDigits, false)

form.userCardInput.addEventListener('keydown', function(event) {

    form.blockNonDigits(event)

}, false)

form.cvcInput.addEventListener('keydown', function(event) {

    form.blockNonDigits(event)

}, false)

form.nameInput.addEventListener('keypress', function(event) {
    form.validateName(event);
})

form.submitBtn.addEventListener('click', form.validateForm, false)

form.overlaySuccess.addEventListener('click', form.hideSuccessMessage, false)
