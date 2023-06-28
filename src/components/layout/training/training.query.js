import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { tokenExist, useToken } from "@/api/auth";
import trainingApi from "@/api/services/trainingApi";
import styled from "styled-components";
import { Body } from "./createTraining";

export function TrainingQuery() {
  const router = useRouter();
  const { id } = router.query;

  const [training, setTraining] = useState([]);

  const token = useToken();

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;

      const trainingData = await trainingApi.trainingById(token, id);
      setTraining(trainingData);
      console.log(trainingData);
    };

    fetchData();

    const tokenEx = tokenExist();
    if (!tokenEx) {
      router.push("/");
    }
  }, [id]);

  return (
    <Body>
      <h1>{training.name}</h1>

      {training.type === "circuito" && (
        <>
          <PZero>
            Este treino é feito em {training.exercises[0].series} circuitos
          </PZero>
          <ExcercisesHeader>
            <POne>Exercícios</POne>
            <PTwo>Repetições</PTwo>
          </ExcercisesHeader>
          {training.exercises &&
            training.exercises.map((ex) => (
              <ExercisesContainer key={ex.id}>
                <POne>{ex.name}</POne>
                <PTwo>{ex.repetitions}</PTwo>
              </ExercisesContainer>
            ))}
        </>
      )}
      {training.type === "series" && (
        <>
          <PZero>Este treino é feito com séries</PZero>
          <ExcercisesHeader>
            <POne>Exercícios</POne>
            <PTwo>Séries</PTwo>
            <PTwo>Repetições</PTwo>
          </ExcercisesHeader>
          {training.exercises &&
            training.exercises.map((ex) => (
              <ExercisesContainer key={ex.id}>
                <POne>{ex.name}</POne>
                <PTwo>{ex.series}</PTwo>
                <PTwo>{ex.repetitions}</PTwo>
              </ExercisesContainer>
            ))}
        </>
      )}
      <PThree>Descrição: {training.description}</PThree>
    </Body>
  );
}

const ExcercisesHeader = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const ExercisesContainer = styled.div`
  display: flex;
`;

const PZero = styled.p`
  color: #808080;
  font-family: "Roboto", sans-serif;
  margin-bottom: 20px;
`;

const POne = styled.p`
  color: #808080;
  font-family: "Roboto", sans-serif;
  min-width: 250px;
  margin-bottom: 10px;
`;

const PTwo = styled.p`
  color: #808080;
  font-family: "Roboto", sans-serif;
  width: 150px;
  text-align: center;
`;

const PThree = styled.p`
  margin-top: 30px;
  color: #808080;
  font-family: "Roboto", sans-serif;
`;
