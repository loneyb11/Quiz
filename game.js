const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Which built-in method returns the length of the string?",
        choice1: "length()",
        choice2: "None of the above",
        choice3: "index()",
        choice4: "size()",
        answer: 1
    },
    {
        question: "Which of the following is the correct syntax to create a cookie using JavaScript?",
        choice1: "All of the above.",
        choice2: "JavaScript is a lightweight, interpreted programming language.",
        choice3: "JavaScript has object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages.",
        choice4: "The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers.",
        answer: 1
    },
    {
        question: "Which built-in method reverses the order of the elements of an array?",
        choice1: "reverse()",
        choice2: "sort(order)",
        choice3: "changeOrder(order)",
        choice4: "None of the above",
        answer: 1
    },
    {
        question: "Which built-in method returns the length of the string?",
        choice1: "valueOf()",
        choice2: "toSource()",
        choice3: "toString()",
        choice4: "None of the above",
        answer: 3
    },
    {
        question: "Which of the following function of Boolean object returns a string containing the source of the Boolean object?",
        choice1: "search()",
        choice2: "concat()",
        choice3: "toSource()",
        choice4: "replace()",
        answer: 3
    },
    {
        question: "Which of the following function of String object executes the search for a match between a regular expression and a specified string?",
        choice1: "toLocaleUpperCase()",
        choice2: "toUpperCase()",
        choice3: "substring()",
        choice4: "toString()",
        answer: 4
    },
    {
        question: "Which of the following is the correct syntax to create a cookie using JavaScript?",
        choice1: "document.cookie = 'key1 = value1; key2 = value2; expires = date';",
        choice2: "browser.cookie = 'key1 = value1; key2 = value2; expires = date';",
        choice3: "window.cookie = 'key1 = value1; key2 = value2; expires = date';",
        choice4: "navigator.cookie = 'key1 = value1; key2 = value2; expires = date';",
        answer: 1
    },
    {
        question: "Which of the following function of String object causes a string to be displayed as a superscript, as if it were in a <sup> tag?",
        choice1: "sup()",
        choice2: "small()",
        choice3: "strike()",
        choice4: "sub()",
        answer: 1
    },
    {
        question: "Which of the following function of Array object calls a function for each element in the array?",
        choice1: "concat()",
        choice2: "every()",
        choice3: "filter()",
        choice4: "forEach()",
        answer: 4
    },
    {
        question: "Which of the following function of Array object sorts the elements of an array?",
        choice1: "toSource()",
        choice2: "sort()",
        choice3: "toString()",
        choice4: "unshift()",
        answer: 2
    }
    
    ];


      

   
 

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

startGame = () => {
     
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  console.log(availableQuestions);
  getNewQuestion();
  
};


    getNewQuestion = () => {
       if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
           return window.location.assign("/end.html");
       }
        questionCounter++;
        const questionIndex = Math.floor(Math.random() * availableQuestions.length);
        currentQuestion = availableQuestions[questionIndex];
        question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
            choice.innerText = currentQuestion["choice" + number];
});

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;

};
    choices.forEach(choice => {
    choice.addEventListener("click", e => {
      if (!acceptingAnswers) return;

    acceptingAnswers = false;
      const selectedChoice = e.target;
      const selectedAnswer = selectedChoice.dataset["number"];
      console.log(selectedAnswer);
      getNewQuestion();
    });

    });
startGame();