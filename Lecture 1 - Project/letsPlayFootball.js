var readLIneSync = require('readline-sync');

var highestUser = {username: "1234", score = "3"};

console.log("Let's play a quiz on how well do you know football. \nThe quiz has 5 questions. Answer most questions correctly to win.")
var currName = readLIneSync.question("Enter your name to continue: ");
var currScore = 0;

question1 = "What is the legal maximum number of players for a team allowed to be on the pitch at any point during the game?";
optionsQ1 = ["10", "11", "12", "22"];

question2 = "What is the maximum length of a league match in football (in minutes)?";
optionsQ2 = ["60", "75", "120", "90"];

question3 = "One of the best players ever, Cristiano Ronaldo, is from which country? ";
optionsQ3 = ["Spain", "Brazil", "Portugal", "Netherlands"];

question4 = "The first professional football club was established in which year?";
optionsQ4 = ["1859", "1862", "1870", "1890"];

question5 = "What is the name of football that was used in 2010 World Cup?";
optionsQ5 = ["Vuvuzela", "Jabulani", "NeoSport", "Curler"];

var options = [optionsQ1, optionsQ2, optionsQ3, optionsQ4, optionsQ5];
var questions = [question1, question2, question3, question4, question5];
var answers = [1, 3, 2, 1,1];

for(var i = 0, n = questions.length; i < n; i++){
    var userAnswer = readLIneSync.keyInSelect(options[i], questions[i]);
    if(userAnswer === answers[i]){
        currScore++;
    }
}

if(currScore > highestUser.score){
    highestUser.username = currName;
    highestUser.score = highestUser.score;

    console.log("Congratulations " + currName + "! You are the current highest scoreer with " + currScore + " points! ");
}else{
   console.log("Congratulations " + currName + "! You have obtained " + currScore + " points! ");
}
