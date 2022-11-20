import React from 'react'

// const message = winner
//     ? `Winner is ${winner}`
//     : `Next Palyer is ${current.isSameUser ? 'X' : 'O'}`;


function StatusMessage({winner,current}) {
  console.log('board' , current.board)
  console.log('winner',winner)
  const noMovesLeft =  current.board.every(el=> el !== null);
  console.log('nomoves ',noMovesLeft)
  return (
    <h2>
      {winner && !noMovesLeft && `Winner is ${winner}`} 
      {!winner && !noMovesLeft && `Next Player is ${current.isSameUser? 'X' : 'O'}`}
      {!winner && noMovesLeft && 'Game is Tied b/w X and O'}
    </h2>
  )
}

export default StatusMessage