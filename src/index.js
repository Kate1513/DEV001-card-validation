import validator from './validator.js'

const validButton = document.getElementById('validButton')

validButton.addEventListener('click', function () {
  const inputNumber = document.getElementById('number').value
  if (inputNumber === '') {
    alert('Ingresa el numero de tu tarjeta de credito')
  } else if (validator.isValid(inputNumber)) {
    const maskifyNumber = validator.maskify(inputNumber)
    document.getElementById('validCard').innerText = maskifyNumber
    const franchiseCard = validator.franchise(inputNumber)
    const image = document.getElementById('franchise')
    switch (franchiseCard) {
      case 'MasterCard':
        image.src = 'images/mastercard-2.svg'
        break
      case 'Visa':
        image.src = 'images/visa_icon.svg'
        break
    }
    document.getElementById('franchise').innerText = franchiseCard
    document.getElementById('number').setAttribute('style', 'border-color: green;')
  } else {
    document.getElementById('number').setAttribute('style', 'border-color: red;')
  }
})

console.log(validator)

// let validButton = document.getElementById('validButton');

// validButton.addEventListener('click', validator.isValid);
// || inputNumber < 16
