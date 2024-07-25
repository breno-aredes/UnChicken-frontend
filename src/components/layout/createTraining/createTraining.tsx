import { tokenExist } from "@/api/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import useCreateTrainings from "@/api/hooks/useCreateTraining";

import {
  CreateButton,
  ButtonContainer,
  IconContainer,
  Icon,
  Icontwo,
  SequenceExercices,
  Container,
  TextArea,
  TrainingContainer,
  TypeContainer,
  P,
  Select,
  ExerciceContainer,
  Body,
  Input,
  BarNeon,
} from "./styled";

type ExerciseField = "name" | "repetitions" | "series";

export default function CreateTraining() {
  const router = useRouter();
  const [trainingName, setTrainingName] = useState("");
  const [exercises, setExercises] = useState([
    { name: "", repetitions: "", series: "" },
  ]);
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [countExercises, setCountExercises] = useState(1);
  const { createTraining } = useCreateTrainings();

  const [circuitSeries, setCircuitSeries] = useState("");

  useEffect(() => {
    const token = tokenExist();
    if (!token) {
      router.push("/");
    }
  }, []);

  function addExercise() {
    setCountExercises(countExercises + 1);
    setExercises((prevExercises) => [
      ...prevExercises,
      { name: "", repetitions: "", series: "" },
    ]);
  }

  function removeExercise() {
    if (countExercises > 1) {
      setCountExercises(countExercises - 1);
      setExercises((prevExercises) =>
        prevExercises.slice(0, prevExercises.length - 1)
      );
    }
  }

  function exerciseChange(index: number, field: ExerciseField, value: any) {
    const updatedExercises = [...exercises];
    updatedExercises[index][field] = value;

    if (type === "circuit") {
      updatedExercises.forEach((exercise) => {
        exercise.series = circuitSeries;
      });
    }

    setExercises(updatedExercises);
  }

  async function postTraining() {
    const convertedExercises = exercises.map((e) => ({
      ...e,
      repetitions: parseInt(e.repetitions, 10),
      series: parseInt(e.series, 10),
    }));

    const data = {
      name: trainingName,
      type,
      description,
      exercises: convertedExercises,
    };

    try {
      await createTraining(data);
      router.push("/training");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Body>
      <h1> Criar uma fichas</h1>
      <Container>
        <TrainingContainer>
          <h2>Dados da Ficha</h2>
          <TypeContainer>
            <Input
              placeholder="Nome da ficha (ex: Treino de perna...)"
              type="trainingName"
              maxLength={60}
              value={trainingName}
              onChange={(e) => setTrainingName(e.target.value)}
            />
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="" disabled>
                Tipo de ficha
              </option>
              <option value="circuit">Circuito</option>
              <option value="series">Série</option>
            </Select>
          </TypeContainer>
          <TextArea
            placeholder="Descrição (ex: Este treino é focado em hipertrofia, dos quadríceps ...)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={250}
          />
        </TrainingContainer>
        <BarNeon></BarNeon>
        <ExerciceContainer>
          <h2>Exercícios</h2>
          {type === "" ? (
            <P>selecione o tipo de ficha</P>
          ) : (
            <>
              {type === "circuit" && (
                <Input
                  placeholder="Séries do circuito"
                  style={{ width: "150px" }}
                  value={circuitSeries}
                  onChange={(e) => setCircuitSeries(e.target.value)}
                />
              )}

              {Array.from({ length: countExercises }).map((_, index) => (
                <SequenceExercices key={index}>
                  <Input
                    placeholder="Nome do exercício"
                    type="text"
                    value={exercises[index].name}
                    onChange={(e) =>
                      exerciseChange(index, "name", e.target.value)
                    }
                  />
                  {type !== "circuit" && (
                    <Input
                      placeholder="Séries"
                      style={{ width: "100px" }}
                      value={exercises[index].series}
                      onChange={(e) =>
                        exerciseChange(index, "series", e.target.value)
                      }
                    />
                  )}
                  <Input
                    placeholder="Repetições"
                    style={{ width: "100px" }}
                    value={exercises[index].repetitions}
                    onChange={(e) =>
                      exerciseChange(index, "repetitions", e.target.value)
                    }
                  />
                </SequenceExercices>
              ))}

              <ButtonContainer>
                <IconContainer onClick={() => addExercise()}>
                  <Icon></Icon>
                  <h3> Adicionar exercício </h3>
                </IconContainer>
                <IconContainer
                  onClick={() => removeExercise()}
                  disabled={countExercises === 1}
                >
                  <Icontwo disabled={countExercises === 1} />
                  <h3> Remover exercício </h3>
                </IconContainer>
              </ButtonContainer>

              <CreateButton onClick={() => postTraining()}>
                Criar Ficha
              </CreateButton>
            </>
          )}
        </ExerciceContainer>
      </Container>
    </Body>
  );
}
