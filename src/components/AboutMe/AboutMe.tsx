import { Box, Typography } from "@mui/material";

const AboutMe = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          color: "#fff",
          textAlign: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "70vw",
            display: "flex",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          {/* This box is for video */}
          <Box
            sx={{
              background: "#0f0",
              minWidth: "500px",
              height: "500px",
              marginRight: "50px",
            }}
          ></Box>
          {/* This box is for description */}
          <Box sx={{}}>
            <Typography
              sx={{
                color: "#0f0",
                display: "block",
                fontSize: "2rem",
                fontFamily: "Courier New",
              }}
              variant="h1"
            >
              About me
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              quas modi a obcaecati alias possimus, voluptatibus voluptate
              voluptas aperiam exercitationem nesciunt inventore doloribus
              accusamus neque excepturi veritatis, tempora debitis sequi.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
