import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h1>Caça Palavras</h1>
      <button onClick={startGame}>JOGAR</button>
    </div>
  );
};

export default StartScreen;
