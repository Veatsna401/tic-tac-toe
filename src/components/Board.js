import React, { useState } from 'react';
import Square from './Square';
import Button from './Button';
import maly from '../assets/images/maly.png';
import kaia from '../assets/images/kaia.png';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner === maly) {
    status = 'Maly is the winner!';
  } else if (winner === kaia) {
    status = 'Kaia is the winner!';
  } else {
    status = "It's " + (xIsNext ? "Maly's" : "Kaia's")  + " turn";
  }

  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? maly : kaia;
    setSquares(squares);
    setXIsNext(!xIsNext);
  }

  const resetGame = () => {
    setSquares(Array(9).fill(null));
  }

  return (
    <div className="game-board">
      <div className="status">{status}</div>
      <div className="board">
        <div className="board-row">
          <Square value={squares[0]} onClick={() => handleClick(0)} />
          <Square value={squares[1]} onClick={() => handleClick(1)} />
          <Square value={squares[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onClick={() => handleClick(3)} />
          <Square value={squares[4]} onClick={() => handleClick(4)} />
          <Square value={squares[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onClick={() => handleClick(6)} />
          <Square value={squares[7]} onClick={() => handleClick(7)} />
          <Square value={squares[8]} onClick={() => handleClick(8)} />
        </div>
        <Button label="Reset Game" onClick={() => resetGame()} />
      </div>
    </div>
  );
}

export default Board;
