//===%%%% ex7 %%% ===

var readLineSync = require('readline-sync')

function addNumbers(firstNumber, secondNumber){
  return firstNumber + secondNumber;
}

var firstNumber = parseInt(readLineSync.question("Enter First Number: "),10);
var secondNumber = parseInt(readLineSync.question("Enter Second Number: "),10);
var actualAnswer = addNumbers(firstNumber,secondNumber);
var userAnswer = parseInt(readLineSync.question("Enter your sum for " + firstNumber + " + " + secondNumber + ": "),10);

var score = 0;

if(userAnswer === actualAnswer){
  score++;
  console.log("Your answer is correct.");
  console.log("Your score is " + score);
}else{
  console.log("Your answer is wrong");
}

//===%%%% ex7 %%% ===