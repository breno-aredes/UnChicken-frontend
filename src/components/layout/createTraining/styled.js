import styled from "styled-components";
import { FiPlusSquare, FiMinusSquare } from "react-icons/fi";
import { NeonButton } from "@/components/common/StyleButton";

export const CreateButton = styled(NeonButton)`
  margin-top: 25px;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  width: 170px;
  margin-top: 20px;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  h3 {
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    color: ${({ disabled }) => (disabled ? "#808080   " : "#00d9ff")};
    margin-left: 8px;
    text-shadow: ${({ disabled }) =>
      disabled ? "none" : "0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff"};
  }
`;

export const Icon = styled(FiPlusSquare)`
  font-size: 20px;
  font-family: "Roboto", sans-serif;
  text-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;
  color: #00d9ff;
`;

export const Icontwo = styled(FiMinusSquare)`
  margin-left: 10px;
  font-size: 20px;
  font-family: "Roboto", sans-serif;
  text-shadow: ${({ disabled }) =>
    disabled ? "none" : "0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff"};
  color: ${({ disabled }) => (disabled ? "#808080   " : "#00d9ff")};
`;

export const SequenceExercices = styled.div`
  padding-bottom: 10px;
  padding-top: 10px;
`;

export const Container = styled.div`
  display: flex;
`;

export const TextArea = styled.textarea`
  font-family: "Roboto", sans-serif;
  width: 450px;
  height: auto;
  min-height: 150px;
  max-height: 200px;
  padding: 10px;
  font-size: 15px;
  color: ${(props) => (props.errorNeon ? "#ff5555" : "#00d9ff")};
  border: none;
  border-bottom: 2px solid
    ${(props) => (props.errorNeon ? "#ff5555" : "#00d9ff")};
  background-color: black;
  margin-right: 20px;
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
    font-family: "Roboto", sans-serif;
  }
`;

export const TrainingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  margin-left: 30px;
`;

export const TypeContainer = styled.div`
  display: flex;
  align-items: end;
  margin-bottom: 40px;
`;

export const P = styled.p`
  color: #808080;
  font-size: 16px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
`;

export const Select = styled.select`
  height: 30px;
  width: 125px;
  padding: 5px;
  font-size: 15px;
  color: ${(props) => (props.value === "" ? "#808080" : "#00d9ff")};
  background-color: black;
  border: none;
  border-bottom: 2px solid #00d9ff;
  margin-right: 10px;
  outline: none;
  box-shadow: 0 8px 15px -15px #00d9ff, 0 8px 10px -5px #00d9ffc0;
  border-radius: 10px;
  text-shadow: ${(props) =>
    props.value === ""
      ? "none"
      : "0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff"};

  option:first-child {
    color: #808080;
  }
`;

export const ExerciceContainer = styled.div`
  margin-left: 50px;
  h1 {
    color: red;
  }
`;

export const Body = styled.div`
  margin-top: 65px;
  background-color: #000000;
  min-height: calc(100vh - 65px);
  width: 100%;
  padding: 3% 10% 10% 5%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  h1 {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 25px;
    font-weight: bold;
    font-family: "Roboto", sans-serif;
    text-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;
    color: #00d9ff;
  }
  h2 {
    margin-bottom: 20px;
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
    font-family: "Roboto", sans-serif;
    color: #00d9ff;
    text-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;
  }
`;

export const Input = styled.input`
  width: 300px;
  margin-top: 10px;
  height: 22px;
  padding: 2px 10px;
  font-size: 15px;
  color: ${(props) => (props.errorNeon ? "#ff5555" : "#00d9ff")};
  border: none;
  border-bottom: 2px solid
    ${(props) => (props.errorNeon ? "#ff5555" : "#00d9ff")};
  background-color: black;
  margin-right: 20px;
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

export const BarNeon = styled.div`
  width: 2px;
  background-color: #00d9ff;
  border: 1px solid #00d9ff;
  border-radius: 4px;
  box-shadow: 0 0 20px 2px #00d9ffcc, 0 0 15px 1px #00d9ff;
  margin: 0 20px 0 40px;
`;
