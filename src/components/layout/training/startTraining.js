import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";
import { useEffect, useState } from "react";
import { FiCheckSquare, FiSquare } from "react-icons/fi";
import { NeonButton } from "@/components/common/StyleButton";
import { useRouter } from "next/router";

export function StartTraining({
  training,
  setStep,
  highestNumber,
  setHighestNumber,
}) {
  const [checkState, setCheckState] = useState([]);
  const [inputData, setInputData] = useState({});
  const router = useRouter();

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

  function inputChance(series, index, id, inputValue) {
    if (inputValue === "") {
      if (inputData[id]) {
        const updatedIndexArray = inputData[id].index.filter(
          (item) => item !== index
        );
        const data = {
          ...inputData,
          [id]: {
            index: updatedIndexArray,
          },
        };
        setInputData(data);
        if (series !== data[id].index.length) {
          setCheckState(checkState.filter((item) => item !== id));
        }
      }
    }

    if (inputData[id] && inputData[id].index.includes(index)) {
      return;
    }

    const data = {
      ...inputData,
      [id]: {
        index: inputData[id] ? [...inputData[id].index, index] : [index],
      },
    };

    setInputData(data);

    if (series === data[id].index.length) {
      setCheckState([...checkState, id]);
    }
  }

  function inputChanceCircuits(index, id, inputValue) {
    if (inputValue === "") {
      if (inputData[index]) {
        const updatedIdArray = inputData[index].id.filter(
          (item) => item !== id
        );
        const data = {
          ...inputData,
          [index]: {
            id: updatedIdArray,
          },
        };
        setInputData(data);
        if (training.exercises.length !== data[index].id.length) {
          setCheckState(checkState.filter((item) => item !== index));
        }
      }
    }

    if (inputData[index] && inputData[index].id.includes(id)) {
      return;
    }

    const data = {
      ...inputData,
      [index]: {
        id:
          inputData[index] && inputData[index].id
            ? [...inputData[index].id, id]
            : [id],
      },
    };

    setInputData(data);

    if (training.exercises.length === data[index].id.length) {
      setCheckState([...checkState, index]);
    }
  }

  function postEx() {
    router.push("/training");
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
                {Array.from({ length: ex.series }, (_, i) => (
                  <Input
                    type="number"
                    placeholder="0"
                    onChange={(e) =>
                      inputChance(ex.series, i, ex.id, e.target.value)
                    }
                  ></Input>
                ))}
                {ex.series < highestNumber &&
                  Array.from(
                    { length: highestNumber - ex.series },
                    (_, index) => <FakeInput key={index}></FakeInput>
                  )}
                <CheckContainer>
                  {checkState.includes(ex.id) ? (
                    <Check></Check>
                  ) : (
                    <NoCheck></NoCheck>
                  )}
                </CheckContainer>
              </ExercisesContainer>
            ))}
          <NeonButton
            onClick={() => postEx()}
            hover={
              checkState.length === training.exercises.length ? true : false
            }
          >
            Finalizar treino
          </NeonButton>
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
                {Array.from({ length: highestNumber }, (_, i) => (
                  <Input
                    type="text"
                    placeholder="0"
                    onChange={(e) =>
                      inputChanceCircuits(i, ex.id, e.target.value)
                    }
                  ></Input>
                ))}
              </ExercisesContainer>
            ))}
          <ExcercisesHeader>
            <POne></POne>
            <PTwo></PTwo>
            {Array.from({ length: highestNumber }, (_, index) => (
              <CheckContainer type={training.type}>
                {checkState.includes(index) ? (
                  <Check></Check>
                ) : (
                  <NoCheck></NoCheck>
                )}
              </CheckContainer>
            ))}
          </ExcercisesHeader>
          <NeonButton
            onClick={() => postEx()}
            hover={
              checkState.length === training.exercises[0].series ? true : false
            }
            disabled={!(checkState.length === training.exercises[0].series)}
          >
            Finalizar treino
          </NeonButton>
        </>
      )}
    </Div>
  );
}

const FakeInput = styled.div`
  width: 60px;
  height: 22px;
  margin-left: 45px;
  margin-right: 45px;
`;

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
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
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
