import { FC, useState, useRef } from "react";
import { Box } from "@mui/material";

import Cell from "../Cell/Cell";

import useGameChanges from "../Hooks/useGameChanges";

const Board: FC = () => {
  const [currentPlayer, setcurrentPlayer] = useState<string>("");
  const [cells, setCells] = useState<string[]>([]);

  const { handlePlayerSwitch, handlePlayerMove } = useGameChanges();

  const linkref = useRef<HTMLDivElement[]>([]);

  return (
    <Box>
      <Box sx={{ position: "absolute", top: "0%", right: "0%" }}>
        {currentPlayer}
      </Box>
      <Box sx={boardStyles}>
        {[...Array(9)].map((_, i) => (
          <Cell
            onClick={(e, i) => {
              console.log(e.target, i);
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
