import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { Box, List, ListItem, Button } from "@mui/material";

const GamesNav: FC = () => {
  const navigation = useNavigate();
  return (
    <Box>
      <Box sx={{ color: "white" }}>
        <List>
          <ListItem>
            <Button onClick={() => navigation("/g/tiktaktoe")}>Click me</Button>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default GamesNav;
