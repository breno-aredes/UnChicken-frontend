import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { tokenExist, useToken } from "@/api/auth";
import trainingApi from "@/api/services/trainingApi";
import styled from "styled-components";
import { Body } from "./createTraining";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";
import { NeonButton } from "@/components/common/StyleButton";

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
      <Link href={"/training"} style={{ textDecoration: "none" }}>
        <BackContainer>
          <Back></Back>
          <h3>voltar</h3>
        </BackContainer>
      </Link>

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

      <OptionContainer type={training.type}>
        <NeonButton>Iniciar</NeonButton>
        <NeonButton>Relatorio do treino</NeonButton>
        <NeonButton>Deletar</NeonButton>
      </OptionContainer>
    </Body>
  );
}

const OptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  width: ${(props) => (props.type === "series" ? "550px" : "450px")};
`;

const BackContainer = styled.div`
  display: flex;
  width: 100px;
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

const Back = styled(BiArrowBack)`
  color: #808080;
  margin-top: 2px;
  font-size: 25px;
  font-family: "Roboto", sans-serif;
  margin-left: 10px;
`;

const ExcercisesHeader = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const ExercisesContainer = styled.div`
  display: flex;
`;

const PZero = styled.p`
  color: #bdbdbd;
  font-family: "Roboto", sans-serif;
  margin-bottom: 20px;
`;

const POne = styled.p`
  color: #bdbdbd;
  font-family: "Roboto", sans-serif;
  min-width: 250px;
  margin-bottom: 10px;
`;

const PTwo = styled.p`
  color: #bdbdbd;
  font-family: "Roboto", sans-serif;
  width: 150px;
  text-align: center;
`;

const PThree = styled.p`
  margin-top: 30px;
  color: #bdbdbd;
  font-family: "Roboto", sans-serif;
  width: ${(props) => (props.type === "series" ? "550px" : "450px")};
`;
