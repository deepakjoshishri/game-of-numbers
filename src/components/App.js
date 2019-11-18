import React, { useState } from 'react';
import Game from './Game';

const GameLevels = () => {
  const [level, setLevel] = useState(1);
  return (
    <StarMatch
      key={level}
      startNextLevel={() => setLevel(level + 1)}
      level={level}
    />
  );
};

const StarMatch = props => {
  const [gameId, setGameId] = useState(0);
  return (
    <Game
      key={gameId}
      startNewGame={() => setGameId(gameId + 1)}
      level={props.level}
      startNextLevel={props.startNextLevel}
    />
  );
};

export function App() {
  return <GameLevels />;
}
