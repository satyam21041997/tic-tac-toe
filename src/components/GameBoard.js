// src/components/GameBoard.js
import React, { useState, useEffect } from 'react';
import Square from './Square';
import { calculateWinner, getBestMove } from '../utils/helpers';

const GameBoard = ({ mode, onExit, addToHistory }) => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winnerData, setWinnerData] = useState(null);

  useEffect(() => {
    if (mode === 'AI' && !xIsNext && !winnerData) {
      const aiMove = getBestMove(squares);
      if (aiMove !== -1) {
        setTimeout(() => handleMove(aiMove), 300);
      }
    }
  }, [squares, xIsNext, winnerData, mode]);

  const handleMove = (index) => {
    if (squares[index] || winnerData) return;

    const nextSquares = squares.slice();
    nextSquares[index] = xIsNext ? 'X' : 'O';

    const result = calculateWinner(nextSquares);
    setSquares(nextSquares);
    setXIsNext(!xIsNext);

    if (result) {
      setWinnerData(result);
      addToHistory(result.winner);
    } else if (!nextSquares.includes(null)) {
      setWinnerData({ winner: 'Draw', line: [] });
      addToHistory('Draw');
    }
  };

  const renderSquare = (i) => (
    <Square
      key={i}
      value={squares[i]}
      onClick={() => {
        if (
          (mode === '2P') || 
          (mode === 'AI' && xIsNext)
        ) {
          handleMove(i);
        }
      }}
      highlight={winnerData?.line.includes(i)}
      previewValue={!squares[i] && !winnerData ? (xIsNext ? 'X' : 'O') : ''}
    />
  );

  const handleRestart = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setWinnerData(null);
  };

  return (
    <div className="text-center mt-4">
      <h4>
        {winnerData
          ? `Result: ${winnerData.winner}`
          : `Turn: ${xIsNext ? 'X' : 'O'}${mode === 'AI' && !xIsNext ? ' (Computer)' : ''}`}
      </h4>
      <div className="d-flex flex-column align-items-center">
        {[0, 1, 2].map(row => (
          <div key={row} className="d-flex">
            {[0, 1, 2].map(col => renderSquare(row * 3 + col))}
          </div>
        ))}
      </div>
      <div className="mt-3">
        <button className="btn btn-success m-2" onClick={handleRestart}>Restart</button>
        <button className="btn btn-danger m-2" onClick={onExit}>Exit</button>
      </div>
    </div>
  );
};

export default GameBoard;
