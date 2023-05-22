import { Box, Typography } from "@mui/material";

const myGoalsString = `#include<personality.h>

int main(int argc, char* argv[]) {

	std::string myGoals = 
  " My passion is to learn more about Computer science in general. I like to learn about Operating Systems, Networking," " Algorithms, Data structures,Math, Physics and 2D / 3D graphics."
		" I strive to utilize this knowledge to make a positive impact on people's lives. By starting with my own personal"  \n" growth, I aim to contribute towards creating a better world for everyone.";


    std::string factsAboutMe =
		" I'm into astronomy and everything related to it"
		" I love video games. "
		" I like cyberpunk and retro styles"
		" I like green tea. ";

  Person nursutaln = new Person(myGoals, factsAboutMe);
  

	return 0;
}`;

const MyGoal = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Typography sx={ide__text}>[ root@guest ~ ]# vim passion.cpp</Typography>

      <Typography sx={ide__text}>{myGoalsString}</Typography>
    </Box>
  );
};

const ide__text = {
  width: "70%",
  fontFamily: "GlassTTY VT220",
  whiteSpace: "pre-line",
  letterSpacing: "0.1rem",
  fontSize: "1.2rem",
  color: "#0f0",
};

export default MyGoal;
