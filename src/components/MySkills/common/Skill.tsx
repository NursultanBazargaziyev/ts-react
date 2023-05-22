import { FC } from "react";
import { Box, Typography } from "@mui/material";

import { SkillType } from "components/MySkills/type";

const Skill: FC<SkillType> = ({ icon, text }) => {
  return (
    <Box
      sx={{
        padding: "2.7rem 1.5rem",
        width: "120px",
        height: "180px",
        flex: "0 0 22%",
        border: "2px rgba(178, 222, 39, 0.7) solid ",
      }}
    >
      {icon}
      <Typography>{text}</Typography>
    </Box>
  );
};

export default Skill;
