import { FC } from "react";
import { Box, Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

import { GameBoardType } from "./types";

const GameBoard: FC<GameBoardType> = ({ gameComp }) => {
  const game = gameComp;
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#000",
        width: "100%",
        height: "100vh",
      }}
    >
      <Button
        sx={{
          position: "absolute",
          top: "10%",
          left: "10%",
        }}
        onClick={() => navigate(-1)}
      >
        Go back
      </Button>
      {game}
    </Box>
  );
};

export default GameBoard;
