// src/components/PlayerSelect.js
import React from 'react';

const PlayerSelect = ({ onSelect }) => (
  <div className="text-center mt-5">
    <h2>Select Game Mode</h2>
    <div className="mt-4">
      <button className="btn btn-secondary m-2" onClick={() => onSelect('2P')}>2 Players</button>
      <button className="btn btn-secondary m-2" onClick={() => onSelect('AI')}>Play with Computer</button>
    </div>
  </div>
);

export default PlayerSelect;
