import React from "react";

function TrebleClef({ reload }) {
  return (
    <div className="TrebleClef">
      <h1>Treble Clef won!</h1>

      <button style={{ padding: "0 10px" }}>
        <h3 onClick={() => reload()}>Restart Game</h3>
      </button>
    </div>
  );
}

export default TrebleClef;
