import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
// import CRTTerminal from "components/CRTTerminal/CRTTerminal";

import Cube from "projects/ThreeJs/Cube/Cube";

const RandomPage = () => {
  return (
    <Box>
      <Routes>
        <Route path="cube" element={<Cube />} />
      </Routes>
    </Box>
  );
};

export default RandomPage;
