// src/components/Home.js
import React from 'react';

const Home = ({ onStart }) => (
  <div className="text-center mt-5">
    <h1 className="mb-4">Tic Tac Toe</h1>
    <button className="btn btn-primary btn-lg" onClick={onStart}>Play</button>
  </div>
);

export default Home;
