let totalDisplay = document.getElementById("total");
let questionDisplay = document.getElementById("question");
let answersDisplay = document.getElementById("answers");
let contentDisplay = document.getElementById("content");

let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");

let qIndex = 0;
let score = 0;

let quiz = [
  {
    id: 1,
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<script>", "<javascript>", "<scripting>", "<js>"],
    answer: "<script>",
  },
  {
    id: 2,
    question: "Where is the correct place to insert a JavaScript?",
    options: [
      "The <head> section",
      "The <body> section",
      "Both the <head> section and the <body> section are correct",
    ],
    answer: "Both the <head> section and the <body> section are correct",
  },
  {
    id: 3,
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    options: [
      "<script href='xxx.js'>",
      "<script name='xxx.js'>",
      "<script src='xxx.js'>",
    ],
    answer: "<script src='xxx.js'>",
  },
  {
    id: 4,
    question: "The external JavaScript file must contain the <script> tag.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    id: 5,
    question: "How do you write 'Hello World' in an alert box?",
    options: [
      "alertBox('Hello World');",
      "msg('Hello World');",
      "alert('Hello World');",
      "msgBox('Hello World');",
    ],
    answer: "alert('Hello World');",
  },
  {
    id: 6,
    question: "How do you create a function in JavaScript?",
    options: [
      "function myFunction()",
      "function:myFunction()",
      "function = myFunction()",
    ],
    answer: "function myFunction()",
  },
  {
    id: 7,
    question: "How do you call a function named 'myFunction'?",
    options: [
      "call function myFunction()",
      "call myFunction()",
      "myFunction()",
    ],
    answer: "myFunction()",
  },
  {
    id: 8,
    question: "How to write an IF statement in JavaScript?",
    options: ["if i = 5 then", "if i == 5 then", "if (i == 5)", " if i = 5"],
    answer: "if (i == 5)",
  },
  {
    id: 9,
    question: "Which of the following is a disadvantage of using JavaScript?",
    options: [
      "Client-side JavaScript does not allow the reading or writing of files.",
      "JavaScript can not be used for Networking applications because there is no such support available.",
      "JavaScript doesn't have any multithreading or multiprocess capabilities.",
      "All of the above.",
    ],
    answer: "All of the above.",
  },
  {
    id: 10,
    question:
      "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    options: ["if (i <> 5)", "if i <> 5", "if (i != 5)", "if i =! 5 then"],
    answer: "if (i != 5)",
  },
];

let answers = [];

let resultArray = [];

// Total Display
totalDisplay.innerHTML += ` ${quiz.length}`;

function displayQuestion() {
  //? Question Display
  questionDisplay.innerHTML = `${quiz[qIndex].id}. ${quiz[qIndex].question}`;

  //? Answer Display
  //for each option
  for (option in quiz[qIndex].options) {
    //make a new div, input, and label then add them to the answers form
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "option");

    let newInput = document.createElement("input");
    newInput.setAttribute("type", "radio");
    newInput.setAttribute("id", option);
    newInput.setAttribute("name", "option");
    newInput.setAttribute("value", quiz[qIndex].options[option]);

    let newLabel = document.createElement("label");
    newLabel.setAttribute("for", option);
    newLabel.innerText = quiz[qIndex].options[option];

    newDiv.append(newInput, newLabel);

    answersDisplay.appendChild(newDiv);
  }

}

displayQuestion();

function pushAnswer() {
  let checked = document.querySelector("input:checked");

  if (checked !== null) {
    answers[qIndex] = checked.value;
  } else {
    answers[qIndex] = "";
  }
}

function checkAnswers() {
  console.log("check answers");

  // Checks user answers against actually answers and increases score if correct

  for (a in answers) {
    if (answers[a] === quiz[a].answer) {
      score++;
      resultArray[a] = true;
      console.log(`Q${++a} is correct`);
    } else {
      resultArray[a] = false;
      console.log(`Q${++a} is incorrect`);
    }
  }
}

function displayScorePage() {
  contentDisplay.innerHTML = `<h1>Total Score: ${score}/${quiz.length}</h1>`;
  console.log(resultArray);
  //   console.log("displayScorePage");

  for (r in resultArray) {
    // Outermost Div
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "result");

    //Header Q# & Question
    let header = document.createElement("h4");
    header.setAttribute("class", "result-header");
    header.innerHTML= `<span>${quiz[r].id}.</span> ${quiz[r].question}`;

    //Answer Div
    let answerDiv = document.createElement("div");
    answerDiv.setAttribute("class", "result-answers");

    let userAnswer = document.createElement("div");
    userAnswer.innerText = `Your Answer: ${answers[r]}`;
    let correctAnswer = document.createElement("div");
    correctAnswer.innerText = `Correct Answer: ${quiz[r].answer}`;

    answerDiv.append(correctAnswer, userAnswer);

    if (resultArray[r] === true) {
      newDiv.classList.add("green");
    } else if (resultArray[r] === false) {
      newDiv.classList.add("red");
    }

    newDiv.append(header, answerDiv);

    contentDisplay.append(newDiv);
  }
}

prevBtn.addEventListener("click", () => {
  if (qIndex !== 0) {
    pushAnswer();

    --qIndex;
    answersDisplay.innerText = "";
    displayQuestion();
  }
});

nextBtn.addEventListener("click", () => {
  if (qIndex !== quiz.length - 1) {
    console.log("next");

    pushAnswer();

    ++qIndex;
    answersDisplay.innerText = "";
    displayQuestion();
  } else {
    pushAnswer();
    console.log(answers);

    checkAnswers();

    displayScorePage();
  }
});
