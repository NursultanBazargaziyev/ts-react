import React, { FC } from "react";
import { Box } from "@mui/material";

import { CellValueType } from "projects/TikTakToeGame/type";

import CrossIcon from "components/assets/Icons/CrossIcon";
import CircleIcon from "components/assets/Icons/CircleIcons";

const Cell: FC<CellValueType> = ({ cellValue, onClick, key }) => {
  return (
    <Box
      onClick={(e) => {
        onClick(e, key);
      }}
      sx={cellStyle}
    >
      {(cellValue === "X" && <CrossIcon />) ||
        (cellValue === "O" && <CircleIcon />)}
    </Box>
  );
};

const cellStyle = {
  flex: "0 0 33.33%",
  height: "33.33%",
  display: "flex",
  borderRight: "2px #16a3fd solid",
  borderBottom: "2px #16a3fd solid",
  alignItems: "center",
  justifyContent: "center",
  "&:nth-of-type(3n)": {
    borderRight: "none",
  },
  "&:nth-of-type(6) ~ &": {
    borderBottom: "none",
  },
  "&:hover": {
    background: "#EF476F",
  },
};

export default Cell;
