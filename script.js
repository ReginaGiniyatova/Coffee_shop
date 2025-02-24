const burgerMenu = document.querySelector('#burger');
const navEl = document.querySelector('#nav');
const btn = document.querySelector('#submit');
const successContainer = document.querySelector('#success');
const errorContainer = document.querySelector('#error');
const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const textarea = document.querySelector('#message');

burgerMenu.addEventListener('click', (e) => {
    burgerMenu.classList.toggle('header__burger_active')
    navEl.classList.toggle('navigation__active')
})

btn.addEventListener('click', (e) => {
    e.preventDefault();
    if(inputEmail.value !== '' && inputName.value !== '' && textarea.value !== '') {
        successContainer.classList.toggle('wrapper-success_active')
        errorContainer.classList.remove('form__fields-error_active')
        inputEmail.value = ''
        inputName.value = ''
        textarea.value = ''
        setTimeout(() => {
            successContainer.classList.toggle('wrapper-success_active')
        }, 3000)
    }
    else {
        errorContainer.classList.add('form__fields-error_active')
    }
})