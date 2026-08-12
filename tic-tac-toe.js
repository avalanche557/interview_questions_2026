//tictactoe.js
//this is the component file 
import React, { useState } from "react";
import useTicTacToe from "./useTicTacToe";
import "../styles.css";

const TicTacToe = () => {
  const { board, checkWinner, onCellClick, resetGame, returnStatus } =
    useTicTacToe();
  return (
    <div class="game">
      <h2>Tic Tac Toe</h2>
      <div className="header">
        <span>{returnStatus()}</span>
        <button onClick={() => resetGame()}> Reset Game</button>
      </div>
      <div className="board">
        {board.map((_, index) => {
          return (
            <button
              onClick={() => onCellClick(index)}
              className="cell"
              key={index}
              disabled={board[index] !== null}
            >
              {board[index]}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TicTacToe;


//hooks for all the logic in ths file useTicTacToe.js
import { useState } from "react";

const initialBoad = () => Array(9).fill(null);
const useTicTacToe = () => {
  const [board, setBoard] = useState(initialBoad());
  const [isXTurn, setIsXTurn] = useState(true);

  //winning combination
  const WINNING_COMBINATION = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  //checkforwinner
  const checkWinner = (currentBoard) => {
    for (let i = 0; i < WINNING_COMBINATION.length; i++) {
      const [a, b, c] = WINNING_COMBINATION[i];
      console.log(a, b, c);
      console.log(currentBoard[a]);
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        console.log(currentBoard[a]);
        return currentBoard[a];
      }
    }
    return null;
  };
  //onClickevent
  const onCellClick = (index) => {
    const temp = board;
    isXTurn ? (temp[index] = "X") : (temp[index] = "O");
    setBoard([...temp]);
    setIsXTurn(!isXTurn);
  };
  //onresetEvent
  const resetGame = () => {
    setBoard(initialBoad());
    setIsXTurn(true);
  };
  //return status
  const returnStatus = () => {
    console.log(board);
    const winner = checkWinner(board);
    console.log(winner);

    if (winner) return `${winner} won!!!`;
    if (!board.includes(null)) return "Game Draw";
    return `Player ${isXTurn ? "X" : "O"} turn`;
  };

  return { board, checkWinner, onCellClick, resetGame, returnStatus };
};

export default useTicTacToe;


//css 
// .App {
//   font-family: sans-serif;
//   text-align: center;
// }

// .game {
//   width: 300px;
// }

// .header {
//   display: flex;
//   margin: 0 auto;
//   padding: 5px;
//   align-items: center;
//   justify-content: space-between;
// }

// .board {
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   justify-content: center;
// }

// .cell {
//   display: flex;
//   height: 100px;
//   width: 100px;
//   border: 1px solid black;
//   align-items: center;
//   justify-content: center;
// }
