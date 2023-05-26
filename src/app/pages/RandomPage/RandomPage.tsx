import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import Cube from "projects/ThreeJs/Cube/Cube";
import ASCIICamera from "projects/Games/ASCIICamera/ASCIICamera";

const RandomPage = () => {
  return (
    <Box>
      <Routes>
        <Route path="cube" element={<Cube />} />
        <Route path="asciicamera" element={<ASCIICamera />} />
      </Routes>
    </Box>
  );
};

export default RandomPage;
