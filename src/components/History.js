// src/components/History.js
import React from 'react';

const History = ({ history }) => (
  <div className="mt-4">
    <h5>Match History</h5>
    <ul className="list-group">
      {history.map((result, idx) => (
        <li key={idx} className="list-group-item">
          Game {idx + 1}: {result === 'Draw' ? 'Draw' : `${result} Wins`}
        </li>
      ))}
    </ul>
  </div>
);

export default History;
