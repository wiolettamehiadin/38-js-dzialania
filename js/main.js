function add(num1, num2) {
    let result = num1 + num2;
    console.log('Wynik dodawania to:', result); 
    if (result < 0) {
        console.log('Wynik nie jest prawidlowy');
      }  return result;
}



function subtract(num1, num2) {
    let result = num1 - num2;
    console.log('Wynik odejmowania to:', result); 
    if (result < 0) {
        console.log('Wynik nie jest prawidlowy');
      }  return result;
}


function multiply(num1, num2) {
    let result = num1 * num2;
    console.log('Wynik mnozenia to:', result);
    if (result < 0) {
        console.log('Wynik nie jest prawidlowy');
      }  return result;
}

console.log(add(-5,-1));
console.log(subtract(0,2));
console.log(multiply(0,2));

