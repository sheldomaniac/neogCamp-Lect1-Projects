var readLineSync = require('readline-sync');

console.log("Question 09\n");
var userName = readLineSync.question("What is your name?: ");

for(var i = 1; i <= 5; i++){
  console.log(userName);
}

console.log("Question 09 - Bonus 1\n");

for(var i = 1; i <= 5; i++){
  console.log(userName," ",i);
}

console.log("Question 09 - Bonus 2\n");
var userNumber1 = readLineSync.question("Enter a number?: ");

for(var i = 1; i <= userNumber1; i++){
  for(var j = 1; j <= i; j++){
    process.stdout.write("* ");
  }
  console.log();
}

console.log("Question 09 - Bonus 3\n");

for(var i = userNumber1; i >= 1; i--){
  for(var j = i; j >= 1; j--){
    process.stdout.write("* ");
  }
  console.log();
}