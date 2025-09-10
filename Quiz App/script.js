const container = document.querySelector(".container");
const questionBox = document.querySelector(".question");
const choicesBox = document.querySelector(".choices");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const submitBtn = document.querySelector(".submitBtn");
const scoreCard = document.querySelector(".scoreCard");
const alertBox = document.querySelector(".alert");
const startBtn = document.querySelector(".startBtn");
const timer = document.querySelector(".timer");
const marksForReadBox = document.querySelector(".marksForRead");

// Quiz questions
const quiz = [
  {
    question: "Q1. Who was the first Indian to receive the Magsaysay Award?",
    choices: ["T. N. Seshan", "Kiran Bedi", "Vinoba Bhave", "None of these"],
    answer: "Vinoba Bhave",
  },
  {
    question: "Q2. The ‘Dronacharya Award’ is given for?",
    choices: [
      "Best coaching in sports",
      "Best medical research",
      "Best NCC cadet",
      "Best wrestler",
    ],
    answer: "Best coaching in sports",
  },
  {
    question:
      "Q3. The ‘Kalidas Samman’ is awarded for contribution in which field?",
    choices: [
      "Arts (Classical music, dance, theatre)",
      "Sports",
      "Medicine",
      "Peace",
    ],
    answer: "Arts (Classical music, dance, theatre)",
  },
  {
    question:
      "Q4. The Shanti Swarup Bhatnagar Award is given for contribution in?",
    choices: [
      "Literature",
      "Cinema",
      "Classical Music",
      "Science & Technology",
    ],
    answer: "Science & Technology",
  },
  {
    question: "Q5. Which award is given for excellence in sports?",
    choices: [
      "Jamnalal Bajaj Award",
      "Arjuna Award",
      "Tagore Award",
      "Moortidevi Award",
    ],
    answer: "Arjuna Award",
  },
  {
    question: "Q6. The ‘Swarna Kamal’ award is given in which field?",
    choices: [
      "Arts & Handicrafts",
      "Literature / Cinema (Best Feature Film)",
      "Science & Technology",
      "Sports",
    ],
    answer: "Literature / Cinema (Best Feature Film)",
  },
  {
    question: "Q7. Who among the following did NOT receive a Nobel Prize?",
    choices: [
      "C. V. Raman",
      "H. J. Bhabha",
      "Rabindranath Tagore",
      "Mother Teresa",
    ],
    answer: "H. J. Bhabha",
  },
  {
    question:
      "Q8. Who among the following was NOT an Indian citizen Nobel Laureate?",
    choices: [
      "Subrahmanyan Chandrasekhar",
      "C. V. Raman",
      "Mother Teresa",
      "Rabindranath Tagore",
    ],
    answer: "Mother Teresa",
  },
  {
    question:
      "Q9. Which agricultural scientist was awarded the Nobel Peace Prize in 1970?",
    choices: [
      "M. S. Swaminathan",
      "Norman Borlaug",
      "S. Chandrasekhar",
      "Har Gobind Khorana",
    ],
    answer: "Norman Borlaug",
  },
  {
    question:
      "Q10. Who was the first Indian actress to receive the Padma Shri Award?",
    choices: ["Smita Patil", "Nargis Dutt", "Meena Kumari", "Madhubala"],
    answer: "Nargis Dutt",
  },
  {
    question: "Q11. Who among the following has NOT received the Bharat Ratna?",
    choices: [
      "Ustad Bismillah Khan",
      "Satyajit Ray",
      "Lata Mangeshkar",
      "Raj Kapoor",
    ],
    answer: "Raj Kapoor",
  },
  {
    question: "Q12. Who among the following has NOT received the Bharat Ratna?",
    choices: [
      "Lata Mangeshkar",
      "Pandit Jasraj",
      "Pandit Ravi Shankar",
      "Ustad Bismillah Khan",
    ],
    answer: "Pandit Jasraj",
  },
  {
    question: "Q13. Who was the first woman to receive the Jnanpith Award?",
    choices: [
      "Ashapoorna Devi",
      "Mahasweta Devi",
      "Mahadevi Verma",
      "Amrita Pritam",
    ],
    answer: "Ashapoorna Devi",
  },
  {
    question:
      "Q14. Which Pakistani citizen was honoured with the Bharat Ratna by the Government of India?",
    choices: [
      "Khan Abdul Ghaffar Khan",
      "Liaquat Ali Khan",
      "M. A. Jinnah",
      "Muhammad Iqbal",
    ],
    answer: "Khan Abdul Ghaffar Khan",
  },
  {
    question:
      "Q15. Who was the first person of Indian origin to win the Booker Prize?",
    choices: [
      "Arundhati Roy",
      "Salman Rushdie",
      "V. S. Naipaul",
      "Jhumpa Lahiri",
    ],
    answer: "V. S. Naipaul",
  },
  {
    question: "Q16. Which foreign citizen received the Bharat Ratna?",
    choices: [
      "Nelson Mandela",
      "Bill Clinton",
      "Adolf Hitler",
      "Boris Yeltsin",
    ],
    answer: "Nelson Mandela",
  },
  {
    question: "Q17. Who among the following has received the Bharat Ratna?",
    choices: [
      "Amjad Ali Khan",
      "Dr. Verghese Kurien",
      "Ravi Shankar",
      "Dr. Sarvepalli Gopal",
    ],
    answer: "Ravi Shankar",
  },
  {
    question: "Q18. In which year was the Bharat Ratna first awarded?",
    choices: ["1951", "1953", "1954", "1956"],
    answer: "1954",
  },
  {
    question: "Q19. Who gives the Nobel Prizes?",
    choices: [
      "Government of Norway",
      "Government of Switzerland",
      "Government of Sweden",
      "Swedish Academy",
    ],
    answer: "Swedish Academy",
  },
  {
    question: "Q20. Who was the first person to receive the Bharat Ratna?",
    choices: [
      "Govind Ballabh Pant",
      "M. Radhakrishnan",
      "Dr. Rajendra Prasad",
      "Jawaharlal Nehru",
    ],
    answer:
      "C. Rajagopalachari, Dr. Sarvepalli Radhakrishnan, and C. V. Raman (1954, jointly)",
  },
  {
    question: "Q21. Who was the first person to receive the Bharat Ratna?",
    choices: [
      "M. Radhakrishnan",
      "C. V. Raman",
      "C. Rajagopalachari",
      "All of these",
    ],
    answer: "All of these",
  },
  {
    question: "Q22. The ‘Chakradhar Fellowship’ is awarded in which field?",
    choices: [
      "Folk Dance",
      "Classical Music",
      "Classical Dance",
      "Critical Studies",
    ],
    answer: "Classical Music",
  },
  {
    question: "Q23. The Maharana Pratap Award is given in which field?",
    choices: [
      "Science & Technology",
      "Sports",
      "Social Work",
      "Performing Arts",
    ],
    answer: "Sports",
  },
  {
    question: "Q24. Which award did J. R. D. Tata receive in 1992?",
    choices: ["Bharat Ratna", "Padma Vibhushan", "Padma Bhushan", "Padma Shri"],
    answer: "Bharat Ratna",
  },
  {
    question: "Q25. Who was the first woman to receive the Vyas Samman?",
    choices: [
      "Chitra Mudgal",
      "Prabha Khaitan",
      "Mamta Kalia",
      "Mannu Bhandari",
    ],
    answer: "Mannu Bhandari",
  },
  {
    question: "Q26. Alfred Nobel, after whom the Nobel Prize is named, was a?",
    choices: ["Engineer", "Chemist", "Both (a) and (b)", "Doctor"],
    answer: "Both (a) and (b)",
  },
  {
    question: "Q27. In how many fields are Nobel Prizes awarded?",
    choices: ["Three", "Four", "Five", "Six"],
    answer: "Six",
  },
  {
    question:
      "Q28. Who was the first Indian to receive the Nobel Prize in Literature?",
    choices: [
      "Mother Teresa",
      "Rabindranath Tagore",
      "Sarojini Naidu",
      "C. V. Raman",
    ],
    answer: "Rabindranath Tagore",
  },
  {
    question: "Q29. Who was the first Indian to receive the Nobel Prize?",
    choices: [
      "Rabindranath Tagore",
      "C. V. Raman",
      "J. C. Bose",
      "Subhash Chandra Bose",
    ],
    answer: "Rabindranath Tagore",
  },
  {
    question:
      "Q30. Who was the first Indian to win the Nobel Prize in Physics?",
    choices: [
      "C. V. Raman",
      "Har Gobind Khorana",
      "Subrahmanyan Chandrasekhar",
      "Amartya Sen",
    ],
    answer: "C. V. Raman",
  },
  {
    question: "Q31. What is India’s highest honor?",
    choices: [
      "Param Vir Chakra",
      "Bharat Ratna",
      "Desh Ratna",
      "Maha Vir Chakra",
    ],
    answer: "Bharat Ratna",
  },
  {
    question: "Q32. Which is the highest civilian award of India?",
    choices: ["Bharat Ratna", "Padma Vibhushan", "Padma Bhushan", "Padma Shri"],
    answer: "Bharat Ratna",
  },
  {
    question: "Q33. Which is the biggest civilian award of India?",
    choices: ["Padma Bhushan", "Padma Shri", "Bharat Ratna", "Padma Vibhushan"],
    answer: "Bharat Ratna",
  },
  {
    question:
      "Q34. Which of the following leaders did NOT receive the Bharat Ratna?",
    choices: [
      "Morarji Desai",
      "B. R. Ambedkar",
      "Gopinath Bordoloi",
      "Mahatma Gandhi",
    ],
    answer: "Mahatma Gandhi",
  },
  {
    question:
      "Q35. What is the highest gallantry award in the field of defence in India?",
    choices: [
      "Bharat Ratna",
      "Param Vir Chakra",
      "Kirti Chakra",
      "Shaurya Chakra",
    ],
    answer: "Param Vir Chakra",
  },
];

