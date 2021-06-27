var readLineSync = require('readline-sync');

var question1 = {
  question: "Who is your hero?", answer: "Deathstroke"
};

var question2 = {
  question: "If you could live anywhere, where would it be?", answer: "France"
};

var question3 = {
  question: "What is your biggest fear?", answer: "Spiders"
};

var question4 = {
  question: "What is your favorite family vacation?", answer: "Mumbai"
};

var question5 = {
  question: "What would you change about yourself if you could?", answer: "Deathstroke"
};

var questions = [question1, question2,question3,question4,question5,question6];

for(var i = 0, n = questions.length; i < n; i++){
  var userAnswer = readLineSync.question(questions[i].question);
  
}