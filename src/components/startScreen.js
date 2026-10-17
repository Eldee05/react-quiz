function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome, </h2>
      <h3>
        Here you are going to take the react quiz, this will be to used to test
        your mastery
      </h3>
      <h4 className="">Using {numQuestions} questions for this session !!!</h4>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;
