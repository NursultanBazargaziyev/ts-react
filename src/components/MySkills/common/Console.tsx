import { Box, Typography } from "@mui/material";

const Console = () => {
  return (
    <Box
      sx={{
        padding: "20vh 0",
        width: "70%",
        margin: "0 auto",
      }}
    >
      <Typography sx={console__text}>[ root@guest about ]# ls -la</Typography>
      <Typography sx={console__text}>total 7</Typography>
      <Typography sx={console__text}>
        -rwxr--r-- 1 root nursultan 0 May 22 19:05{" "}
        <Box sx={{ color: "#2a9df4", fontSize: "1.2rem" }} component="span">
          .
        </Box>
      </Typography>
      <Typography sx={console__text}>
        -rwxr--r-- 1 root nursultan 0 May 22 19:05{" "}
        <Box sx={{ color: "#2a9df4", fontSize: "1.2rem" }} component="span">
          ..
        </Box>
      </Typography>
      <Typography sx={console__text}>
        -rwxr--r-- 1 root nursultan 95 May 22 18:47{" "}
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
        [ root@guest about ]# cat education.txt
      </Typography>
      <Typography sx={console__cat}>
        education: <br />
        BS Education, University of Lodz <br />
        Mathematics and Computer Science
        <br />
        2020-Present
      </Typography>
      <Typography sx={console__text}>
        [ root@guest about ]# cat experience.txt
      </Typography>
      <Typography sx={console__cat}>
        experience: <br /> Andersen Lab 10/2022 - 01/2023 <br /> used tools:
        JavaScript, TypeScript, React.js, Redux.js, RTKQuery, Node.js, HTML/CSS,
        GitLab, RestAPI, Agile, Jira
      </Typography>
      <Typography sx={console__text}>
        [ root@guest about ]# cat skills.txt
      </Typography>
      <Typography sx={console__cat}>
        my skills: <br />
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
  color: "#fff",
};

export default Console;
