const contactForm = document.querySelector('#contactForm');
const nameErrorMsg = document.querySelector('#name-error-msg');
const nameErrorSvg = document.querySelector('#name-error-svg');
const nameInput = document.querySelector('#name');
const messageErrorMsg = document.querySelector('#message-error-msg');
const messageErrorSvg = document.querySelector('#message-error-svg');
const messageInput = document.querySelector('#message');
const emailErrorMsg = document.querySelector('#email-error-msg');
const emailErrorSvg = document.querySelector('#email-error-svg');
const emailInput = document.querySelector('#email');
const emailPattern = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

function errorHandler(fieldErrorMsg, fieldErrorSvg, fieldInput, valid = false){
    if (!valid){
        fieldErrorMsg.style.display = 'block';
        fieldErrorMsg.classList.add('error-msg');
        fieldErrorSvg.style.display = 'block';
        fieldInput.classList.add('input-error')
    } else {
        fieldErrorMsg.style.display = 'none';
        fieldErrorMsg.classList.remove('error-msg');
        fieldErrorSvg.style.display = 'none';
        fieldInput.classList.remove('input-error');
        fieldInput.classList.add('valid-input');
    }
}
function clearForm(){
    nameInput.classList.remove('valid-input');
    emailInput.classList.remove('valid-input');
    messageInput.classList.remove('valid-input');
    contactForm.reset();
}

contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    if(data.name.length == 0){
        errorHandler(nameErrorMsg,nameErrorSvg,nameInput)

    }else{
        errorHandler(nameErrorMsg,nameErrorSvg,nameInput, true)

    }
    if(data.email.length == 0 || !emailPattern.test(data.email)){
        errorHandler(emailErrorMsg,emailErrorSvg,emailInput)

    }
    else{
        errorHandler(emailErrorMsg,emailErrorSvg,emailInput, true)

    }
    if(data.message.length == 0){
        errorHandler(messageErrorMsg,messageErrorSvg,messageInput)

    }
    else{
        errorHandler(messageErrorMsg,messageErrorSvg,messageInput, true)

    }
    if(data.name.length != 0 && data.email.length != 0 && data.message.length != 0 && emailPattern.test(data.email)){
        clearForm()
    }
})