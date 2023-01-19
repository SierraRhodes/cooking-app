//business logic
function conversion(number1, number2, number3) {
  return (number1 / (number2 /number3)) * number4;
}

const number2 = 1;
const number3 = 16;
const number4 = 453.5962;
// 1 oz = (1/16) lb = 0.0625 (lbs) x 453.592


//user interface 
const number1 = prompt("Enter in the number: ")

window.alert("The conversion from oz to lbs to gr would be: " + conversion(number1, number2, number3));