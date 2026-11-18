
import { useState, useEffect } from "react";
import questions from "../datas/questions";
import Result from "./result";
import "./quiz.css";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    document.title = `Question ${currentQuestion + 1} | Quiz App`;
  }, [currentQuestion]);

  const question = questions[currentQuestion];

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  // Calculate correct answers
  const correctAnswers = questions.filter(
    (question, index) =>
      answers[index] === question.correctAnswer
  ).length;

  // Calculate incorrect answers
  const incorrectAnswers = questions.filter(
    (question, index) =>
      answers[index] !== undefined &&
      answers[index] !== question.correctAnswer
  ).length;

  // Calculate skipped questions
  const skippedAnswers =
    questions.length - Object.keys(answers).length;

  // Calculate percentage
  const percentage =
    (correctAnswers / questions.length) * 100;

  // Select answer
  const handleAnswer = (option) => {
    setAnswers({
      ...answers,
      [currentQuestion]: option
    });
  };

  // Next question
  const handleNext = () => {
    if (currentQuestion === questions.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  // Restart quiz
  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
  };

  if (showResult) {
    return (
      <Result
        questions={questions}
        answers={answers}
        correctAnswers={correctAnswers}
        incorrectAnswers={incorrectAnswers}
        skippedAnswers={skippedAnswers}
        percentage={percentage}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <div className="quiz-container">

      <div className="quiz-box">

        <h1 className="quiz-title">
          Quiz Application
        </h1>

        <div className="question-info">
          <span>Question {currentQuestion + 1}</span>
          <span>Total: {questions.length}</span>
        </div>

        {/* Progress Bar */}
        <div className="progress-container">
          <div
            className="progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <h2 className="question-text">
          {question.question}
        </h2>

        {/* Options */}
        <div className="options-container">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className={`option-btn ${
                answers[currentQuestion] === option
                  ? "selected"
                  : ""
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Navigation */}
        <div className="navigation-buttons">

          <button
            onClick={() =>
              setCurrentQuestion(currentQuestion - 1)
            }
            disabled={currentQuestion === 0}
            className="previous-btn"
          >
            Previous
          </button>

          <button
            onClick={handleNext}
            className="next-btn"
          >
            {currentQuestion === questions.length - 1
              ? "Finish Quiz"
              : "Next"}
          </button>

        </div>

      </div>
    </div>
  );
}

export default Quiz;
