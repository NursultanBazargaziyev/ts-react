import { Box } from "@mui/material";

import AboutMe from "components/AboutMe/AboutMe";
import MySkills from "components/MySkills/MySkills";
import MyGoal from "components/MyGoals/MyGoal";
import Footer from "components/Footer/Footer";
import ContactMe from "components/ContactMe/ContactMe";
import Header from "components/Header/Header";

const MainPage = () => {
  return (
    <Box>
      <Header />
      <AboutMe />
      <MySkills />
      <MyGoal />
      <ContactMe />
      <Footer />
    </Box>
  );
};

export default MainPage;
