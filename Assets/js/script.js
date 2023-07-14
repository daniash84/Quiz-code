var question = document.querySelector("#question");
var choices = Array.from(document.querySelectorAll(".choice-text"));
var progressText = document.querySelector("#progressText");
var scoreText = document.querySelector("#score");
var progressBarFull = document.querySelector("#progressBarFull");
var timer = document.querySelector("#timer");
var startButton = document.querySelector("#start-btn");
var submitButton = document.querySelector("#submit-btn");
var initials = document.querySelector("#initials");
var highScores = document.querySelector("#high-scores");
var highScoresList = document.querySelector("#high-scores-list");

var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];
var timeLeft = 60;
var timerInterval;

var questions = [ {
    question: "What does Var mean?",
    choice1: "Variable", isCorrect: true,
    choice2: "Variance", isCorrect: false,
    choice3: "Variance", isCorrect: false,
    choice4: "Variance", isCorrect: false
},

{ 
    question: "How to create a function in JavaScript?",
    choice1: "function = myFunction()", isCorrect: false,
    choice2: "function:myFunction()", isCorrect: false, 
    choice3: "function myFunction()", isCorrect: true,
    choice4: "function.myFunction()", isCorrect: false

},
{ 
    question: "How do you call a function named myFunction?",
    choice1: "call myFunction()", isCorrect: false,
    choice2: "myFunction()", isCorrect: true,
    choice3: "call function myFunction()", isCorrect: false,
    choice4: "call.myFunction()", isCorrect: false
},
{
question: "How do you write an IF statement in JavaScript?",
choice1: "if i = 5", isCorrect: false,
choice2: "if i == 5 then", isCorrect: false,
choice3: "if i = 5 then", isCorrect: false,
choice4: "if (i == 5)", isCorrect: true
},

]