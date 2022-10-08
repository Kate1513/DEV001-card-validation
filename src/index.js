import validator from './validator.js'

const validButton = document.getElementById('validButton')

validButton.addEventListener('click', function () {
  const inputNumber = document.getElementById('number').value
  if (inputNumber === '') {
    alert('Ingresa el numero de tu tarjeta de credito')
  } else {
    validator.isValid(inputNumber)
    validator.maskify(inputNumber.toString())
  }
})

console.log(validator)

// let validButton = document.getElementById('validButton');

// validButton.addEventListener('click', validator.isValid);
// || inputNumber < 16
