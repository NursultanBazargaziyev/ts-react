import React, { FC } from "react";
import { Box } from "@mui/material";

import { CellValueType } from "projects/Games/TikTakToeGame/type";

import CrossIcon from "components/assets/Icons/CrossIcon";
import CircleIcon from "components/assets/Icons/CircleIcons";

const iconSize = {
  width: "2rem",
  height: "2rem",
};

const Cell: FC<CellValueType> = ({ cellValue, onClick }) => {
  let r = /\d+/;
  return (
    <Box onClick={() => onClick()} sx={cellStyle}>
      {(cellValue === "X" && <CrossIcon {...iconSize} />) ||
        (cellValue === "O" && <CircleIcon {...iconSize} />)}
    </Box>
  );
};

const cellStyle = {
  flex: "0 0 33.33%",
  height: "33.33%",
  display: "flex",
  borderRight: "2px rgba(0, 255, 0, 0.4) solid",
  borderBottom: "2px rgba(0, 255, 0, 0.4) solid",
  alignItems: "center",
  justifyContent: "center",
  "&:nth-of-type(3n)": {
    borderRight: "none",
  },
  "&:nth-of-type(6) ~ &": {
    borderBottom: "none",
  },
  "&:hover": {
    transition: "0.5s ",
    background: "rgba(0, 255, 0, 0.1) ",
  },
};

export default Cell;
