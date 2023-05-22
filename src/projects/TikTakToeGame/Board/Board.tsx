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
      <Box sx={{ position: "absolute", top: "25%", right: "25%" }}>
        <Button onClick={handleGameReset}>Reset the game</Button>
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
                console.log(handleCheckWin(i, currentPlayer));
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
  width: "570px",
  height: "570px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  alignContent: "space-evenly",
};

export default Board;
