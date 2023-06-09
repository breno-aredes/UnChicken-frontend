import { NeonButton } from "@/components/common/StyleButton";
import styled from "styled-components";

export const StyleNeonButton = styled(NeonButton)`
  margin-top: 20px;
  font-size: 15px;
`;

export const Body = styled.div`
  background-image: linear-gradient(
      90deg,
      rgba(2, 0, 36, 0.5) 0%,
      rgba(0, 0, 0, 1) 57%
    ),
    url("acad_led_1.jpg");
  background-repeat: no-repeat;
  background-size: auto;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font-family: "Roboto", sans-serif;
`;

export const SignInContainer = styled.div`
  margin-top: 80px;
  padding: 30px;
  background-color: black;
  border: 2px solid #00d9ff;
  color: #00d9ff;
  box-shadow: 0 0 35px #00d9ff, 0 0 15px #00d9ffc0;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  h1 {
    margin-bottom: 20px;
    padding-bottom: 10px;
    color: #00d9ff;
    text-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;
    font-size: 40px;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
  }
  h2 {
    font-size: 12px;
    white-space: pre-line;
    color: #ff5555;
    text-shadow: 0px 0px 10px #ff5555cc, 0px 0px 3px #ff5555;
    margin-top: 7px;
  }
  h3 {
    margin-top: 40px;
    padding-bottom: 10px;
    color: #808080;
    font-size: 15px;
    font-weight: bold;
    white-space: pre-line;

    :hover {
      color: #00d9ff;
      text-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;
    }
  }

  form {
    display: flex;
    flex-direction: column;
  }
`;

export const Input = styled.input`
  width: 300px;
  padding: 2px 10px;
  font-size: 15px;
  color: ${(props) => (props.errorNeon ? "#ff5555" : "#00d9ff")};
  border: none;
  border-bottom: 2px solid
    ${(props) => (props.errorNeon ? "#ff5555" : "#00d9ff")};
  background-color: black;
  margin: 15px 0px;
  outline: none;
  box-shadow: ${(props) =>
    props.errorNeon
      ? "0 8px 15px -15px #ff5555, 0 8px 10px -5px #ff5555c0"
      : "0 8px 15px -15px #00d9ff, 0 8px 10px -5px #00d9ffc0"};
  border-radius: 10px;
  text-shadow: ${(props) =>
    props.errorNeon
      ? "0px 0px 10px #ff5555cc, 0px 0px 3px #ff5555"
      : "0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff"};

  :focus::-webkit-input-placeholder {
    color: transparent;
  }
  ::placeholder {
    color: #808080;
    text-shadow: none;
    font-size: 15px;
  }
`;
