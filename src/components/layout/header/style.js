import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: #000000;
  height: 100px;
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  h1 {
    color: white;
    margin-left: 20px;
    font-family: "Roboto", sans-serif;
    font-size: 40px;
    font-weight: bold;
  }

  img {
    height: 80px;
    margin-left: 20px;
  }
`;
