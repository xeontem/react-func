import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const BOARD = new Array(3).fill([]).map((arr, ind) => new Array(3).fill(0).map((v, i) => ({ ind: i + (ind * 3), owner: null })));

const Square = ({ item, setPlayer, currentPlayer }) => {
  const [ value, setValue ] = useState('');
  const cb = () => {
    setPlayer(currentPlayer);
    setValue(currentPlayer);
  }
  return (
    <button className="square" onClick={cb}>
      {item.ind}
    </button>
  );
}

const Board = ({ board }) => {
  const [ currentPlayer, setCurrentPlayer ] = useState('x');
  const setPlayer = x => setCurrentPlayer(x === 'x' ? 'o' : 'x');
  return (
    <div>
      <div className="status">Next player: {currentPlayer}</div>
      {board.map(row => (
        <div className="board-row">
          {row.map(item => (
            <Square index={item} setPlayer={setPlayer} currentPlayer={currentPlayer} />
          ))}
        </div>
      ))}
    </div>
  );
}

const Game = ({ board }) =>
  <div className="game">
    <div className="game-board">
      <Board board={board} />
    </div>
    <div className="game-info">
      <div>{/* status */}</div>
      <ol>{/* TODO */}</ol>
    </div>
  </div>;

// =======================================

ReactDOM.render(
  <Game board={BOARD} />,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
