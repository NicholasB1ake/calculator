var  number = prompt ("What calculator do you want? A for basic B for Advanced")

if (number === 'a') {
  var numberOne = prompt ("what is your number?");
  var operator = prompt ("+ - / *");
  var numberTwo = prompt ('What is your second number?')

  if (operator === "+"){
    alert (parseInt(numberOne) + parseInt(numberTwo))

  }else if (operator === "-"){
    alert (parseInt(numberOne) - parseInt(numberTwo));
  }else  if (operator === "/"){
    alert (parseInt(numberOne) / parseInt(numberTwo));
  }else if (operator === "*"){
      alert (parseInt(numberOne) * parseInt(numberTwo));
  }
// } else if (number === 'b'){
  // var  numbertwo = prompt()
}

if (number === 'b' || operator === "power" ){
  var operator = prompt ('power or Square root?');


}if (operator === 'power'){
  var numberOne = prompt ('what is your number?');
  var numberTwo = prompt ('what is your second number?');
  alert (parseInt(numberOne) ** parseInt(numberTwo));


}else if (operator === 'square root'){
  var numberOne = prompt ('what is your number?');
  alert (parseInt(numberOne) = Math.sqrt(numberOne));
}
