import styled from "@emotion/styled";
import { Divider, Stack } from "@mui/material";
import { Bump } from "./components";
import * as api from "../../api";
import { useEffect, useState } from "react";

export default function AboutMe() {
  const [techStack, setTechStack] = useState<any[]>([]);

  useEffect(() => {
    const populateData = async () => {
      const data = await api.fetchTechStack();
      setTechStack(data);
    };
    populateData();
  }, []);

  return (
    <>
      <Stack
        divider={<Divider orientation="horizontal" flexItem />}
        spacing={2}
      >
        <Item>
          <h3>
            I&apos;m a software engineer passionate about technology and data
            science.
          </h3>
          <p>
            I have experience in .NET Core (on prem, cloud (Azure)) and
            Javascript (React / Node).
          </p>
          <p>
            My interests are: writing solid/clean code, system design, cloud computing & sustainable
            software architecture.
          </p>
        </Item>
        <Item>
          <h2>Tech Stack</h2>
          <BumpContainer>
            <Bump.CustomBump data={techStack} />
          </BumpContainer>
        </Item>
      </Stack>
    </>
  );
}

const Item = ({ children }: { children: any }) => {
  return <ContainerDiv>{children}</ContainerDiv>;
};

const ContainerDiv = styled.div`
  text-align: center;
  color: grey;
`;

const BumpContainer = styled.div`
  width: 40vw;
  height: 40vh;

  @media (max-width: 1024px) {
    width: 70vw;
  }
`;
