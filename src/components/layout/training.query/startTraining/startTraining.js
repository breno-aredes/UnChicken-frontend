import { useState } from "react";

import { NeonButton } from "@/components/common/StyleButton";
import { useRouter } from "next/router";

import {
  Back,
  BackContainer,
  PTwo,
  POne,
  ExcercisesHeader,
  Div,
  ExercisesContainer,
  Input,
  NoCheck,
  Check,
  CheckContainer,
  FakeInput,
} from "./styled";

export function StartTraining({ training, setStep, highestNumber }) {
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

  function postReports() {
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
              <ExercisesContainer key={ex.id + "a"}>
                <POne>{ex.name}</POne>
                <PTwo>{ex.repetitions}</PTwo>
                {Array.from({ length: ex.series }, (_, i) => (
                  <Input
                    key={`${ex.id}${i}`}
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
            onClick={() => postReports()}
            hover={
              checkState.length === training.exercises.length ? true : false
            }
            disabled={!(checkState.length === training.exercises.length)}
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
                    key={i}
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
              <CheckContainer type={training.type} key={training.type + index}>
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
