import { useState } from "react";
import "./App.css";
function Square({ value, onSquareClick }) {
  return (
    <>
      <button onClick={onSquareClick} className="square">
        {value}
      </button>
    </>
  );
}

export default function Board() {
  const [isNext, setNext] = useState(true);
  const [element, setElement] = useState(Array(9).fill(null));
  function handleClick(i) {
    const newArray = element.slice();

    if (newArray[i]) {
      return;
    }

    if (isNext) {
      newArray[i] = "X";
    } else {
      newArray[i] = "O";
    }
    setElement(newArray);
    setNext(!isNext);
  }

  const winner = Winner();
  let status;
  if (winner) {
    status = " Winner " + winner;
  } else {
    status = " Next turn" + (isNext ? " X " : " O");
  }
  function Winner() {
    const l = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [0, 4, 8],
    ];
    for (let i = 0; i < l.length; i++) {
      const [a, b, c] = l[i];
      if (
        element[a] &&
        element[a] === element[b] &&
        element[a] === element[c]
      ) {
        return element[a];
      }
    }
  }

  return (
    <>
    <div className="container">
        <div>Winner is :{status}</div>
      <div className="board-row">
        <Square
          onSquareClick={() => {
            handleClick(0);
          }}
          value={element[0]}
        />
        <Square
          onSquareClick={() => {
            handleClick(1);
          }}
          value={element[1]}
        />
        <Square
          onSquareClick={() => {
            handleClick(2);
          }}
          value={element[2]}
        />
      </div>
      <div className="board-row">
        <Square
          onSquareClick={() => {
            handleClick(3);
          }}
          value={element[3]}
        />
        <Square
          onSquareClick={() => {
            handleClick(4);
          }}
          value={element[4]}
        />
        <Square
          onSquareClick={() => {
            handleClick(5);
          }}
          value={element[5]}
        />
      </div>
      <div className="board-row">
        <Square
          onSquareClick={() => {
            handleClick(6);
          }}
          value={element[6]}
        />
        <Square
          onSquareClick={() => {
            handleClick(7);
          }}
          value={element[7]}
        />
        <Square
          onSquareClick={() => {
            handleClick(8);
          }}
          value={element[8]}
        />
      </div>
    </div>
    </>
  );
}
