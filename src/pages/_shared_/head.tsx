import styled from "@emotion/styled";
import { Head } from "next/document"

interface HeadProps {
  page: string;
}

var HeadComponent = (props: HeadProps) => {
  return (
    <>
      <title>Code playbook : {props.page}</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}

const ContainerDiv = styled.div`
  background-color: red;
`;

export default HeadComponent;