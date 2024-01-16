import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";

export const Div = styled.div`
  padding: 0px 0px 25px 25px;
`;

export const POne = styled.p`
  color: #bdbdbd;
  font-family: "Roboto", sans-serif;
  min-width: 250px;
  margin-bottom: 10px;
`;

export const PTwo = styled.p`
  color: #bdbdbd;
  font-family: "Roboto", sans-serif;
  width: 150px;
  text-align: center;
`;

export const PThree = styled.p`
  color: #bdbdbd;
  font-family: "Roboto", sans-serif;
  line-height: 20px;
  display: flex;
  width: 100%;
`;

export const DescriptionContainer = styled.div`
  margin-top: 30px;
  width: ${(props) => (props.type === "series" ? "550px" : "500px")};
  white-space: pre-wrap;
`;

export const Back = styled(BiArrowBack)`
  color: #808080;
  margin-top: 2px;
  font-size: 25px;
  font-family: "Roboto", sans-serif;
  margin-left: 10px;
`;

export const ExcercisesHeader = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const ExercisesContainer = styled.div`
  display: flex;
`;

export const PZero = styled.p`
  color: #bdbdbd;
  font-family: "Roboto", sans-serif;
  margin-bottom: 20px;
`;

export const BackContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  width: 230px;
  justify-content: space-between;
  align-items: center;
  h3 {
    margin-right: 10px;
    font-size: 20px;
    font-family: "Roboto", sans-serif;
    color: #808080;
  }
  :hover {
    h3 {
      color: #00d9ff;
      text-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;
    }
    & > svg {
      animation: moveBackIcon 0.5s alternate infinite;
      color: #00d9ff;
      text-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;
    }
  }

  @keyframes moveBackIcon {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(-10px);
    }
  }
`;

export const OptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  width: ${(props) => (props.type === "series" ? "550px" : "450px")};
`;
