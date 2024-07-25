import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Body = styled.div`
  background-color: #000000;
  min-height: 100vh;
  max-height: 100vh;
  padding: 5% 10% 10% 5%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  h1 {
    font-family: "Roboto", sans-serif;
    font-size: 35px;
    font-weight: bold;
    -webkit-text-stroke: 1px #00d9ff;
    -webkit-text-fill-color: transparent;
    text-shadow: 0px 0px 30px #00d9ff, 0px 0px 5px #00d9ffc0;
  }
`;
