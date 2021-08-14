import React from "react";

function BassClef({ reload }) {
  return (
    <div className="BassClef">
      <h1>Bass Clef won!</h1>

      <button style={{ padding: "0 10px" }}>
        <h3 onClick={() => reload()}>Play Again</h3>
      </button>
    </div>
  );
}

export default BassClef;