import { Box } from "@mui/material";
import { MY_PROJECTS } from "constants";

import Project from "components/MyProjects/Project";
import Header from "components/Header/Header";

const MyProjects = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Box
        sx={{
          margin: "0 auto",
          width: "70%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {MY_PROJECTS.map((item, i) => (
          <Project
            key={i}
            picture={item.picture}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        ))}
      </Box>
    </Box>
  );
};

export default MyProjects;
