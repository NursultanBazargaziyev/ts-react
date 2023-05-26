import { Box, Typography } from "@mui/material";

const Console = () => {
  return (
    <Box
      sx={{
        padding: "0 0 calc(10vh - 3rem)",
        width: "80%",
        margin: "0 auto",
        background: "rgba(0, 150, 0, 0.2)",
        borderRadius: "20px 20px 0 0",
      }}
    >
      <Box
        sx={{
          padding: "3rem 3rem",
        }}
      >
        <Typography sx={console__text}>[ root@guest about ]# ls -la</Typography>
        <Typography sx={console__text}>total 7</Typography>
        <Typography sx={console__text}>
          -rwxr--r-- 1 root nursultan{" "}
          <span style={{ color: "transparent", fontSize: "1.3rem" }}>0</span> 0
          May 22 19:05{" "}
          <Box sx={{ color: "#2a9df4", fontSize: "1.2rem" }} component="span">
            .
          </Box>
        </Typography>
        <Typography sx={console__text}>
          -rwxr--r-- 1 root nursultan{" "}
          <span style={{ color: "transparent", fontSize: "1.3rem" }}>0</span> 0
          May 22 19:05{" "}
          <Box sx={{ color: "#2a9df4", fontSize: "1.2rem" }} component="span">
            ..
          </Box>
        </Typography>
        <Typography sx={console__text}>
          -rwxr--r-- 1 root nursultan
          <span style={{ color: "transparent", fontSize: "1.3rem" }}>0</span> 95
          May 22 18:47{" "}
          <Box
            sx={{
              color: "rgba(191,191,191)",
              fontSize: "1.2rem",
              fontFamily: "GlassTTY VT220",
            }}
            component="span"
          >
            education.txt
          </Box>
        </Typography>
        <Typography sx={console__text}>
          -rwxr--r-- 1 root nursultan 143 May 22 18:47{" "}
          <Box
            sx={{
              color: "rgba(191,191,191)",
              fontSize: "1.2rem",
              fontFamily: "GlassTTY VT220",
            }}
            component="span"
          >
            experience.txt
          </Box>
        </Typography>
        <Typography sx={console__text}>
          -rwxr--r-- 1 root nursultan 166 May 22 19:04{" "}
          <Box
            sx={{
              color: "rgba(191,191,191)",
              fontSize: "1.2rem",
              fontFamily: "GlassTTY VT220",
            }}
            component="span"
          >
            skills.txt
          </Box>
        </Typography>
        <Typography sx={console__text}>
          [ root@guest about ]# cat{" "}
          <Box
            sx={{
              color: "rgba(191,191,191)",
              fontSize: "1.2rem",
              fontFamily: "GlassTTY VT220",
            }}
            component="span"
          >
            education.txt
          </Box>
        </Typography>
        <Typography sx={console__cat}>
          <span style={{ color: "#FF0000" }}>education: </span>
          <br />
          BS Education, University of Lodz <br />
          Mathematics and Computer Science
          <br />
          2020-Present
        </Typography>
        <Typography sx={console__text}>
          [ root@guest about ]# cat{" "}
          <Box
            sx={{
              color: "rgba(191,191,191)",
              fontSize: "1.2rem",
              fontFamily: "GlassTTY VT220",
            }}
            component="span"
          >
            experience.txt
          </Box>
        </Typography>
        <Typography sx={console__cat}>
          <span style={{ color: "#FF0000" }}>experience:</span>
          <br /> Andersen Lab 10/2022 - 01/2023 <br /> used tools: JavaScript,
          TypeScript, React.js, Redux.js, RTKQuery, Node.js, HTML/CSS, GitLab,
          RestAPI, Agile, Jira
        </Typography>
        <Typography sx={console__text}>
          [ root@guest about ]# cat{" "}
          <Box
            sx={{
              color: "rgba(191,191,191)",
              fontSize: "1.2rem",
              fontFamily: "GlassTTY VT220",
            }}
            component="span"
          >
            skills.txt
          </Box>
        </Typography>
        <Typography sx={console__cat}>
          <span style={{ color: "#FF0000" }}> my skills:</span>
          <br />
          languages: C++, Java, JavaScript/Typescript <br />
          tools: STL, React.js, Redux.js, RTKQuery, Node.js, HTML/CSS, RestAPI
          <br />
          computer science: Data structures, Algorithms, Dynamic programming,
          Object Oriented Programming
          <br />
          version control: Git, GitHub <br />
          os: Linux/Unix <br />
          methodologies: Agile
        </Typography>
      </Box>
    </Box>
  );
};

const console__text = {
  fontFamily: "GlassTTY VT220",
  letterSpacing: "0.1rem",
  fontSize: "1.2rem",
  color: "#0f0",
};

const console__cat = {
  fontFamily: "GlassTTY VT220",
  letterSpacing: "0.1rem",
  fontSize: "1.2rem",
  color: "#e39d24",
};

export default Console;
