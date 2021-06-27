//===%%%% ex4 %%% ===

var readLineSync = require('readline-sync');

//var userAgeAnswer = readLineSync.question("Are you older than 30?\n");

answers = ["Yes","No"];
var userAgeAnswer = readLineSync.keyInSelect(answers,"Are you older than 25?\n");
if(answers[userAgeAnswer] === "Yes"){
  console.log("You are right! ");
}else{
  console.log("You are wrong! ");
}
