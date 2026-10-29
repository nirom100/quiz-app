let questionIndex = 0;

const questions = [
  {
    question:
      "Welcher Prozess wandelt Licht, Wasser und CO₂ in Zucker und Sauerstoff um?",
    answers: ["Fotosynthese", "Atmung", "Verdauung", "Gärung"],
    correctAnswer: "Fotosynthese",
  },
  {
    question: "Welcher Stoff gibt Pflanzenblättern ihre grüne Farbe?",
    answers: ["Karotin", "Chlorophyll", "Melanin", "Hämoglobin"],
    correctAnswer: "Chlorophyll",
  },
  {
    question: "Welcher Baum ist das Wahrzeichen Kanadas und liefert Sirup?",
    answers: ["Birke", "Ahorn", "Eiche", "Kiefer"],
    correctAnswer: "Ahorn",
  },
  {
    question:
      "Über welche Pflanzenteile nehmen die meisten Pflanzen Wasser aus dem Boden auf?",
    answers: ["Blätter", "Blüten", "Wurzeln", "Früchte"],
    correctAnswer: "Wurzeln",
  },
];

initQuiz();

function initQuiz() {
  questionItem = questions[questionIndex];
  renderQuestion(questionItem);
}

function renderQuestion(questionItem) {
  document.getElementById("question").textContent = questionItem.question;

  for (const [index, value] of questionItem.answers.entries()) {
    console.log(value);
    let buttonId = "answer-" + index;
    if (value != null) {
      document.getElementById(buttonId).textContent = value;
    }
  }
}

function nextQuestion() {
  resetResult();
  questionIndex++;
  questionItem = questions[questionIndex];
  if (questions[questionIndex] != null) {
    renderQuestion(questionItem);
  } else {
    questionIndex = 0;
    questionItem = questions[questionIndex];
    renderQuestion(questionItem);
  }
}

function showResult(answerId) {
  questionItem = questions[questionIndex];
  const value = document.getElementById(answerId).innerHTML;
  if (value == questionItem.correctAnswer) {
    document.getElementById(answerId).classList.add("button-correct");
    alert("Das war die richtige Antwort!");
  } else {
    document.getElementById(answerId).classList.add("button-wrong");
    alert("Das war leider die falsche Antwort! Versuche es nochmal.");
  }
}

function showAllResults() {
  questionItem = questions[questionIndex];
  for (const [index, value] of questionItem.answers.entries()) {
    let buttonId = "answer-" + index;
    if (value == questionItem.correctAnswer) {
      document.getElementById(buttonId).classList.add("button-correct");
    } else {
      document.getElementById(buttonId).classList.add("button-wrong");
    }
  }
}

function resetResult() {
  for (let i = 0; i < questions.length; i++) {
    const button = document.getElementById("answer-" + i);
    button.classList.remove("button-correct", "button-wrong");
  }
}
