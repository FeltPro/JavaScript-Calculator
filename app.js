let loggedResult = 0;
let operationChoice = ['/', '*', '-', '+'];
let operationInUse = "";
let setStateOfEqual = "";

function updateDisplay(input) {
  let display = document.getElementById('display');
  let secondDisplay = document.getElementById('output')

  if (display.innerHTML === '0' && operationChoice.indexOf(input) === -1) {
    if (input === ".") {
      display.innerHTML = "0.";
    } else if (input === "minus") {
      if (display.innerHTML.indexOf("-") === -1) {
        display.innerHTML = "";
        display.innerHTML = "-" + display.innerHTML
    } else if (display.innerHTML.indexOf("-" > -1)) {
        display.innerHTML = display.innerHTML.slice(1, display.innerHTML.length);
    }
  } else if (input === "=") {
    display.innerHTML = 0;
  } else {
    display.innerHTML = input;
    }
  } else if (operationChoice.indexOf(input) >= 0) {

    if (loggedResult === display.innerHTML) {
      operandInUse = input;
    } else if (operationInUse === "") {
      /* This conditional is for before an operator is first used, hence the black string for the operationInUse.
         It means that the integer in the display will be stored for first time (so not formatting any previous results) and the display will be set back to 0*/
      operationInUse = input;
      loggedResult = display.innerHTML;
      secondDisplay.innerHTML = loggedResult;
      display.innerHTML = 0;
      operatorSignifier.innerHTML = operationInUse;

    } else {
      // this condition means that an operator has already been used. So
      loggedResult = calculate(loggedResult, display.innerHTML, operationInUse);
      secondDisplay.innerHTML = loggedResult;
      display.innerHTML = 0;
      operationInUse = input;
      operatorSignifier.innerHTML = operationInUse;

    }
  } else if (input === "=") {
      display.innerHTML = calculate(loggedResult, display.innerHTML, operationInUse);
      loggedResult = 0;
      operationInUse = "";
      secondDisplay.innerHTML = loggedResult;
      operatorSignifier.innerHTML = "";

    } else if (input === ".") {

      if (display.innerHTML.indexOf('.') === -1) {
      display.innerHTML += '.'
    }
  } else if (input === "minus") {
    // console.log("negative-value selected");
    if (display.innerHTML.indexOf("-") === -1) {
      display.innerHTML = "";
      display.innerHTML = "-" + display.innerHTML
    } else if (display.innerHTML.indexOf("-" > -1)) {
      display.innerHTML = display.innerHTML.slice(1, display.innerHTML.length);
    }
  } else {
    display.innerHTML += input;
  }
}

function clearDisplay() {
  let display = document.getElementById('display');
  display.innerHTML = display.innerHTML.slice(0, display.innerHTML.length-1);
}

function clearAllOutput() {
  let display = document.getElementById('display');
  display.innerHTML = 0;
  let output = document.getElementById('output');
  output.innerHTML = 0;
  loggedResult = 0;
  operatorSignifier.innerHTML = "";
}

function calculate(firstNum, secondNum, operation) {
let result;

firstNum = parseFloat(firstNum);
secondNum = parseFloat(secondNum);

if (operation === "+") {
  result = firstNum + secondNum;
} else if (operation === "*") {
  result = firstNum * secondNum;
} else if (operation === "/") {
  result = firstNum / secondNum;
} else if (operation === "-") {
  result = firstNum - secondNum;
}
return result.toString();
}
