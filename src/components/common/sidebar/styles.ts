import { AiOutlineCaretRight } from "react-icons/ai";
import { RiLogoutBoxRLine } from "react-icons/ri";
import styled, { css } from "styled-components";

export const BarTwo = styled.div`
  cursor: pointer;
  margin-top: 10px;
  width: 90%;
  font-family: "Roboto", sans-serif;

  p {
    margin-top: 1px;
    margin-bottom: 1px;
    padding: 10px;
    border-top: solid 1px #00d9ff;
    font-size: 15px;
    color: #808080;
    :hover {
      color: #00d9ff;
      text-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;
    }
  }
`;

export const Bar = styled.div<{ openIcon?: any }>`
  cursor: pointer;
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin-right: 10px;
    font-size: 20px;
    font-weight: bold;
    font-family: "Roboto", sans-serif;
    color: #808080;
  }
  :hover {
    h1 {
      color: #00d9ff;
      text-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;
    }
    & > svg {
      color: #00d9ff;
      text-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;
    }
  }
  ${(props) =>
    props.openIcon &&
    "h1 {color: #00d9ff;text-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;}"}
`;

export const LogOutIcon = styled(RiLogoutBoxRLine)`
  color: #808080;
  font-size: 20px;
`;

export const OpenIcon = styled(AiOutlineCaretRight)<{ openIcon: any }>`
  color: #808080;
  font-size: 20px;
  transition: transform 0.3s ease;

  ${(props) =>
    props.openIcon &&
    css`
      color: #00d9ff;
      text-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;
      transform: rotate(90deg);
    `}
`;

export const SideBarContainer = styled.div<{ iconClicked: any }>`
  width: 300px;
  height: 100vh;
  background-color: black;
  position: fixed;
  right: ${({ iconClicked }) => (iconClicked ? "0" : "-300px")};
  top: 63px;
  z-index: 1;
  border-left: 2px solid #00d9ff;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
  border-top: 2px solid #00d9ff;
  transition: right 0.3s ease;

  box-shadow: ${({ iconClicked }) =>
    iconClicked
      ? "-20px 0 30px -20px #00d9ff, -20px 0 10px -20px #00d9ffc0"
      : "none"};
`;

export const BarNeon = styled.div`
  height: 2px;
  width: 260px;
  background-color: #00d9ff;
  border: 1px solid #00d9ff;
  border-radius: 4px;
  box-shadow: 0 0 20px 2px #00d9ffcc, 0 0 15px 1px #00d9ff;
  margin: 20px;
`;
