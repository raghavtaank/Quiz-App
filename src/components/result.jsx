import "./Result.css";
function Result ({ questions,answers,correctAnswers,incorrectAnswers,skippedAnswers ,percentage,onRestart}){
    return(
        <div className="result-container">
            <div className="result-box">
                <h1>
                    Quiz Completed!
                </h1>
                <div className="score">
                    <h2> {percentage.toFixed(0)}%</h2>
                    <p> Your Final Score</p>
                </div>
                <div className="score-details">
                    <div>
                        <h3>{questions.length}</h3>
                        <p> Total</p>
                    </div> 
                    <div>
                        <h3>{correctAnswers}</h3>
                        <p>Correct</p>
                    </div>
                    <div>
                        <h3>{incorrectAnswers}</h3>
                        <p> InCorrect</p>
                    </div>
                    <div>
                        <h3>{skippedAnswers}</h3>
                        <p>Skipped</p>
                    </div>
                 </div>

                 <h2> Answers Review</h2>

                 {questions.map((question,index) =>{
                    const isCorrect = answers[index] === question.correctAnswer;

                    return(
                        <div className="review-box" key={question.id}> 
                          <h3>
                             {index + 1}. {question.question}
                          </h3>
                         <p className={ !answers[index] ? "skipped": isCorrect ? "correct" : "incorrect"}>
                            Your Answer : {answers[index] || "Skipped"}
                         </p>
                             <p className="correct">
                                Correct Answer :{question.correctAnswer}
                             </p>
                        </div>

                    )
                 })}

                 <button onClick={onRestart}>
                    Restart Quiz
                 </button>

            </div>
        </div>
    )
}

export default Result;