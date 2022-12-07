import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, createTheme, ThemeOptions } from "@mui/material/styles";
import { Grid } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { HeaderComponent } from "../src/pages/_shared_";
import styled from "@emotion/styled";

const blackColor = "#151B24";
const whiteColor = "white";

const getTheme = () => {
  const themeObject: ThemeOptions = {
    palette: {
      mode: "dark",
      background: {
        default: blackColor,
        paper: blackColor,
      },
      primary: {
        main: "#1976d2",
      },
    },
  };

  return createTheme(themeObject);
};

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("white");

  const MainContainer = getMainContainer(theme);

  return (
    <MainContainer>
      <ThemeProvider theme={getTheme()}>
        <Grid container>
          <Grid item md={3}></Grid>
          <Grid item md={6}>
            <nav>
              <HeaderComponent {...{ theme, setTheme }} />
            </nav>
            <ContentContainer>
              <main>
                <Component {...pageProps} />
              </main>
              <footer>
                <a
                  href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Powered by{" "}
                  <span>
                    <Image
                      src="/vercel.svg"
                      alt="Vercel Logo"
                      width={72}
                      height={16}
                    />
                  </span>
                </a>
              </footer>
            </ContentContainer>
          </Grid>
          <Grid item md={3}></Grid>
        </Grid>
      </ThemeProvider>
    </MainContainer>
  );
}

function getMainContainer(theme: string) {
  const color = theme == "dark" ? blackColor : whiteColor;
  return styled.div`
    background-color: ${color};
  `;
}

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
`;

export default MyApp;
