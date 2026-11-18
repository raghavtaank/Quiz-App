
import "./Start.css";

function Start({ onStart }) {
  return (
    <div className="start-container">
      <div className="start-box">
        <h1>Welcome to Quiz Application!</h1>

        <p className="start-description">
          Test your knowledge and see how much you know.
        </p>

        <div className="rules-box">
          <h2>Quiz Instructions</h2>

          <ul>
            <li>Each question has 4 options.</li>
            <li>Select only one answer.</li>
            <li>Use Next and Previous to navigate.</li>
            <li>You can skip any question.</li>
            <li>Your final score will be displayed at the end.</li>
            <li>You can restart the quiz after completion.</li>
          </ul>
        </div>

        <button onClick={onStart}>
          Start Quiz
        </button>
      </div>
    </div>
  );
}

export default Start;
