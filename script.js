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
const pattern = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    if(data.name.length == 0){
        nameErrorMsg.style.display = 'block';
        nameErrorMsg.classList.add('error-msg');
        nameErrorSvg.style.display = 'block';
        nameInput.classList.add('input-error');
    }else{
        nameErrorMsg.style.display = 'none';
        nameErrorMsg.classList.remove('error-msg');
        nameErrorSvg.style.display = 'none';
        nameInput.classList.remove('input-error');
        nameInput.classList.add('valid-input');
    }
    if(data.email.length == 0 || !pattern.test(data.email)){
        emailErrorMsg.style.display = 'block';
        emailErrorMsg.classList.add('error-msg');
        emailErrorSvg.style.display = 'block';
        emailInput.classList.add('input-error');
    }
    else{
        emailErrorMsg.style.display = 'none';
        emailErrorMsg.classList.remove('error-msg');
        emailErrorSvg.style.display = 'none';
        emailInput.classList.remove('input-error');
        emailInput.classList.add('valid-input');
    }
    if(data.message.length == 0){
        messageErrorMsg.style.display = 'block';
        messageErrorMsg.classList.add('error-msg');
        messageErrorSvg.style.display = 'block';
        messageInput.classList.add('input-error');
    }
    else{
        messageErrorMsg.style.display = 'none';
        messageErrorMsg.classList.remove('error-msg');
        messageErrorSvg.style.display = 'none';
        messageInput.classList.remove('input-error');
        messageInput.classList.add('valid-input');
    }
    if(data.name.length != 0 && data.email.length != 0 && data.message.length != 0 && pattern.test(data.email)){
        nameInput.classList.remove('valid-input');
        emailInput.classList.remove('valid-input');
        messageInput.classList.remove('valid-input');
        contactForm.reset();
    }

})