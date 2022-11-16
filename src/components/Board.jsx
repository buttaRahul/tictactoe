import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [boardState,setBoardState] = useState(Array(9).fill(null));
  const [isSameUser,setIsSameUser] = useState(true);
  // console.log(boardState);
  const handleSquareClick = pos=>{
    if(boardState[pos]) return;
    setBoardState(prev=>{
      return prev.map((value,index)=>{
        if(index==pos) return isSameUser ? 'X' : 'O';
        return value;
      })
    })
    setIsSameUser(prev=> !prev)
  }
  const renderSquare = pos => {
    return (
      <Square value={boardState[pos]} onClick = {()=>{handleSquareClick(pos)}} />
    );
  }
  return (
    <div className='board'>
      <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
