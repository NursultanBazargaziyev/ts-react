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
      <Box sx={console__parent}>
        <Typography sx={console__text}>[ root@guest about ]# ls -la</Typography>
        <Typography sx={console__text}>total 7</Typography>
        <Typography sx={console__text}>
          -rwxr--r-- 1 root nursultan{" "}
          <Typography sx={console__empty} component="span">
            0
          </Typography>{" "}
          0 May 22 19:05{" "}
          <Box sx={console__dot} component="span">
            .
          </Box>
        </Typography>
        <Typography sx={console__text}>
          -rwxr--r-- 1 root nursultan{" "}
          <Typography sx={console__empty} component="span">
            0
          </Typography>{" "}
          0 May 22 19:05{" "}
          <Box sx={console__dot} component="span">
            ..
          </Box>
        </Typography>
        <Typography sx={console__text}>
          -rwxr--r-- 1 root nursultan
          <Typography sx={console__empty} component="span">
            0
          </Typography>{" "}
          95 May 22 18:47{" "}
          <Box sx={console__file} component="span">
            education.txt
          </Box>
        </Typography>
        <Typography sx={console__text}>
          -rwxr--r-- 1 root nursultan 143 May 22 18:47{" "}
          <Box sx={console__file} component="span">
            experience.txt
          </Box>
        </Typography>
        <Typography sx={console__text}>
          -rwxr--r-- 1 root nursultan 166 May 22 19:04{" "}
          <Box sx={console__file} component="span">
            skills.txt
          </Box>
        </Typography>
        <Typography sx={console__text}>
          [ root@guest about ]# cat{" "}
          <Box sx={console__file} component="span">
            education.txt
          </Box>
        </Typography>
        <Typography sx={console__cat}>
          <span style={{ color: "#FF0000" }}>EDUCATION: </span>
          <br />
          BS Education, University of Lodz <br />
          Mathematics and Computer Science
          <br />
          2020-Present
        </Typography>
        <Typography sx={console__text}>
          [ root@guest about ]# cat{" "}
          <Box sx={console__file} component="span">
            experience.txt
          </Box>
        </Typography>
        <Typography sx={console__cat}>
          <span style={{ color: "#FF0000" }}>EXPERIENCE:</span>
          <br /> Andersen Lab 10/2022 - 01/2023 <br /> used tools: JavaScript,
          TypeScript, React.js, Redux.js, RTKQuery, Node.js, HTML/CSS, GitLab,
          RestAPI, Agile, Jira
        </Typography>
        <Typography sx={console__text}>
          [ root@guest about ]# cat{" "}
          <Box sx={console__file} component="span">
            skills.txt
          </Box>
        </Typography>
        <Typography sx={console__cat}>
          <span style={{ color: "#FF0000" }}> MY SKILLS:</span>
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
  fontFamily: "inherit",
  letterSpacing: "inherit",
  fontSize: "inherit",
  color: "#0f0",
};

const console__cat = {
  fontFamily: "inherit",
  letterSpacing: "inherit",
  fontSize: "inherit",
  color: "#e39d24",
};

const console__file = {
  color: "rgba(191,191,191)",
  fontFamily: "inherit",
  letterSpacing: "inherit",
  fontSize: "inherit",
};

const console__empty = {
  color: "transparent",
  fontSize: { xs: "0.6rem", sm: "1rem", lg: "1.3rem" },
};

const console__dot = {
  color: "#2a9df4",
  fontFamily: "inherit",
  letterSpacing: "inherit",
  fontSize: "inherit",
};

const console__parent = {
  padding: { xs: "1rem", lg: "3rem 3rem" },
  fontFamily: "GlassTTY VT220",
  // letterSpacing: { xs: "1" },
  fontSize: { xs: "0.5rem", sm: "0.9rem", lg: "1.2rem" },
};

export default Console;
