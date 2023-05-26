import { createScene } from "./CRTTerminalInit";
import { Box } from "@mui/material";

const CRTTerminal = () => {
  createScene();
  return (
    <Box>
      <canvas id="terminal" />
    </Box>
  );
};

export default CRTTerminal;
