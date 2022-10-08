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
    console.log(step1)

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
    console.log(step2)

    // Paso 3 del algoritmo Luhn
    let totalSum = 0
    for (let element = 0; element < step2.length; element++) {
      totalSum += step2[element]
    }
    step3 = totalSum.toString()
    console.log(step3)

    // Paso 4 del algoritmo Luhn
    if (step3.slice(-1) === '0') {
      // alert('Tarjeta valida')
      return true
    } else {
      // alert('Tarjeta invalida')
      return false
    }
  },

  maskify: function (inputNumber) {
    return inputNumber.replace(/.(?=.{4})/g, '#')
  }
  // ...
}

export default validator
