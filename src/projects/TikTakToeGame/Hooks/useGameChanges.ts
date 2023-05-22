import { SetStateAction, Dispatch } from 'react';
import {PlayerType} from '../type';


class Player {
  player: string;
  col: number[];
  row: number[];
  diag: number;
  counterDiag: number;

  constructor(player: string) {
    this.player = player;
    this.col = new Array(3).fill(0);
    this.row = new Array(3).fill(0);
    this.diag = 0;
    this.counterDiag = 0;
  }
}

let players = {
  X: new Player("X"),
  O: new Player("O"),
};

type ObjectKey = keyof typeof players;

let moves = 0;

const useGameChanges = () =>{
    const handlePlayerSwitch = (player: PlayerType['playerType'])=>{
        if(player === "") return 'X';
        return player === 'X'? 'O': 'X';
    }

    const handlePlayerMove = (i: number, cells:string[], currentPlayer: string, 
                              setCurrentPlayer: Dispatch<SetStateAction<string>>, 
                              setCells:Dispatch<SetStateAction<string[]>>
                              ) => {
          moves++;
          setCurrentPlayer(handlePlayerSwitch(currentPlayer));
          let temp = [...cells];
          temp[i] = currentPlayer;
          setCells(temp);
      };


      const handleCheckWin = (index: number, currentPlayer:string) => {
        const col = Math.floor(index / 3);
        const row = index % 3;
    
        players[currentPlayer as ObjectKey].col[col]++;
        players[currentPlayer as ObjectKey].row[row]++;
    
        if (col === row) {
          players[currentPlayer as ObjectKey].diag++;
        } else if (col + row + 1 === 3) {
          players[currentPlayer as ObjectKey].counterDiag++;
        }
        if (players[currentPlayer as ObjectKey].col[col] === 3)
          return currentPlayer;
        if (players[currentPlayer as ObjectKey].row[row] === 3)
          return currentPlayer;
        if (players[currentPlayer as ObjectKey].diag === 3) return currentPlayer;
        if (players[currentPlayer as ObjectKey].counterDiag === 3)
          return currentPlayer;
        if (moves === 9) return 'Tie';
        return "";
      };

      const handleResetGame = ()=>{
        players = { X: new Player("X"), O: new Player("O") };
        moves = 0;
      }

     return {handlePlayerSwitch, handlePlayerMove, handleCheckWin, handleResetGame}
}

export default useGameChanges;