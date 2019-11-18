/* eslint-disable linebreak-style */
import React from 'react';

const PlayAgain = props => (
  <div className="game-done">
    <div
      className="message"
      style={{ color: props.gameStatus === 'lost' ? 'red' : 'green' }}
    >
      {props.gameStatus === 'lost' ? (
        <button onClick={props.onClick}>Play Again</button>
      ) : (
        <button onClick={props.startNextLevel}>Next Level</button>
      )}
    </div>
  </div>
);

export default PlayAgain;
