// src/App.js
import React, { useState } from 'react';
import Home from './components/Home';
import PlayerSelect from './components/PlayerSelect';
import GameBoard from './components/GameBoard';
import History from './components/History';

function App() {
  const [screen, setScreen] = useState('home');
  const [mode, setMode] = useState(null);
  const [history, setHistory] = useState([]);

  const addToHistory = (result) => {
    setHistory(prev => [...prev, result]);
  };

  return (
    <div className="container mt-5">
      {screen === 'home' && <Home onStart={() => setScreen('select')} />}
      {screen === 'select' && <PlayerSelect onSelect={(m) => { setMode(m); setScreen('game'); }} />}
      {screen === 'game' && (
        <>
          <GameBoard
            mode={mode}
            onExit={() => setScreen('home')}
            addToHistory={addToHistory}
          />
          <History history={history} />
        </>
      )}
    </div>
  );
}

export default App;
