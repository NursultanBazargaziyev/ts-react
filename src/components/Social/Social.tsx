import { List, ListItem, Link, styled } from "@mui/material";

import GitHubIcon from "components/assets/Icons/GitHubIcon";
import LinkedinIcon from "components/assets/Icons/LinkedinIcon";

const StyledList = styled(List)({
  listStyle: "none",
  width: "200px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "@media (max-width: 900px)": {
    width: "150px",
  },
});

const SocialLinks = styled(Link)({
  display: "inline-block",
  textDecoration: "none",
  color: "#fff",
  width: "40px",
  height: "40px",
  "@media (max-width: 900px)": {
    width: "20px",
    height: "20px",
  },
});

const Social = () => {
  return (
    <StyledList>
      <ListItem>
        <SocialLinks
          href="https://github.com/NursultanBazargaziyev"
          target="_blank"
        >
          <GitHubIcon />
        </SocialLinks>
      </ListItem>
      <ListItem>
        <SocialLinks
          href="https://linkedin.com/in/nursultan-bazargaziyev/"
          target="_blank"
        >
          <LinkedinIcon />
        </SocialLinks>
      </ListItem>
    </StyledList>
  );
};

export default Social;
