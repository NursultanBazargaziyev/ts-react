import { Box, Typography } from "@mui/material";
import Console from "components/MySkills/common/Console";

// import Skill from "./common/Skill";
// backup variant
// import { MY_SKILL_SET } from "constants";

const MySkills = () => {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      {/* <Box
        sx={{
          height: "60%",
          display: "flex",
          justifyContent: "space-around",
          alignContent: "space-around",
          flexWrap: "wrap",
          color: "#fff",
        }}
      > */}
      {/* {MY_SKILL_SET.map((item, index) => (
          <Skill key={index} icon={item.component} text={item.text} />
        ))} */}
      <Console />
      {/* </Box> */}
    </Box>
  );
};

export default MySkills;
