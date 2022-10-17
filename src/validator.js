const validator = {

  isValid: function (inputNumber) {
    const cardNumber = Array.from(inputNumber).reverse()
    const step1 = []
    const step2 = []
    let step3 = ''

    // Paso 1 del algoritmo Luhn
    for (let digit = 1; digit < cardNumber.length; digit += 2) {
      const mult = cardNumber[digit] * 2
      step1.push(mult)
    }

    for (let digit = 0; digit < cardNumber.length; digit += 2) {
      const numberString = parseInt(cardNumber[digit])
      step1.push(numberString)
    }

    // Paso 2 del algoritmo Luhn
    for (let element = 0; element < step1.length; element++) {
      if (step1[element] <= 9) {
        step2.push(step1[element])
      } else {
        const convToString = step1[element].toString()
        const arr = Array.from(convToString)
        const sum = parseInt(arr[0]) + parseInt(arr[1])
        step2.push(sum)
      }
    }

    // Paso 3 del algoritmo Luhn
    let totalSum = 0
    for (let element = 0; element < step2.length; element++) {
      totalSum += step2[element]
    }
    step3 = totalSum.toString()

    // Paso 4 del algoritmo Luhn
    if (step3.slice(-1) === '0') {
      return true
    } else {
      return false
    }
  },

  maskify: function (inputNumber) {
    return inputNumber.replace(/.(?=.{4})/g, '#')
  },

  franchise: function (inputNumber) {
    const isOneDigit = parseInt(inputNumber.slice(0, 1))
    const isTwoDigits = parseInt(inputNumber.slice(0, 2))
    const isThreeDigits = parseInt(inputNumber.slice(0, 3))
    const isFourDigits = parseInt(inputNumber.slice(0, 4))
    let franchise = ''

    if (isOneDigit === 4) {
      franchise = 'Visa'
      return franchise
    } else if (isOneDigit === 3 || isFourDigits === 1800 || isFourDigits === 2131) {
      franchise = 'JCB'
      return franchise
    } else if (isTwoDigits >= 51 && isTwoDigits <= 55) {
      franchise = 'MasterCard'
      return franchise
    } else if (isTwoDigits === 34 || isTwoDigits === 37) {
      franchise = 'American Express'
      return franchise
    } else if (isTwoDigits === 36) {
      franchise = "Diner's Club / International"
      return franchise
    } else if (isTwoDigits === 38) {
      franchise = "Diner's Club / Carte Blanche"
      return franchise
    } else if (isThreeDigits >= 300 && isThreeDigits <= 305) {
      franchise = "Diner's Club / Carte Blanche"
      return franchise
    } else if (isFourDigits === 2014 || isFourDigits === 2149) {
      franchise = "Diner's Club / enRoute"
      return franchise
    } else if (isFourDigits === 6011) {
      franchise = 'Discover'
      return franchise
    } else {
      franchise = 'Franquicia no reconocida'
      return franchise
    }
  }
}

export default validator
// 4856497689070899
