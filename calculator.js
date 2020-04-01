// CALCULATOR //

const myCalculator = function(input) {
  let num1 = input.num1;
  let num2 = input.num2;
  let operation = input.operation;

  if (isNaN(num1) || isNaN(num2) || num1 === '' || num2 === '') {
    if (isNaN(num1)) {
      console.log(`Error: '${num1}' is not a number!`);
    } else if (isNaN(num2)) {
      console.log(`Error: '${num2}' is not a number!`);
    } else if (num1 === '') {
      console.log(`Error: The first number is empty!`);
    } else if (num2 === '') {
      console.log(`Error: The second number is empty!`);
    };
  } else {
    switch(operation) {
      case 'add':
      case '+':
        console.log(`${num1} + ${num2} = ${num1+num2}`);
        break;
      case 'subtract':
      case '-':
        console.log(`${num1} - ${num2} = ${num1-num2}`);
        break;
      case 'multiply':
      case '*':
        console.log(`${num1} * ${num2} = ${num1*num2}`);
        break;
      case 'divide':
      case '/':
        if (num2 === 0) {
          console.log('Error: cannot divide by zero!');
        } else {
          console.log(`${num1} / ${num2} = ${num1/num2}`);
        };
        break;
        case '':
        console.log(`Error: The operation is empty!`);
        break;
      default:
        console.log(`Error: '${operation}' is not a valid operation!`);
    };
  };
};

// EXAMPLE USER INPUTS //

// Valid Inputs

const exampleAdditionInput1 = {
  num1: 3,
  num2: 5,
  operation: 'add',
};

const exampleAdditionInput2 = {
  num1: 100,
  num2: 50,
  operation: '+',
};

const exampleSubtractionInput1 = {
  num1: 3,
  num2: 5,
  operation: 'subtract',
};

const exampleSubtractionInput2 = {
  num1: 100,
  num2: 50,
  operation: '-',
};

const exampleMultiplicationInput1 = {
  num1: 3,
  num2: 5,
  operation: 'multiply',
};

const exampleMultiplicationInput2 = {
  num1: 100,
  num2: 50,
  operation: '*',
};

const exampleDivisionInput1 = {
  num1: 3,
  num2: 5,
  operation: 'divide',
};

const exampleDivisionInput2 = {
  num1: 100,
  num2: 50,
  operation: '/',
};

// Invalid Inputs

const divideByZero = {
  num1: 1,
  num2: 0,
  operation: 'divide',
};

const additionNil = {
  num1: '',
  num2: '',
  operation: 'add',
};

const additionWords = {
  num1: 'hotdog',
  num2: 'elephant',
  operation: 'add',
};

const additionNilOperator = {
  num1: 3,
  num2: 5,
  operation: '',
};

const additionBadOperator = {
  num1: 3,
  num2: 5,
  operation: 'hotdog',
};

// EXAMPLE OUTPUTS //

const validInputs = [exampleAdditionInput1, exampleAdditionInput2, exampleSubtractionInput1, exampleSubtractionInput2, exampleMultiplicationInput1, exampleMultiplicationInput2, exampleDivisionInput1, exampleDivisionInput2];

const badInputs = [divideByZero, additionNil, additionWords, additionNilOperator, additionBadOperator];

const exampleOutputs = function(arr) {
  for (let i in arr) {
    console.log(myCalculator(arr[i]))
  };
};

console.log(exampleOutputs(validInputs));
console.log(exampleOutputs(badInputs));