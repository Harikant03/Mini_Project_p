const container = document.querySelector('.container');
const questionBox = document.querySelector('.question');
const choicesBox = document.querySelector('.choices');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const submitBtn = document.querySelector('.submitBtn');
const scoreCard = document.querySelector('.scoreCard');
const alertBox = document.querySelector('.alert');
const startBtn = document.querySelector('.startBtn');
const timer = document.querySelector('.timer');
const marksForReadBox = document.querySelector('.marksForRead');

// Quiz questions
const quiz = [
    {
        question: "Q1. Who was the first Indian to receive the Magsaysay Award?",
        choices: ["T. N. Seshan", "Kiran Bedi", "Vinoba Bhave", "None of these"],
        answer: "Vinoba Bhave"
    },
    {
        question: "Q2. The ‘Dronacharya Award’ is given for?",
        choices: ["Best coaching in sports", "Best medical research", "Best NCC cadet", "Best wrestler"],
        answer: "Best coaching in sports"
    },
    {
        question: "Q3. The ‘Kalidas Samman’ is awarded for contribution in which field?",
        choices: ["Arts (Classical music, dance, theatre)", "Sports", "Medicine", "Peace"],
        answer: "Arts (Classical music, dance, theatre)"
    }
];

// Variables
let CurrentQuestionIndex = 0;
let score = 0;
let quizOver = false;
let timeLeft = 15;
let timerID = null;

// Track answers + read questions
let userAnswers = new Array(quiz.length).fill(null); // null = not answered
let readQuestions = new Array(quiz.length).fill(false);

// Show a question
const showQuestions = () => {
    const questionDetails = quiz[CurrentQuestionIndex];
    questionBox.textContent = questionDetails.question;

    // Mark this question as read
    readQuestions[CurrentQuestionIndex] = true;

    // Show choices
    choicesBox.textContent = "";
    questionDetails.choices.forEach(choice => {
        const choiceDiv = document.createElement('div');
        choiceDiv.textContent = choice;
        choiceDiv.classList.add('choice');
        choicesBox.appendChild(choiceDiv);

        // Pre-select if user answered already
        if (userAnswers[CurrentQuestionIndex] === choice) {
            choiceDiv.classList.add('selected');
        }

        choiceDiv.addEventListener('click', () => {
            document.querySelectorAll('.choice').forEach(c => c.classList.remove('selected'));
            choiceDiv.classList.add('selected');
            userAnswers[CurrentQuestionIndex] = choice; // save user answer
        });
    });

    updateButtons();
    startTimer();
};

// Update prev/next button states
const updateButtons = () => {
    prevBtn.disabled = (CurrentQuestionIndex === 0);
    nextBtn.disabled = (CurrentQuestionIndex === quiz.length - 1);
};

// Check final score
const calculateScore = () => {
    score = 0;
    userAnswers.forEach((ans, index) => {
        if (ans === quiz[index].answer) score++;
    });

    const readCount = readQuestions.filter(r => r).length;
    const notAnsweredCount = userAnswers.filter(ans => ans === null).length;

    scoreCard.textContent = `✅ Score: ${score}/${quiz.length}`;
    marksForReadBox.textContent = `📖 Questions Read: ${readCount}, Not Answered: ${notAnsweredCount}`;
};

// Show score and end quiz
const showScore = () => {
    questionBox.textContent = "";
    choicesBox.textContent = "";
    calculateScore();
    displayAlert("You have completed the quiz!");
    quizOver = true;
    timer.style.display = "none";
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
    submitBtn.style.display = "none";
    startBtn.style.display = "block";
    startBtn.textContent = "Play Again";
};

// Alert message
const displayAlert = (msg) => {
    alertBox.style.display = "block";
    alertBox.textContent = msg;
    setTimeout(() => {
        alertBox.style.display = "none";
    }, 2000);
};

// Start timer
const startTimer = () => {
    clearInterval(timerID);
    timeLeft = 15;
    timer.textContent = timeLeft;

    const countDown = () => {
        timeLeft--;
        timer.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timerID);
            if (CurrentQuestionIndex < quiz.length - 1) {
                CurrentQuestionIndex++;
                showQuestions();
            } else {
                showScore();
            }
        }
    };
    timerID = setInterval(countDown, 1000);
};

// Stop timer
const stopTimer = () => {
    clearInterval(timerID);
};

// Shuffle questions
const shuffleQuestions = () => {
    for (let i = quiz.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [quiz[i], quiz[j]] = [quiz[j], quiz[i]];
    }
    CurrentQuestionIndex = 0;
    showQuestions();
};

// Start quiz
const startQuiz = () => {
    score = 0;
    quizOver = false;
    userAnswers.fill(null);
    readQuestions.fill(false);
    scoreCard.textContent = "";
    marksForReadBox.textContent = "";
    timer.style.display = "flex";
    prevBtn.style.display = "inline-block";
    nextBtn.style.display = "inline-block";
    submitBtn.style.display = "inline-block";
    shuffleQuestions();
};

// Event listeners
startBtn.addEventListener('click', () => {
    startBtn.style.display = "none";
    container.style.display = "block";
    startQuiz();
});

nextBtn.addEventListener('click', () => {
    if (CurrentQuestionIndex < quiz.length - 1) {
        CurrentQuestionIndex++;
        showQuestions();
    }
});

prevBtn.addEventListener('click', () => {
    if (CurrentQuestionIndex > 0) {
        CurrentQuestionIndex--;
        showQuestions();
    }
});

submitBtn.addEventListener('click', () => {
    stopTimer();
    showScore();
});
