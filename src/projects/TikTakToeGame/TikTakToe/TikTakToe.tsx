import { FC } from "react";
import { Box } from "@mui/material";
import Board from "../Board/Board";

import GameBoard from "../../../components/GameBoard/GameBoard";

const Game = () => {
  return (
    <Box>
      <Box sx={{ color: "#fff" }}>1</Box>
    </Box>
  );
};

const TikTakToe: FC = () => {
  return <GameBoard gameComp={<Game />} />;
};

export default TikTakToe;
