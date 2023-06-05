import Header from "@/components/layout/header";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Header />
      <Body></Body>
    </>
  );
}

const Body = styled.div`
  background-image: linear-gradient(
      90deg,
      rgba(2, 0, 36, 0.5) 0%,
      rgba(0, 0, 0, 1) 57%
    ),
    url("acad_led_1.jpg");
  background-repeat: no-repeat;
  background-size: auto;
  height: 100vh;
`;
