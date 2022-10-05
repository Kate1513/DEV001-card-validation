const validator = {

  isValid: function () {
    const inputNumber = document.getElementById('number').value;

    if (inputNumber === '' || inputNumber.length < 16) {
      alert('Ingresa el numero de tu tarjeta de credito')
    } 
    else {
      const cardNumber = Array.from(inputNumber);
      let step1 = [];
      let step2 = [];
      let step3 = '';

      // Paso 1 del algoritmo Luhn
      for (let digit = 0; digit < cardNumber.length; digit += 2) {
        let mult = cardNumber[digit] * 2;
        step1.push(mult);
      }

      for (let digit = 1; digit <= cardNumber.length; digit += 2) {
        let numberString = parseInt(cardNumber[digit]);
        step1.push(numberString);
      }
console.log(step1);

      // Paso 2 del algoritmo Luhn
      for (let element = 0; element < step1.length; element++) {

        if (step1[element] <= 9) {
          step2.push(step1[element]);
        }
          else {
            let convToString = step1[element].toString();
            let arr = Array.from(convToString);

            let sum = parseInt(arr[0]) + parseInt(arr[1]);
            step2.push(sum);
          }
      }
console.log(step2);

      // Paso 3 del algoritmo Luhn
      let totalSum = 0;
      for (let element = 0; element < step2.length; element++) {
        totalSum += step2[element];    
      }
      step3 = totalSum.toString(); 

console.log(step3);

      // Paso 4 del algoritmo Luhn
      if (step3.slice(-1) === '0') {
        alert('Tarjeta valida');
        return true;
      }
      else{
        alert('Tarjeta invalida');
        return false;
      }
    }
  },

  maskify: function () {

  }
  // ...
};

export default validator;

// valid: function () {
//   if (document.getElementById('validar').value === '') {
//     alert('Ingresa el numero de tu tarjeta de credito')
//   } else {
//     isValid ();
//   }
// }

// validar.addEventListener('click', () =>{
//   if (document.getElementById('validar').value === '') {
//     alert('Ingresa el numero de tu tarjeta de credito')
//   } else {
//     isValid ();
//   }

// });



// GYM 29/09/2022
// let numberList = [1,-4,7,12]
// let numberLists = [1,-4,7,12,-5,18]
// let total = 0;

// function sum(numbers){
//   for (let i = 0; i < numbers.length; i++) {
  
//     if (numbers[i] >= 1){
//       total += numbers[i];
//     }
//   }
//   return total;
// }

// sum(numberLists);
// console.log(total);
