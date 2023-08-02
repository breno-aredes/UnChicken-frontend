import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";
import { useEffect, useState } from "react";
import { FiCheckSquare, FiSquare } from "react-icons/fi";

export function StartTraining({
  training,
  setStep,
  highestNumber,
  setHighestNumber,
}) {
  const [checkState, setCheckState] = useState([]);

  function BackClicked() {
    setStep(2);
    setTimeout(function () {
      setStep(3);
    }, 500);
    setTimeout(function () {
      setStep(0);
    }, 1000);
  }

  useEffect(() => {
    let highestNumber = 0;

    if (training) {
      training.exercises.forEach((e) => {
        if (e.series > highestNumber) {
          highestNumber = e.series;
        }
      });
    }
    setHighestNumber(highestNumber);
  }, [training]);

  function CheckClicked(exerciseId) {
    if (checkState.includes(exerciseId)) {
      setCheckState(checkState.filter((i) => i !== exerciseId));
    } else {
      setCheckState([...checkState, exerciseId]);
    }
  }

  return (
    <Div>
      <BackContainer onClick={() => BackClicked()}>
        <Back></Back>
        <h3>voltar para o resumo</h3>
      </BackContainer>

      {training.type === "series" && (
        <>
          <ExcercisesHeader>
            <POne>Exercícios</POne>
            <PTwo>Repetições</PTwo>
            {Array.from({ length: highestNumber }, (_, index) => (
              <PTwo key={index + 1}>{index + 1}º</PTwo>
            ))}
          </ExcercisesHeader>
          {training.exercises &&
            training.exercises.map((ex) => (
              <ExercisesContainer key={ex.id}>
                <POne>{ex.name}</POne>
                <PTwo>{ex.repetitions}</PTwo>
                {Array.from({ length: highestNumber }, () => (
                  <Input placeholder="0"></Input>
                ))}
                <CheckContainer onClick={() => CheckClicked(ex.id)}>
                  {checkState.includes(ex.id) ? (
                    <Check></Check>
                  ) : (
                    <NoCheck></NoCheck>
                  )}
                </CheckContainer>
              </ExercisesContainer>
            ))}
        </>
      )}

      {training.type === "circuit" && (
        <>
          <ExcercisesHeader>
            <POne>Exercícios</POne>
            <PTwo>Repetições</PTwo>
            {Array.from({ length: highestNumber }, (_, index) => (
              <PTwo key={index + 1}>{index + 1}º</PTwo>
            ))}
          </ExcercisesHeader>
          {training.exercises &&
            training.exercises.map((ex) => (
              <ExercisesContainer key={ex.id}>
                <POne>{ex.name}</POne>
                <PTwo>{ex.repetitions}</PTwo>
                {Array.from({ length: highestNumber }, () => (
                  <Input placeholder="0"></Input>
                ))}
              </ExercisesContainer>
            ))}
          <ExcercisesHeader>
            <POne>p</POne>
            <PTwo>p</PTwo>
            {Array.from({ length: highestNumber }, (_, index) => (
              <CheckContainer
                type={training.type}
                onClick={() => CheckClicked(index)}
              >
                {checkState.includes(index) ? (
                  <Check></Check>
                ) : (
                  <NoCheck></NoCheck>
                )}
              </CheckContainer>
            ))}
          </ExcercisesHeader>
        </>
      )}
    </Div>
  );
}

const CheckContainer = styled.div`
  width: ${(props) => (props.type === "circuit" ? "150px" : "20px")};
  text-align: ${(props) => (props.type === "series" ? "none" : "center")};
  margin-left: ${(props) => (props.type === "circuit" ? "0px" : "20px")};
`;

const Check = styled(FiCheckSquare)`
  font-size: 20px;
  color: #00d9ff;
  text-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;
`;

const NoCheck = styled(FiSquare)`
  font-size: 20px;
  color: #bdbdbd;
`;

export const Input = styled.input`
  width: 60px;
  height: 22px;
  padding: 2px 10px;
  font-size: 17px;
  color: ${(props) => (props.errorNeon ? "#ff5555" : "#00d9ff")};
  border: none;
  border-bottom: 2px solid
    ${(props) => (props.errorNeon ? "#ff5555" : "#00d9ff")};
  background-color: black;
  margin-right: 45px;
  margin-left: 45px;
  outline: none;
  text-align: center;
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

const ExercisesContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Div = styled.div`
  padding: 0px 0px 25px 25px;
`;

const ExcercisesHeader = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const POne = styled.p`
  color: #bdbdbd;
  font-family: "Roboto", sans-serif;
  min-width: 250px;
`;

const PTwo = styled.p`
  color: #bdbdbd;
  font-family: "Roboto", sans-serif;
  width: 150px;
  text-align: center;
`;

const BackContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  width: 233px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
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

const Back = styled(BiArrowBack)`
  color: #808080;
  margin-top: 2px;
  font-size: 25px;
  font-family: "Roboto", sans-serif;
  margin-left: 10px;
`;
