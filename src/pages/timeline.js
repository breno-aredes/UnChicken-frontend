import Header from "@/components/common/header";
import styled from "styled-components";

export default function timeLine() {
  return (
    <>
      <Header></Header>
      <Body></Body>
    </>
  );
}

const Body = styled.div`
  margin-top: 80px;
  background-color: #000000;
  height: 100vh;
`;
