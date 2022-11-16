import React, { useState } from 'react';
import Board from './components/Board';
import {calculateWinner} from './helper';
import './styles/root.scss';

const App = () => {
  const [boardState,setBoardState] = useState(Array(9).fill(null));
  const [isSameUser,setIsSameUser] = useState(true);
  // console.log(boardState);
  const winner = calculateWinner(boardState);
  const message = winner ? `Winner is ${winner}` : `Next Palyer is ${isSameUser ? 'X' : 'O'}`;
  const handleSquareClick = pos=>{
    if(boardState[pos] || winner) return;
    setBoardState(prev=>{
      return prev.map((value,index)=>{
        if(index==pos) return isSameUser ? 'X' : 'O';
        return value;
      })
    })
    setIsSameUser(prev=> !prev)
  }

  return (
    <div className='app'>
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board boardState={boardState} handleSquareClick={handleSquareClick}/>
    </div>
  );
};

export default App;
