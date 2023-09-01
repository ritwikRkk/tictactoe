import React from 'react';
import "./square.css";

const Square = (props) => {
  const { gameOver, highlight, value, click } = props;
  return (
    <div className={`square ${highlight && "red"} ${gameOver && "disabled"}`} onClick={click}>
      <p className="square-cell" >{value}</p>
    </div>
  )
}

export default Square;