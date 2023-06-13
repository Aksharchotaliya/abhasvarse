const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const submitButton = document.getElementById('submit-btn');

// Sample quiz data
const quizData = [
  // ... (the rest of your quiz data here)
];

let currentQuestion = 0;

function loadQuestion() {
  const currentQuiz = quizData[currentQuestion];

  questionContainer.innerText = currentQuiz.question;
  optionsContainer.innerHTML = '';

  currentQuiz.options.forEach((option, index) => {
    const optionElement = document.createElement('label');
    optionElement.innerHTML = `<input type="radio" name="answer" value="${option}">${option}`;
    optionsContainer.appendChild(optionElement);
  });
}

function showResults() {
  quizContainer.innerHTML = `<h2>You've completed the quiz!</h2>
                             <p>Your score: ${calculateScore()} out of ${quizData.length}</p>`;
}

function calculateScore() {
  let score = 0;
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (selectedAnswer && selectedAnswer.value === quizData[currentQuestion].answer) {
    score++;
  }
  return score;
}

loadQuestion();

submitButton.addEventListener('click', () => {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (!selectedAnswer) {
    return;
  }

  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    showResults();
  }
});
