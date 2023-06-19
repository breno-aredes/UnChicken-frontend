import styled, { css } from "styled-components";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { AiOutlineCaretRight } from "react-icons/ai";
import { useState } from "react";

export default function SideBar({ iconClicked }) {
  const [openAccount, setOpenAccount] = useState(false);
  const [openWorkouts, setOpenWorkouts] = useState(false);
  const [openServices, setOpenServices] = useState(false);

  function logout() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <SideBarContainer iconClicked={iconClicked}>
      <Bar onClick={() => setOpenAccount(!openAccount)} openIcon={openAccount}>
        <p></p>
        <h1>Conta</h1>
        <OpenIcon openIcon={openAccount}></OpenIcon>
      </Bar>
      {openAccount && (
        <BarTwo>
          <p>Editar conta</p>
          <p>Mudar senha</p>
        </BarTwo>
      )}

      <BarNeon></BarNeon>

      <Bar
        onClick={() => setOpenWorkouts(!openWorkouts)}
        openIcon={openWorkouts}
      >
        <p></p>
        <h1>Treinos</h1>
        <OpenIcon openIcon={openWorkouts}></OpenIcon>
      </Bar>
      {openWorkouts && (
        <BarTwo>
          <p>Explorar</p>
          <p>Minha ficha</p>
          <p>Meus treinos</p>
        </BarTwo>
      )}

      <BarNeon></BarNeon>

      <Bar
        onClick={() => setOpenServices(!openServices)}
        openIcon={openServices}
      >
        <p></p>
        <h1>Serviços</h1>
        <OpenIcon openIcon={openServices}></OpenIcon>
      </Bar>
      {openServices && (
        <BarTwo>
          <p>Personal</p>
          <p>Nutricionista</p>
        </BarTwo>
      )}

      <BarNeon></BarNeon>

      <Bar onClick={() => logout()}>
        <p></p>
        <h1>Sair</h1>
        <LogOutIcon></LogOutIcon>
      </Bar>

      <BarNeon></BarNeon>
    </SideBarContainer>
  );
}

const BarTwo = styled.div`
  margin-top: 10px;
  width: 90%;

  p {
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

const Bar = styled.div`
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

const LogOutIcon = styled(RiLogoutBoxRLine)`
  color: #808080;
  font-size: 20px;
`;

const OpenIcon = styled(AiOutlineCaretRight)`
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

const SideBarContainer = styled.div`
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
