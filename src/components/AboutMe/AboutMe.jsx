import { Box, Typography } from "@mui/material";

import ascii from "videos/ascii.webm";
import style from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <Box className={style.box_wrapper}>
      <div id="boxParent" className={style.box_parent}>
        {/* This box is for video */}
        <canvas style={{ display: "none" }} id="boxCanvas" />
        <video
          className={style.video_about}
          id="videoBox"
          autoPlay
          muted
          loop
          src={ascii}
        ></video>
        {/* This box is for description */}
        <Box sx={{ paddingLeft: "15px" }}>
          <p className={style.intro_main}>
            Hi, my name is <br />
            <span className={style.intro}>
              Bazargaziyev Nursultan. <br />
            </span>
          </p>
        </Box>
      </div>
    </Box>
  );
};

export default AboutMe;
