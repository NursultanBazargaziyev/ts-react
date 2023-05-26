import { List, Box, ListItem, Link } from "@mui/material";

import GitHubIcon from "components/assets/Icons/GitHubIcon";
import LinkedinIcon from "components/assets/Icons/LinkedinIcon";

const Social = () => {
  return (
    <Box>
      <List
        sx={{
          listStyle: "none",
          width: "200px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ListItem>
          <Link href="https://github.com/NursultanBazargaziyev">
            <GitHubIcon />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="linkedin.com/in/nursultan-bazargaziyev/">
            <LinkedinIcon />
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default Social;
