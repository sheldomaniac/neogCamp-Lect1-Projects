//===%%%% ex6 %%% ===

var readLineSync = require('readline-sync')

var score = 0;
var userAnswer = readLineSync.question("Are you from Milan? \n");
if(userAnswer === "Yes"){
  console.log("You are right");
  score++;
  console.log("Your score is " + score + " !");
}else{
  console.log("You are wrong");
  score--;
  console.log("Your score is " + score + " !");
}

//===%%%% ex6 %%% ===