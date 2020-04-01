// EXAMPLE USER INPUTS //

// Valid Inputs

const exampleAdditionInput1 = {
  num1: 3,
  num2: 5,
  operation: 'add',
}

const exampleAdditionInput2 = {
  num1: 100,
  num2: 50,
  operation: '+',
}

const exampleSubtractionInput1 = {
  num1: 3,
  num2: 5,
  operation: 'subtract',
}

const exampleSubtractionInput2 = {
  num1: 100,
  num2: 50,
  operation: '-',
}

const exampleMultiplicationInput1 = {
  num1: 3,
  num2: 5,
  operation: 'multiply',
}

const exampleMultiplicationInput2 = {
  num1: 100,
  num2: 50,
  operation: '*',
}

const exampleDivisionInput1 = {
  num1: 3,
  num2: 5,
  operation: 'divide',
}

const exampleDivisionInput2 = {
  num1: 100,
  num2: 50,
  operation: '/',
}

// Invalid Inputs

const divideByZero = {
  num1: 1,
  num2: 0,
  operation: 'divide',
}

const additionNil = {
  num1: '',
  num2: '',
  operation: 'add',
}

const additionWords = {
  num1: 'hotdog',
  num2: 'elephant',
  operation: 'add',
}

const additionNilOperator = {
  num1: 3,
  num2: 5,
  operation: '',
}

const additionBadOperator = {
  num1: 3,
  num2: 5,
  operation: 'hotdog',
}