// Variables
let CurrentQuestionIndex = 0;
let score = 0;
let quizOver = false;
let timeLeft = 30;
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
  questionDetails.choices.forEach((choice) => {
    const choiceDiv = document.createElement("div");
    choiceDiv.textContent = choice;
    choiceDiv.classList.add("choice");
    choicesBox.appendChild(choiceDiv);

    // Pre-select if user answered already
    if (userAnswers[CurrentQuestionIndex] === choice) {
      choiceDiv.classList.add("selected");
    }

    choiceDiv.addEventListener("click", () => {
      document
        .querySelectorAll(".choice")
        .forEach((c) => c.classList.remove("selected"));
      choiceDiv.classList.add("selected");
      userAnswers[CurrentQuestionIndex] = choice; // save user answer
    });
  });

  updateButtons();
  startTimer();
};

// Update prev/next button states
const updateButtons = () => {
  prevBtn.disabled = CurrentQuestionIndex === 0;
  nextBtn.disabled = CurrentQuestionIndex === quiz.length - 1;
};

// Check final score
const calculateScore = () => {
  score = 0;
  userAnswers.forEach((ans, index) => {
    if (ans === quiz[index].answer) score++;
  });

  const readCount = readQuestions.filter((r) => r).length;
  const notAnsweredCount = userAnswers.filter((ans) => ans === null).length;

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
  timeLeft = 30;
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
startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  container.style.display = "block";
  startQuiz();
});

nextBtn.addEventListener("click", () => {
  if (CurrentQuestionIndex < quiz.length - 1) {
    CurrentQuestionIndex++;
    showQuestions();
  }
});

prevBtn.addEventListener("click", () => {
  if (CurrentQuestionIndex > 0) {
    CurrentQuestionIndex--;
    showQuestions();
  }
});

submitBtn.addEventListener("click", () => {
  stopTimer();
  showScore();
});
