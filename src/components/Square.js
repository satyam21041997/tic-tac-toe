// src/components/Square.js
import React from 'react';
import './Square.css'; // Create this file for custom styling

const Square = ({ value, onClick, highlight, previewValue }) => (
  <button
    className={`square btn btn-outline-dark ${highlight ? 'bg-danger text-white' : ''}`}
    onClick={onClick}
  >
    {value ? value : <span className="preview">{previewValue}</span>}
  </button>
);

export default Square;
