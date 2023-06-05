import styled from "styled-components";

export const NeonButton = styled.button`
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  padding: 10px 10px;
  border-radius: 10px;
  background-color: transparent;
  transition: box-shadow 0.1s;
  color: #575757;
  border: 2px solid #575757;

  :hover {
    border: 2px solid #00d9ff;
    color: #00d9ff;
    box-shadow: 0 0 35px #00d9ff, 0 0 15px #00d9ffc0 inset;
    text-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;
  }
`;
