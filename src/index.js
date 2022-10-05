import validator from './validator.js';


let validButton = document.getElementById('validButton');

validButton.addEventListener('click', validator.isValid);


console.log(validator);
