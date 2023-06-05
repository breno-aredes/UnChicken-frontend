import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: #000000;
  height: 80px;
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  h1 {
    color: #00fffd; /* Cor azul neon */
    margin-left: 20px;
    font-family: "Roboto", sans-serif;
    font-size: 40px;
    font-weight: bold;
    -webkit-text-stroke: 1px #00d9ff;
    -webkit-text-fill-color: transparent;
    text-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;
  }

  img {
    height: 60px;
    margin-left: 20px;
    border-radius: 40px;
    border: 2px solid #00d9ff;
    box-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;
  }
`;
