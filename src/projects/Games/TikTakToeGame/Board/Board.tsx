import { FC, useState } from "react";
import { Box, Button } from "@mui/material";

import Cell from "../Cell/Cell";

import useGameChanges from "../Hooks/useGameChanges";

const Board: FC = () => {
  const [currentPlayer, setCurrentPlayer] = useState<string>("X");
  const [cells, setCells] = useState<string[]>([]);

  const { handlePlayerMove, handleCheckWin, handleResetGame } =
    useGameChanges();

  const handleGameReset = () => {
    handleResetGame();
    setCells([]);
    setCurrentPlayer("X");
  };

  return (
    <Box>
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "transform(50%)",
          width: "200px",
        }}
      >
        <Button
          sx={{
            color: "#0f0",
            fontSize: "1.5rem",
            fontFamily: "GlassTTY VT220",
          }}
          onClick={handleGameReset}
        >
          Reset the game
        </Button>
      </Box>
      <Box sx={boardStyles}>
        {[...Array(9)].map((_, i) => (
          <Cell
            onClick={() => {
              if (!cells[i]) {
                handlePlayerMove(
                  i,
                  cells,
                  currentPlayer,
                  setCurrentPlayer,
                  setCells
                );
                const winner = handleCheckWin(i, currentPlayer);
                if (winner !== "") {
                  if (winner === "Tie") {
                    alert("That's a tie");
                  }
                  if (winner === "X") {
                    alert("X is winner");
                  }
                  if (winner === "O") {
                    alert("O is winner");
                  }
                  handleGameReset();
                }
              }
            }}
            cellValue={cells[i]}
            key={i}
          />
        ))}
      </Box>
    </Box>
  );
};

const boardStyles = {
  width: "500px",
  height: "500px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  alignContent: "space-evenly",
};

export default Board;
