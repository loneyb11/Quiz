// select all elements
const start     = document.getElementById("start");
const quiz      = document.getElementById("quiz");
const question  = document.getElementById("questions");
const choiceA   = document.getElementById("A");
const choiceB   = document.getElementById("B");
const choiceC   = document.getElementById("C");
const choiceD   = document.getElementById("D");
const scoreDiv  = document.getElementById("score");

// create the questions
let questions = [
    {
        question    : "Which built-in method returns the length of the string?",
        choiceA     : "Correct",
        choiceB     : "Wrong",
        choiceC     : "Wrong",
        choiceD     : "Wrong",
        correct     : "A"
    },{
        question    : "Which of the following is the correct syntax to create a cookie using JavaScript?",
        choiceA     : "Correct",
        choiceB     : "Wrong",
        choiceC     : "Wrong",
        choiceD     : "Wrong",
        correct     : "A"
    },{
        question    : "Which built-in method returns the length of the string?",
        choiceA     : "Correct",
        choiceB     : "Wrong",
        choiceC     : "Wrong",
        choiceD     : "Wrong",
        correct     : "A"
    },{
        question    : "Which built-in method reverses the order of the elements of an array?",
        choiceA     : "Wrong",
        choiceB     : "Correct",
        choiceC     : "Wrong",
        choiceD     : "Wrong",
        correct     : "C"
    },{
        question    : "Which of the following function of Boolean object returns a string containing the source of the Boolean object?",
        choiceA     : "Correct",
        choiceB     : "Wrong",
        choiceC     : "Wrong",
        choiceD     : "Wrong",
        correct     : "A"
    },{
        question    : "Which of the following function of String object executes the search for a match between a regular expression and a specified string?",
        choiceA     : "Wrong",
        choiceB     : "Wrong",
        choiceC     : "Wrong",
        choiceD     : "Correct",
        correct     : "D"
    },{
        question    : "Which of the following function of String object returns a string representing the specified object?",
        choiceA     : "Wrong",
        choiceB     : "Wrong",
        choiceC     : "Correct",
        choiceD     : "Wrong",
        correct     : "C",
    },{
        question    : "Which of the following function of String object causes a string to be displayed as a superscript, as if it were in a <sup> tag?",
        choiceA     : "Correct",
        choiceB     : "Wrong",
        choiceC     : "Wrong",
        choiceD     : "Wrong",
        correct     : "A"
    },{
        question    : "Which of the following function of Array object calls a function for each element in the array?",
        choiceA     : "Wrong",
        choiceB     : "Wrong",
        choiceC     : "Wrong",
        choiceD     : "Correct",
        correct     : "D"
    },{
        question    : "Which of the following function of Array object sorts the elements of an array?",
        choiceA     : "Wrong",
        choiceB     : "Correct",
        choiceC     : "Wrong",
        choiceD     : "Wrong",
        correct     : "B"
    }

];


}
// create the variables

const lastquestion = questions.length -1;
let runningQuestions = 0;
let TIMER:
let score = 0;

// render a question
function renderQuestion(){
    let q = question[runningQuestion];

    question.innerHTML "<p>"+ q.question +"</P>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;

}

start.addEventListener("click",startQuiz);
//Start Quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderCounter();
    TIMER = setInterval(renderCounter,1000); //1000 = 1s
    


// counter render
let count quizTime = 60; // 60s


}

// checkAnswer

function checkAnswer(answer){
    if(answer == question[runingQuestion].correct){
        // answer is correct
        score++;
        // 
    }else{
        // answer is wrong
    }
}
function answerIsCorrect(){

    document.getElementById(runningQuestion).styles.backgroundColor = "#0f0";
}
// answer is wrong
function answerIsWrong(){

    document.getElementById(runningQuestion).styles.backgroundColor = "#f00";
