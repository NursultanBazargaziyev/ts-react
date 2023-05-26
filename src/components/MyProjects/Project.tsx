import { FC, Suspense } from "react";
import { Box, Typography } from "@mui/material";
import { ProjectType } from "components/MyProjects/type";

import style from "./Projects.module.css";

const Project: FC<ProjectType> = ({ picture, title, description, link }) => {
  return (
    <Box sx={{ flex: "0 0 22%" }}>
      <Suspense fallback={<div style={{ color: "white" }}>Loading...</div>}>
        <video
          style={{ width: "300px", height: "300px" }}
          autoPlay
          muted
          loop
          id="myVideo"
        >
          <source src={picture} type="video/webm" />
        </video>
      </Suspense>

      <Typography
        className={style.title}
        component={(props) => <a href={link} {...props} />}
      >
        {title}
      </Typography>
      <Typography className={style.description}>{description}</Typography>
    </Box>
  );
};

export default Project;
