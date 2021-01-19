// Create a timed JS multiple-choice test

// Declare variables
var questionNumber = 0;
var score = 0;
var question;
var userAnswer;
var possibleAnswers;
var answerA;
var answerB;
var answerC;
var testMain;
var testQuestions = [
    {
        question: "What is Javascript?",
        a: "A fancy new coffee drink at Starbucks.", 
        b: "One of the three main programming languages that underpin the web.",
        c: "None of the above.",
        correctAnswer: "B"
    },
    {
        question: "What is the primary function of Javascript?",
        a: "It allows the creation of complex, interactive features on a web page.",
        b: "To make begginner coding students cry.",
        c: "It allows us to write about our love of coffee.",
        correctAnswer: "A"
    },
    {
        question: "Which of the following is a data type in Javascript?",
        a: "Bilingual type.", 
        b: "String type.", 
        c: "Dark roast.",
        correctAnswer: "B"
    },
    {
        question: "What are variables in Javascript?",
        a: "The temperature of your coffee at Starbucks.", 
        b: "A method for executing an operation.", 
        c: "Containers for storing information.",
        correctAnswer: "C"
    },
    {
        question: "Do you need a cup of coffee after all these questions?",
        a: "Yes.", 
        b: "No.", 
        c: "There are too many coffee puns in this test.",
        correctAnswer: "A"
    }
]

// Declare functions
// get item by id function
function get(x) {
    return document.getElementById(x);
}

// Function to display questions
function displayQuestions() {
    testMain = get("testMain");
    if(questionNumber >= testQuestions.length) {
        endTest()
        return false;
    } else

    get("test_status").innerHTML = "Question "+(questionNumber+1)+" of "+testQuestions.length;

    question = testQuestions[questionNumber].question;
    answerA = testQuestions[questionNumber].a;
    answerB = testQuestions[questionNumber].b;
    answerC = testQuestions[questionNumber].c;

    testMain.innerHTML = "<h3>"+question+"</h3>"
    testMain.innerHTML += "<label> <input type='radio' name='possibleAnswers' value='A'> "+answerA+"</label><br>";
    testMain.innerHTML += "<label> <input type='radio' name='possibleAnswers' value='B'> "+answerB+"</label><br>";
    testMain.innerHTML += "<label> <input type='radio' name='possibleAnswers' value='C'> "+answerC+"</label><br>";
    testMain.innerHTML += "<button onclick='compareAnswer()'>Submit</button";
    testMain.innerHTML += "<button onclick='giveUpTest()'>Give Up</button";
    // console.log(answerC)
}

// Function to compare the user's answer with the correct answer
function compareAnswer() {
    possibleAnswers = document.getElementsByName("possibleAnswers");
    for(var i=0; i<possibleAnswers.length; i++) {
        if(possibleAnswers[i].checked) {
            userAnswer = possibleAnswers[i].value;
           
        }
    }
    if(userAnswer == testQuestions[questionNumber].correctAnswer) {
        score++;
        // console.log("right answer")
    } 
    // else console.log("wrong answer")
    questionNumber++;
    displayQuestions()
    console.log(score)
    // console.log(userAnswer)
    // console.log(testQuestions[questionNumber].correctAnswer)
}


// Function to hide initial div
function hideTest() {
    if (get("hidetest").style.display === "none") {
        get("hidetest").style.display = "block";
    } else {
        get("hidetest").style.display = "none"
    };
    displayQuestions()
}

// Function to display results
function displayResults() {
    get("test_status").innerHTML = "Your score"
    get("yourResults").innerHTML = "You answered " + score + " questions correctly."

}

// Function to hide testMain div
function hideTestMain() {
    if (get("testMain").style.display === "none") {
        get("testMain").style.display = "block";
    } else {
        get("testMain").style.display = "none"
    };
    displayResults()
}

// Function to test at which stage the give up button is clicked
function giveUpTest() {
    if (questionNumber === 0) {
        giveUp();
    } else displayResults()
}

// Function to give up
function giveUp() {
    if (get("hidetest").style.display === "none") {
        get("hidetest").style.display = "block";
    } else {
        get("hidetest").style.display = "none"
    };
    displayResults()
}

// Function to end the test
function endTest() {
    if (get("testMain").style.display === "none") {
        get("testMain").style.display = "block";
    } else {
        get("testMain").style.display = "none"
    };
    displayResults()
}


// Event listener to start the quiz
get("start").addEventListener("click", hideTest);

// Event listener for results
get("giveup").addEventListener("click", giveUpTest);




