let totalDisplay = document.getElementById("total");
let questionDisplay = document.getElementById("question");
let answersDisplay = document.getElementById("answers");
let contentDisplay = document.getElementById("content");

let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");

let qIndex = 0;
let score = 0;

// var quiz = {
//   JS: [
//     {
//       id: 1,
//       question: "Inside which HTML element do we put the JavaScript?",
//       options: [
//         {
//           a: "&lt;script&gt;",
//           b: "&lt;javascript&gt;",
//           c: "&lt;scripting&gt;",
//           d: "&lt;js&gt;",
//         },
//       ],
//       answer: "&lt;script&gt;",
//       score: 0,
//       status: "",
//     },
//     {
//       id: 2,
//       question: "Where is the correct place to insert a JavaScript?",
//       options: [
//         {
//           a: "The &lt;head&gt; section",
//           b: "The &lt;body&gt; section",
//           c: "Both the &lt;head&gt; section and the &lt;body&gt; section are correct",
//         },
//       ],
//       answer:
//         "Both the &lt;head&gt; section and the &lt;body&gt; section are correct",
//       score: 0,
//       status: "",
//     },
//     {
//       id: 3,
//       question:
//         "What is the correct syntax for referring to an external script called 'xxx.js'?",
//       options: [
//         {
//           a: "&ltscript href=&quot;xxx.js&quot;>",
//           b: "&lt;script name=&quot;xxx.js&quot;&gt;",
//           c: "&lt;script src=&quot;xxx.js&quot;&gt;",
//         },
//       ],
//       answer: "&lt;script src=&quot;xxx.js&quot;&gt;",
//       score: 0,
//       status: "",
//     },
//     {
//       id: 4,
//       question:
//         "The external JavaScript file must contain the &lt;script&gt; tag.",
//       options: [{ a: "True", b: "False" }],
//       answer: "False",
//       score: 0,
//       status: "",
//     },
//     {
//       id: 5,
//       question: "How do you write &quot;Hello World&quot; in an alert box?",
//       options: [
//         {
//           a: "alertBox(&quot;Hello World&quot;);",
//           b: "msg(&quot;Hello World&quot;);",
//           c: "alert(&quot;Hello World&quot;);",
//           d: "msgBox(&quot;Hello World&quot;);",
//         },
//       ],
//       answer: "alert(&quot;Hello World&quot;);",
//       score: 0,
//       status: "",
//     },
//     {
//       id: 6,
//       question: "How do you create a function in JavaScript?",
//       options: [
//         {
//           a: "function myFunction()",
//           b: "function:myFunction()",
//           c: "function = myFunction()",
//         },
//       ],
//       answer: "function myFunction()",
//       score: 0,
//       status: "",
//     },
//     {
//       id: 7,
//       question: "How do you call a function named &quot;myFunction&quot;?",
//       options: [
//         {
//           a: "call function myFunction()",
//           b: "call myFunction()",
//           c: "myFunction()",
//         },
//       ],
//       answer: "myFunction()",
//       score: 0,
//       status: "",
//     },
//     {
//       id: 8,
//       question: "How to write an IF statement in JavaScript?",
//       options: [
//         {
//           a: "if i = 5 then",
//           b: "if i == 5 then",
//           c: "if (i == 5)",
//           d: " if i = 5",
//         },
//       ],
//       answer: "if (i == 5)",
//       score: 0,
//       status: "",
//     },
//     {
//       id: 9,
//       question: "Which of the following is a disadvantage of using JavaScript?",
//       options: [
//         {
//           a: "Client-side JavaScript does not allow the reading or writing of files.",
//           b: "JavaScript can not be used for Networking applications because there is no such support available.",
//           c: "JavaScript doesn't have any multithreading or multiprocess capabilities.",
//           d: "All of the above.",
//         },
//       ],
//       answer: "All of the above.",
//       score: 0,
//       status: "",
//     },
//     {
//       id: 10,
//       question:
//         "How to write an IF statement for executing some code if &quot;i&quot; is NOT equal to 5?",
//       options: [
//         {
//           a: "if (i <> 5)",
//           b: "if i <> 5",
//           c: "if (i != 5)",
//           d: "if i =! 5 then",
//         },
//       ],
//       answer: "if (i != 5)",
//       score: 0,
//       status: "",
//     },
//     {
//       id: 11,
//       question: "How does a WHILE loop start?",
//       options: [
//         {
//           a: "while i = 1 to 10",
//           b: "while (i &lt;= 10; i++)",
//           c: "while (i &lt;= 10)",
//         },
//       ],
//       answer: "while (i &lt;= 10)",
//       score: 0,
//       status: "",
//     },
//     {
//       id: 12,
//       question: "How does a FOR loop start?",
//       options: [
//         {
//           a: "for (i = 0; i &lt;= 5)",
//           b: "for (i = 0; i &lt;= 5; i++)",
//           c: "for i = 1 to 5",
//           d: "for (i &lt;= 5; i++)",
//         },
//       ],
//       answer: "for (i = 0; i &lt;= 5; i++)",
//       score: 0,
//       status: "",
//     },
//     {
//       id: 13,
//       question: "How can you add a comment in a JavaScript?",
//       options: [
//         {
//           a: "//This is a comment",
//           b: "&sbquo;This is a comment",
//           c: "&lt;!--This is a comment--&gt;",
//         },
//       ],
//       answer: "//This is a comment",
//       score: 0,
//       status: "",
//     },
//     {
//       id: 14,
//       question: "How to insert a comment that has more than one line?",
//       options: [
//         {
//           a: "/*This comment has more than one line*/",
//           b: "//This comment has more than one line//",
//           c: "&lt;!--This comment has more than one line--&gt;",
//         },
//       ],
//       answer: "/*This comment has more than one line*/",
//       score: 0,
//       status: "",
//     },
//     {
//       id: 15,
//       question: "What is the correct way to write a JavaScript array?",
//       options: [
//         {
//           a: "var colors = (1:&quot;red&quot;, 2:&quot;green&quot;, 3:&quot;blue&quot;)",
//           b: "var colors = [&quot;red&quot;, &quot;green&quot;, &quot;blue&quot;]",
//           c: "var colors = 1 = (&quot;red&quot;), 2 = (&quot;green&quot;), 3 = (&quot;blue&quot;)",
//           d: "var colors = &quot;red&quot;, &quot;green&quot;, &quot;blue&quot;",
//         },
//       ],
//       answer:
//         "var colors = [&quot;red&quot;, &quot;green&quot;, &quot;blue&quot;]",
//       score: 0,
//       status: "",
//     },
//     {
//       id: 16,
//       question: "How do you round the number 7.25, to the nearest integer?",
//       options: [
//         {
//           a: "rnd(7.25)",
//           b: "Math.round(7.25)",
//           c: "Math.rnd(7.25)",
//           d: "round(7.25)",
//         },
//       ],
//       answer: "Math.round(7.25)",
//       score: 0,
//       status: "",
//     },
//     {
//       id: 17,
//       question: "How do you find the number with the highest value of x and y?",
//       options: [
//         {
//           a: "Math.max(x, y)",
//           b: "Math.ceil(x, y)",
//           c: "top(x, y)",
//           d: "ceil(x, y)",
//         },
//       ],
//       answer: "Math.max(x, y)",
//       score: 0,
//       status: "",
//     },
//     {
//       id: 18,
//       question:
//         "What is the correct JavaScript syntax for opening a new window called &quot;w2&quot;?",
//       options: [
//         {
//           a: "w2 = window.new(&quot;http://www.w3schools.com&quot;);",
//           b: "w2 = window.open(&quot;http://www.w3schools.com&quot;);",
//         },
//       ],
//       answer: "w2 = window.open(&quot;http://www.w3schools.com&quot;);",
//       score: 0,
//       status: "",
//     },
//     {
//       id: 19,
//       question: "JavaScript is the same as Java.",
//       options: [{ a: "true", b: "false" }],
//       answer: "false",
//       score: 0,
//       status: "",
//     },
//     {
//       id: 20,
//       question: "How can you detect the client&rsquo;s browser name?",
//       options: [
//         { a: "navigator.appName", b: "browser.name", c: "client.navName" },
//       ],
//       answer: "navigator.appName",
//       score: 0,
//       status: "",
//     },
//     {
//       id: 21,
//       question: "Which event occurs when the user clicks on an HTML element?",
//       options: [
//         { a: "onchange", b: "onclick", c: "onmouseclick", d: "onmouseover" },
//       ],
//       answer: "onclick",
//       score: 0,
//       status: "",
//     },
//     {
//       id: 22,
//       question: "How do you declare a JavaScript variable?",
//       options: [{ a: "var carName;", b: "variable carName;", c: "v carName;" }],
//       answer: "var carName;",
//       score: 0,
//       status: "",
//     },
//     {
//       id: 23,
//       question: "Which operator is used to assign a value to a variable?",
//       options: [{ a: "*", b: "-", c: "=", d: "x" }],
//       answer: "=",
//       score: 0,
//       status: "",
//     },
//     {
//       id: 24,
//       question: "What will the following code return: Boolean(10 &gt; 9)",
//       options: [{ a: "NaN", b: "false", c: "true" }],
//       answer: "true",
//       score: 0,
//       status: "",
//     },
//     {
//       id: 25,
//       question: "Is JavaScript case-sensitive?",
//       options: [{ a: "No", b: "Yes" }],
//       answer: "Yes",
//       score: 0,
//       status: "",
//     },
//   ],
// };

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
//EX: ["<script>", "The <body> section"];

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
    // console.log(newDiv);

    answersDisplay.appendChild(newDiv);
  }

  //   console.log(inputs);
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

  //? Checks user answers against actually answers and increases score if correct

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
