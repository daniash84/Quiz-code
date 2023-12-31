var question = document.querySelector("#question");
var choices = Array.from(document.querySelectorAll(".choice-text"));
var progressText = document.querySelector("#progressText");
var scoreText = document.querySelector("#score");
var progressBarFull = document.querySelector("#progressBarFull");
var startButton = document.getElementById("start-btn");
console.log(startButton);

var time = document.querySelector(".time");

var initials = document.querySelector("#initials");
var highScores = document.querySelector("#high-scores");
var highScoresList = document.querySelector("#high-scores-list");

var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var availableQuestions = [];
var secondsLeft = 60;

var quizcontainer = document.querySelector(".quiz-container");

quizcontainer.question.add("activeQuiz");
console.log(question)
questionCounter = 1;

var que_count = 0;
var que_numb = 1;
var userScore = 0;
var score_points = 100;
var MAX_QUESTIONS = 4;

var startGame = () => {
    startTimer();
    availableQuestions = [...questions];
    getNewQuestion();
};

function startTimer () {
var timerInterval = setInterval(function(){
secondsLeft--;
time.textContent = secondsLeft + "seconds"})
if (secondsLeft <= 0) {
    clearInterval(timerInterval);
}

}

getNewQuestion = () => {
    if (availableQuestions.length === 0 || que_count >= MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", userScore);

        return window.location.assign("/end.html");
    }

    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;

    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    var questionIndex = Math.floor(Math.random() * availableQuestions.length);

    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {    
        var number = choice.dataset["number"];
        choice.innerText = currentQuestion['choice' + number]; });


    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;

};

    


choices.forEach(choice => { 
choice.addEventListener("click", e => {
    if (!acceptingAnswers)
        return;
    
        acceptingAnswers = false;
        var selectedChoice = e.target;
        var selectedAnswer = selectedChoice.dataset["number"];

        let classToApply = selectedAnswer == currentQuestion.answer ? "correct": "incorrect";

        if (classToApply === "correct") {
            incrementScore(score_points);
        }
selectedChoice.parentElement.classList.add(classToApply);

setTimeout(() => {
    selectedChoice.parentElement.classList.remove(classToApply);
    getNewQuestion();
},1000)
    
})
});

incrementScore = (num) => {
    score += num;
    scoreText.innerText = score;
}



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
startButton.addEventListener("click", startGame)
   

