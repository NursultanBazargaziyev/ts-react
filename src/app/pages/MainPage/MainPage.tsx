import { Box } from "@mui/material";

import AboutMe from "components/AboutMe/AboutMe";
import MySkills from "components/MySkills/MySkills";
import MyGoal from "components/MyGoals/MyGoal";
import Footer from "components/Footer/Footer";

const MainPage = () => {
  return (
    <Box>
      <AboutMe />
      <MySkills />
      <MyGoal />
      <Footer />
    </Box>
  );
};

export default MainPage;
