import React from "react";

function Draw({ reload }) {
  return (
    <div className="draw">
      <h1>Draw / Tie</h1>

      <button style={{ padding: "0 10px" }}>
        <h3 onClick={() => reload()}>Restart</h3>
      </button>
    </div>
  );
}

export default Draw;