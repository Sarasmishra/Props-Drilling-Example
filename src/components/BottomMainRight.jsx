import React from "react";

function BottomMainRight({ name }) {
  return (
    <div style={{ backgroundColor: "#ccc", padding: "10px", marginTop: "10px" }}>
      <h4>Bottom Main Right</h4>
      <p>User's Name: <strong>{name}</strong></p>
    </div>
  );
}

export default BottomMainRight;
