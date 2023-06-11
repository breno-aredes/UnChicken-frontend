import styled from "styled-components";

export default function Dashboard() {
  return <DashContainer></DashContainer>;
}

const DashContainer = styled.div`
  width: 300px;
  height: 100%;
  background-color: black;
  position: fixed;
  right: 0;
  top: 78px;
  z-index: 1;
  border-left: 2px solid #00d9ff;
  box-shadow: -20px 0 20px -20px #00d9ff, -20px 0 10px -20px #00d9ffc0;
  border-top: 2px solid #00d9ff;
`;
