import styled from "styled-components";

export default function SideBar({ iconClicked }) {
  return <SideBarContainer iconClicked={iconClicked}></SideBarContainer>;
}

const SideBarContainer = styled.div`
  width: 300px;
  height: 100%;
  background-color: black;
  position: fixed;
  right: ${({ iconClicked }) => (iconClicked ? "0" : "-300px")};
  top: 78px;
  z-index: 1;
  border-left: 2px solid #00d9ff;
  box-shadow: -20px 0 20px -20px #00d9ff, -20px 0 10px -20px #00d9ffc0;
  border-top: 2px solid #00d9ff;
  transition: right 0.3s ease;
`;
