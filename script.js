// add
function add(num1,num2) {
  if (num1.includes('.') || num2.includes('.')) {
    return parseFloat(num1) + parseFloat(num2)
  } else {
  return parseInt(num1) + parseInt(num2)
  }
};

// subtract
function subtract(num1,num2) {
  if (num1.includes('.') || num2.includes('.')) {
    return parseFloat(num1) - parseFloat(num2)
  } else {
  return parseInt(num1) - parseInt(num2)
  }
};

// multiply
function multiply(num1,num2) {
  if (num1.includes('.') || num2.includes('.')) {
    return parseFloat(num1) * parseFloat(num2)
  } else {
  return parseInt(num1) * parseInt(num2)
  }
};

// divide
function divide(num1,num2) {
  if (num1.includes('.') || num2.includes('.')) {
    return parseFloat(num1) / parseFloat(num2)
  } else {
  return parseInt(num1) / parseInt(num2)
  }
};

/* // operator */
/* function operate(operator, num1, num2) { */
/*   if (operator == '+') { */
/*    return add(num1, num2); */
/*   } else if (operator == '-') { */
/*     return subtract(num1, num2); */
/*   } else if (operator == '*') { */
/*     return multiply(num1, num2); */
/*   } else { */
/*     return divide(num1, num2); */
/*   }; */
/* }; */

let operator = ''
const operandButtons = document.querySelectorAll(".operand");
const result = document.getElementById("result");
const clearButton = document.getElementById("ac");
const dotButton = document.getElementById("dot");
const percentageButton = document.getElementById("percentage");
const posnegButton = document.getElementById("posneg");
const equalButton = document.getElementById("equal");
const numbersContainer = document.getElementById("numbers");
let numPrinter = ''
let firstNumber = ''

function makeNumbers() {
  numbers.style.gridTemplateColumns = `repeat(4, 65px)`
  numbers.style.gridTemplateRows = `repeat(5, 65px)`
  for (i = 9; i > -1; i--) {
    const cell = document.createElement("button");
    numbersContainer.appendChild(cell).className = `number_${i}`;
    cell.textContent = `${i}`
    cell.addEventListener('click', () => {
      if (numLock == false) {
      numPrinter += ''+cell.textContent
      console.log(numPrinter);
      result.textContent = `${numPrinter}`
      } else {
        return
      }
    })
  };
};

posnegButton.addEventListener('click', () => {
  if (numPrinter != '') {
  numPrinter = '-' + numPrinter;
  console.log(numPrinter);
  result.textContent = `${numPrinter}`
    firstNumber = res
  } else {
  res = '-' + res;
  console.log(res);
  result.textContent = `${res}`
    firstNumber = res
  }
})

percentageButton.addEventListener('click', () => {
  if (numPrinter != '') {
    console.log(divide(numPrinter, '100'));
    res = divide(numPrinter, '100')
    result.textContent = `${res}`
    numPrinter = ''
    firstNumber = res
  } else {
    console.log(divide(res.toString(), '100'));
    res = divide(res.toString(), '100')
    result.textContent = `${res}`
  }
})

dotButton.addEventListener('click', () => {
  numPrinter += '.'
  result.textContent = `${numPrinter}`
})

clearButton.addEventListener('click', () => {
  if (numPrinter == '') {
  firstNumber = ''
  res = ''
  result.textContent = 0
  numLock = false
  } else {
    numPrinter = ''
    result.textContent = 0
  }
})

let res 
let numLock = false

operandButtons.forEach(operand => {
  operand.addEventListener('click', () => {

  firstNumber += numPrinter

  numPrinter = ''
  if (operand.innerText == '+') {
    operator = '+'
      numLock = false
  } else if (operand.innerText == '-') {
    operator = '-'
      numLock = false
  } else if (operand.innerText == 'x') {
    operator = 'x'
      numLock = false
  } else if (operand.innerText == '/') {
      operator = '/'
      numLock = false
    }
  })
});


equalButton.addEventListener('click', () => {
  if (firstNumber != '' && numPrinter != '') {
  if (operator == '+') {
   console.log(add(firstNumber, numPrinter));
    res = add(firstNumber, numPrinter)
    result.textContent = `${res}`
  } else if (operator == '-') {
    console.log(subtract(firstNumber, numPrinter));
    res = subtract(firstNumber, numPrinter)
    result.textContent = `${res}`
  } else if (operator == 'x') {
    console.log(multiply(firstNumber, numPrinter));
    res = multiply(firstNumber, numPrinter)
    result.textContent = `${res}`
  } else if (operator == '/') {
    console.log(divide(firstNumber, numPrinter));
    res = divide(firstNumber, numPrinter)
    result.textContent = `${res}`
  }
    numPrinter = ''
    firstNumber = res
    numLock = true;
  } else {
    return
  }
})

makeNumbers();
