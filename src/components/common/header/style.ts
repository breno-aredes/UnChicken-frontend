import styled from "styled-components";
import { VscThreeBars } from "react-icons/vsc";

export const Icon = styled(VscThreeBars)<{ iconClicked: any }>`
  cursor: pointer;
  ${({ iconClicked }) =>
    iconClicked
      ? "color: #00d9ff; text-shadow: 0px 0px 30px #00d9ff, 0px 0px 5px #00d9ffc0; "
      : "color: #808080;"}
`;

export const HeaderContainer = styled.div`
  font-size: 30px;
  background-color: #000000;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0px 0px 0px 30px;
  box-sizing: border-box;
  border-bottom: 2px solid #00d9ff;
  color: #00d9ff;
  box-shadow: 0 0 35px #00d9ff, 0 0 15px #00d9ffc0;
  position: fixed;
  top: 0;
  z-index: 1;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  h1 {
    margin-left: 10px;
    font-family: "Roboto", sans-serif;
    font-size: 35px;
    font-weight: bold;
    -webkit-text-stroke: 1px #00d9ff;
    -webkit-text-fill-color: transparent;
    text-shadow: 0px 0px 30px #00d9ff, 0px 0px 5px #00d9ffc0;
  }

  img {
    height: 50px;
    width: 50px;
    border-radius: 40px;
    border: 2px solid #00d9ff;
    box-shadow: 0px 0px 20px #00d9ffcc, 0px 0px 6px #00d9ff;
  }
`;

export const LogBar = styled.div<{ iconClicked?: any }>`
  display: flex;
  align-items: center;
  margin-right: 30px;

  width: 300px;
  justify-content: right;
  h1 {
    margin-right: 10px;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    font-family: "Roboto", sans-serif;

    ${({ iconClicked }) =>
      iconClicked
        ? "text-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;color: #00d9ff; "
        : "color: #808080;"}
  }
  img {
    margin-right: 12px;
    height: 50px;
    width: 50px;
    border-radius: 40px;
    background-color: #808080;
    border: 2px solid #808080;
    ${({ iconClicked }) =>
      iconClicked
        ? "border: 2px solid #00d9ff; box-shadow: 0px 0px 20px #00d9ffcc, 0px 0px 6px #00d9ff; background-color: #00d9ff; "
        : "color: #808080;"}
    :hover {
    }
  }
`;

export const BarNeon = styled.div`
  height: 40px;
  width: 2px;
  background-color: #00d9ff;
  border: 1px solid #00d9ff;
  border-radius: 4px;
  box-shadow: 0 0 20px 2px #00d9ffcc, 0 0 15px 1px #00d9ff;
  margin: 0 20px 0 20px;
`;
