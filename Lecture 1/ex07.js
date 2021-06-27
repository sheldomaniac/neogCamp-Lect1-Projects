
var readLineSync = require('readline-sync')

function addNumbers(firstNumber, secondNumber){
  return firstNumber + secondNumber;
}

var firstNumber = parseInt(readLineSync.question("Enter First Number: "),10);
var secondNumber = parseInt(readLineSync.question("Enter Second Number: "),10)

var actualAnswer = addNumbers(firstNumber,secondNumber);