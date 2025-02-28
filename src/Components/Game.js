import { useState, useEffect } from "react";

const Game = () => {
  const [gameState, setGameState] = useState("waiting"); // 'waiting', 'ready', or 'clicked'
  const [message, setMessage] = useState("Click 'Start' to begin!");
  const [reactionTime, setReactionTime] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  const startGame = () => {
    setMessage("Wait for the color to change...");
    setGameState("waiting");

    const randomDelay = Math.floor(Math.random() * 3000) + 2000; // 2-5 seconds
    const timeout = setTimeout(() => {
      setGameState("ready");
      setStartTime(Date.now());
      setMessage("Click now!");
    }, randomDelay);

    setTimeoutId(timeout);
  };

  const handleClick = () => {
    if (gameState === "waiting") {
      setMessage("Too soon! Wait for the color to change.");
      clearTimeout(timeoutId);
    } else if (gameState === "ready") {
      const endTime = Date.now();
      setReactionTime(endTime - startTime);
      setGameState("clicked");
      setMessage(`Your reaction time is ${endTime - startTime} ms! Play again?`);
    }
  };

  useEffect(() => {
    return () => clearTimeout(timeoutId); // Clean up timeout on component unmount
  }, [timeoutId]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Reaction Time Game</h2>
      <p>{message}</p>
      <div
        style={{
          margin: "20px auto",
          width: "200px",
          height: "200px",
          backgroundColor: gameState === "waiting" ? "red" : gameState === "ready" ? "green" : "gray",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={handleClick}
      >
        {gameState === "clicked" && "Restart"}
      </div>
      {gameState === "clicked" && (
        <button
          onClick={startGame}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            marginTop: "20px",
          }}
        >
          Play Again
        </button>
      )}
      {reactionTime !== null && <h4>Your best time: {reactionTime} ms</h4>}
      {gameState !== "clicked" && (
        <button
          onClick={startGame}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            marginTop: "20px",
          }}
        >
          Start
        </button>
      )}
    </div>
  );
};

export default Game;
