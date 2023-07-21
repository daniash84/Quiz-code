var question = document.querySelector("#question");
var choices = Array.from(document.querySelectorAll(".choice-text"));
var progressText = document.querySelector("#progressText");
var scoreText = document.querySelector("#score");
var timer = document.querySelector("#timer");
var startButton = document.querySelector("#start-btn");
var initials = document.querySelector("#initials");
var highScores = document.querySelector("#high-scores");
var highScoresList = document.querySelector("#high-scores-list");

var currentQuestion = {};
var acceptingAnswers = true;
var availableQuestions = [];
var timerInterval;

startButton.addEventListener("click", startQuiz);
quizcontainer.classList.add("activeQuiz");
showQuestions(0);
questionCounter = 1;
startTimer(60);
startTimer(0);

var timeLeft = 60;
var que_count = 0;
var que_numb = 1;
var userScore = 0;

var next_btn.addEventListener("click", nextQuestion);



var questions = [ {
    numb: 1,
    question: "What does Var mean?",
    choice1: "Variable", isCorrect: true,
    choice2: "Variance", isCorrect: false,
    choice3: "Variance", isCorrect: false,
    choice4: "Variance", isCorrect: false
},

{ 
    numb: 2,
    question: "How to create a function in JavaScript?",
    choice1: "function = myFunction()", isCorrect: false,
    choice2: "function:myFunction()", isCorrect: false, 
    choice3: "function myFunction()", isCorrect: true,
    choice4: "function.myFunction()", isCorrect: false

},
{ 
    numb: 3,
    question: "How do you call a function named myFunction?",
    choice1: "call myFunction()", isCorrect: false,
    choice2: "myFunction()", isCorrect: true,
    choice3: "call function myFunction()", isCorrect: false,
    choice4: "call.myFunction()", isCorrect: false
},
{
    numb: 4,
    question: "How do you write an IF statement in JavaScript?",
    choice1: "if i = 5", isCorrect: false,
    choice2: "if i == 5 then", isCorrect: false,
    choice3: "if i = 5 then", isCorrect: false,
    choice4: "if (i == 5)", isCorrect: true
},

]