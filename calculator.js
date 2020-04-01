const prompt = require('prompt');

const myCalculator = function(userInput) {
  const num1 = Number(userInput.num1); // converts string to number
  const num2 = Number(userInput.num2);
  const operation = userInput.operation.toLowerCase(); // converts operation to lowercase

  switch(operation) { 
    case 'add':
    case '+':
      return `${num1} + ${num2} = ${num1+num2}`;
    case 'subtract':
    case '-':
      return `${num1} - ${num2} = ${num1-num2}`;
    case 'multiply':
    case '*':
      return `${num1} * ${num2} = ${num1*num2}`;
    case 'divide':
    case '/':
      if (num2 === 0) {
        return 'Error: cannot divide by zero!';
      } else {
        return `${num1} / ${num2} = ${num1/num2}`;
      };
    case 'modulo':
    case '%':
      if (num2 === 0) {
        return 'Error: cannot divide by zero!';
      } else {
        return `${num1} % ${num2} = ${num1%num2}`;
      };
    case '':
      return `Error: the operation is empty!`;
    default:
      return `Error: '${operation}' is not a valid operation!`;
  };
};

const handleBadNumbers = function(num1, num2) {
  if (isNaN(num1)) {
    return `Error: '${num1}' is not a number!`;
  } else if (isNaN(num2)) {
    return `Error: '${num2}' is not a number!`;
  } else if (num1 === '') {
    return `Error: the first number is empty!`;
  } else if (num2 === '') {
    return `Error: the second number is empty!`;
  };
};

const calculateUserInput = function(error, promptInput) {
  const num1 = promptInput.num1;
  const num2 = promptInput.num2;

  if (isNaN(num1) || isNaN(num2) || num1 === '' || num2 === '') {
    handleBadNumbers(num1, num2);
  } else {
    console.log(myCalculator(promptInput));
  };

  // Questions to ask and answer:
  // What is promptInput? A variable that got passed in by the prompt.
  // What data type? What does it hold? What does it represent? It holds an object with three key-value pairs, the values of which are all strings, representing the user input.
  // How do we read values from it? What syntax? We can use either bracket notation or dot notation to read values from it. For example: `promptInput['num1']` or `promptInput.operation`.
  // How can we use it? We can pass it into the `myCalculator` function and read its values. 
  // Can we call our existing functions now, inside of this function? Yes! This is really exciting!!
}  

prompt.start();

prompt.get(['num1','num2','operation'], calculateUserInput);
