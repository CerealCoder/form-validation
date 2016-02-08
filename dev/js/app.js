import * as form from './lib/form'
import {aboutBtn, toggleAboutSection} from './lib/animations'


form.userCardInput.addEventListener('blur', form.insertSpacesBetweenDigits, false)

form.userCardInput.addEventListener('keydown', function(event) {

    form.blockNonDigits(event)

}, false)

form.cvcInput.addEventListener('keydown', function(event) {

    form.blockNonDigits(event)

}, false)

form.nameInput.addEventListener('keydown', function(event) {
    form.validateName(event);
})

form.submitBtn.addEventListener('click', form.validateForm, false)

form.overlaySuccess.addEventListener('click', form.hideSuccessMessage, false)

aboutBtn.addEventListener("click", toggleAboutSection, false)
