import { Box, Typography } from "@mui/material";

const myGoalsString = `

    
		

  Person nursutaln = new Person(myGoals, factsAboutMe);
  

	return 0;
}`;

const MyGoal = () => {
  return (
    <Box
      sx={{
        width: "80%",
        display: "flex",
        margin: "0 auto",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        borderTop: "1px #00ff00 solid",
      }}
    >
      <Box
        sx={{
          background: "rgba(0, 150, 0, 0.2)",
          padding: "10vh 3rem 3rem",
        }}
      >
        <Typography sx={ide__text}>
          [ root@guest ~ ]# vim passion.cpp
        </Typography>

        <Box sx={ide__text}>
          #<span style={{ color: "#ff0000" }}>include </span>
          {"<"}
          <span style={{ color: "#e39d24" }}>personality.h</span>
          {">"}
          <br />
          <span style={{ color: "#00ffb3" }}>int</span>{" "}
          <span style={{ color: "#eeff31" }}>main</span> (
          <span style={{ color: "#00ffb3" }}>int</span>
          <span style={{ color: "#e39d24" }}> argc</span>,
          <span style={{ color: "#00ffb3" }}> char* </span>
          <span style={{ color: "#e39d24" }}> argv[]</span>,) <br />
          <span style={{ color: "#00e1ff" }}>std</span>::
          <span style={{ color: "#00ff00" }}>string myGoals</span> = <br />
          <Typography
            sx={{
              fontFamily: "GlassTTY VT220",
              whiteSpace: "pre-line",
              letterSpacing: "0.1rem",
              fontSize: "1.2rem",
              color: "#ffa600",
            }}
          >
            {
              '"My passion is to learn more about Computer science in general. I like to learn about Operating Systems, Networking, Algorithms, Data structures,Math, Physics and 2D / 3D graphics.'
            }
            {
              "I strive to utilize this knowledge to make a positive impact on people's lives. By starting with my own personal growth, I aim to contribute towards creating a better world for everyone.\""
            }
          </Typography>
          <br />
          <span style={{ color: "#00e1ff" }}>std</span>::
          <span style={{ color: "#00ff00" }}>string factsAboutMe</span> = <br />
          <Typography
            sx={{
              fontFamily: "GlassTTY VT220",
              whiteSpace: "pre-line",
              letterSpacing: "0.1rem",
              fontSize: "1.2rem",
              color: "#ffa600",
            }}
          >
            {`" I'm into astronomy and everything related to it"
              " I love video games. "
              " I like cyberpunk and retro styles"
              " I like green tea. ";`}
          </Typography>
          <span style={{ color: "#00ff00" }}>Person nursultan</span> =
          <span style={{ color: "#00ffb3" }}> new</span>
          <span style={{ color: "#eeff31" }}> Person</span>(
          <span style={{ color: "#00ff00" }}>myGoals</span>,
          <span style={{ color: "#00ff00" }}> factsAboutMe</span>
          );
          <br />
          <br />
          <span style={{ color: "#ff0000" }}>return </span>
          0;
        </Box>
      </Box>
    </Box>
  );
};

const ide__text = {
  width: "70%",
  fontFamily: "GlassTTY VT220",
  whiteSpace: "pre-line",
  letterSpacing: "0.1rem",
  lineHeight: "1.5",
  fontSize: "1.2rem",
  color: "#0f0",
};

export default MyGoal;
