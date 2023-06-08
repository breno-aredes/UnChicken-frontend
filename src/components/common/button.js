import styled from "styled-components";

export const NeonButton = styled.button`
  min-width: 100px;
  display: inline-block;
  text-decoration: none;
  padding: 10px 10px;
  border-radius: 10px;
  background-color: transparent;
  transition: box-shadow 0.1s;
  color: #808080;
  border: 2px solid #808080;
  font-family: "Roboto", sans-serif;

  ${(props) =>
    props.hover !== false &&
    `
    :hover {
      border: 2px solid #00d9ff;
      color: #00d9ff;
      box-shadow: 0 0 35px #00d9ff, 0 0 15px #00d9ffc0 inset;
      text-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;
      cursor: pointer;
    }
  `}

  ${(props) =>
    props.hover &&
    `
    border: 2px solid #00d9ff;
      color: #00d9ff;
      box-shadow: 0 0 35px #00d9ff, 0 0 15px #00d9ffc0 inset;
      text-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;
      cursor: pointer;
  `}
`;
