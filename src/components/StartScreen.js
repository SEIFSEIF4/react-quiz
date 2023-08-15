function StartScreen({ numQuestions, dispatch }) {
  return (
    <div>
      <h2>Welcome to the quiz</h2>
      <h3>Start the quiz with {numQuestions} Questions</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default StartScreen;
