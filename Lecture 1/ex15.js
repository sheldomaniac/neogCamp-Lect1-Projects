var readLineSync = require('readline-sync');

var currentHighestScore = {
  username: "Sheldon", currHighScore:3
};


var question1 = {
  question: "Who is your hero? ", answer: "deathstroke"
};

var question2 = {
  question: "If you could live anywhere, where would it be? ", answer: "france"
};

var question3 = {
  question: "What is your biggest fear? ", answer: "spiders"
};

var question4 = {
  question: "What is your favorite family vacation? ", answer: "mumbai"
};

var question5 = {
  question: "What would you change about yourself if you could? ", answer: "muscle"
};

var questions = [question1, question2,question3,question4,question5];

var score = 0;
for(var i = 0, n = questions.length; i < n; i++){
  var userAnswer = readLineSync.question(questions[i].question);
  if(userAnswer.toLowerCase() === questions[i].answer)score++;
  
}

console.log("Your score is ",score);

if(score > currentHighestScore.currHighScore){
  currentHighestScore.username = readLineSync.question("You have the current highest score. Please enter your name: ");
  currentHighestScore.currHighScore = score;
}