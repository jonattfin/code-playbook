import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import {
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Switch,
} from "@mui/material";
import styled from "@emotion/styled";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";

const pages = [
  { text: "About me", link: "/" },
  { text: "Projects", link: "/projects" },
  { text: "Blog", link: "/blog" },
  // { text: "About me", link: "/about-me" },
];

const ResponsiveAppBar = ({
  theme,
  setTheme,
}: {
  theme: string;
  setTheme: any;
}) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  return (
    <TopDiv>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.text}>
                    <ContainerDiv key={page.text}>
                      <Link href={page.link}>{page.text}</Link>
                    </ContainerDiv>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <ContainerDiv key={page.text}>
                  <Link href={page.link}>{page.text}</Link>
                </ContainerDiv>
              ))}
            </Box>
            <Stack direction="row" spacing={1} alignItems="center">
              <Switch
                checked={theme == "dark"}
                onChange={() => {
                  theme == "dark" ? setTheme("light") : setTheme("dark");
                }}
                inputProps={{ "aria-label": "controlled" }}
              />
              <a
                href={
                  "https://sonarcloud.io/project/information?id=jonattfin_the-pragmatic-geek"
                }
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={
                    "https://sonarcloud.io/api/project_badges/measure?project=jonattfin_the-pragmatic-geek&metric=alert_status"
                  }
                  alt="sonar url"
                />
              </a>
            </Stack>
            <ExtraParagraph />
            <a
              href="https://github.com/jonattfin"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon fontSize="small" />
            </a>
            <ExtraParagraph />
            <a
              href="https://www.linkedin.com/in/catalin-andrei-57936032"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon fontSize="small" />
            </a>
            <ExtraParagraph />
          </Toolbar>
        </Container>
      </AppBar>
    </TopDiv>
  );
};

export default ResponsiveAppBar;

const ContainerDiv = styled.div`
  padding: 10px;
`;

const TopDiv = styled.div`
  padding: 1vh 0px;
`;

const ExtraParagraph = styled.p`
  padding: 0px 10px;
`;
