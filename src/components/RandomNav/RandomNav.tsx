import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const RandomNav = () => {
  const nav = useNavigate();
  return (
    <Box>
      <Button
        onClick={() => {
          nav("/r/cube");
        }}
      >
        Click me
      </Button>
    </Box>
  );
};

export default RandomNav;
