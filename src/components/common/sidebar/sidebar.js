import styled from "styled-components";

export default function SideBar({ iconClicked }) {
  return (
    <SideBarContainer iconClicked={iconClicked}>
      <h1>Conta</h1>
      <BarNeon></BarNeon>
      <h1>Treinos</h1>
      <BarNeon></BarNeon>
      <h1>Conta</h1>
      <BarNeon></BarNeon>
      <h1>Conta</h1>
      <BarNeon></BarNeon>
      <h1>Conta</h1>
    </SideBarContainer>
  );
}

const SideBarContainer = styled.div`
  width: 300px;
  height: 100vh;
  background-color: black;
  position: fixed;
  right: ${({ iconClicked }) => (iconClicked ? "0" : "-300px")};
  top: 78px;
  z-index: 1;
  border-left: 2px solid #00d9ff;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;

  box-shadow: ${({ iconClicked }) =>
    iconClicked
      ? "-20px 0 30px -20px #00d9ff, -20px 0 10px -20px #00d9ffc0"
      : "none"};
  border-top: 2px solid #00d9ff;
  transition: right 0.3s ease;

  h1 {
    margin-right: 10px;

    font-size: 20px;
    font-weight: bold;
    font-family: "Roboto", sans-serif;
    color: #808080;

    :hover {
      text-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;
      color: #00d9ff;
    }
  }
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
