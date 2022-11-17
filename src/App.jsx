import React, { useState } from 'react';
import Board from './components/Board';
import {calculateWinner} from './helper';
import './styles/root.scss';

const App = () => {
  const [boardState,setBoardState] = useState(Array(9).fill(null));
  const [isSameUser,setIsSameUser] = useState(true);

  const [history , setHistory] = useState([{board:Array(9).fill(null),isSameUser:true}])
  const[currentMove,setCurrentMove] = useState(0)
  const current = history[currentMove]

  const winner = calculateWinner(current.board);
  const message = winner ? `Winner is ${winner}` : `Next Palyer is ${current.isSameUser ? 'X' : 'O'}`;

  const handleSquareClick = pos=>{
    if(current.board[pos] || winner) return;
    setHistory(prev=>{
       const last = prev[prev.length - 1]
       const newBoard = last.board.map((square,index)=>{
        if(pos == index)  return last.isSameUser ? 'X' : 'O';
        return square;
       })
       return prev.concat({board:newBoard,isSameUser:!last.isSameUser})
    })
    setCurrentMove(prev => prev + 1);
   }

  return (
    <div className='app'>
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board boardState={current.board} handleSquareClick={handleSquareClick}/>
    </div>
  );
};

export default App;
