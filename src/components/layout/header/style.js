import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: #000000;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0px 30px 0px 30px;
  box-sizing: border-box;
  border-bottom: 2px solid #00d9ff;
  color: #00d9ff;
  box-shadow: 0 0 50px 5px #00d9ff, 0 0 20px #00d9ffc0;
  position: fixed;
  top: 0;
  z-index: 1;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  h1 {
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
    border-radius: 40px;
    border: 2px solid #00d9ff;
    box-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;
  }
`;

export const LogBar = styled.div`
  display: flex;
`;

export const BarNeon = styled.div`
  height: 40px;
  width: 2px;
  background-color: #00d9ff;
  border: 1px solid #00d9ff;
  border-radius: 4px;
  box-shadow: 0 0 50px #00d9ff, 0 0 15px #00d9ffc0;
  margin: 0 20px 0 20px;
`;
