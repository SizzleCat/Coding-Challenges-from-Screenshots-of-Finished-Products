const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');
const btn = document.querySelector('button');
const email = document.querySelector('#email');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  inputs.forEach(checkIfEmpty);
  function checkIfEmpty(input) {
    if (input.value === '') {
      const errorDiv = document.getElementById(`${input.id}-error`);
      errorDiv.innerText=`${input.placeholder} cannot be empty`;
      input.style.background="url(images/icon-error.svg) no-repeat 97% 50%";
    }
  }

// \w  ->  a-z A-Z _ 0-9
// \w+ any combination of 1 or more of above 
// [-+.']  means any of those characters once
// [-+.']\w+  means any of those characters followed by a word character or more
// *  zero or more
// abc-def-gef'azxf   is okay with \w+([-+.']\w+)*

  if (email.value) {
    const regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if (!regexEmail.test(email.value)) {
      email.style.background="url(images/icon-error.svg) no-repeat 97% 50%";
      const emailErrorDiv = document.getElementById(`email-error`);
      emailErrorDiv.innerText='Looks like this is not an email';
    }
  }
})

inputs.forEach(removeError);
function removeError(input) {
  input.addEventListener('focus', function () {
    input.style.background = '';
    const errorDiv = document.getElementById(`${input.id}-error`);
      errorDiv.innerText= '';
  })
}




