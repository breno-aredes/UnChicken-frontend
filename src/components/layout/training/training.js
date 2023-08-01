import { tokenExist } from "@/api/auth";
import useGetTrainings from "@/api/hooks/useGetTraining";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Training() {
  const router = useRouter();

  const { getTraining } = useGetTrainings();
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const trainingData = await getTraining();
      setTrainings(trainingData);
    };

    fetchData();

    const token = tokenExist();
    if (!token) {
      router.push("/");
    }
  }, []);

  const handleTrainingClick = (trainingId) => {
    router.push(`/training/${trainingId}`);
  };

  return (
    <Body>
      <h1>Minhas fichas</h1>
      {trainings.length === 0 ? (
        <>
          <h2>Você ainda não possui nenhuma ficha de treino.</h2>
          <h2>
            Se deseja criar uma ficha{" "}
            <Span onClick={() => router.push("/createtraining")}>
              CLIQUE AQUI!
            </Span>
          </h2>
          <h2>
            Se deseja ver fichas criadas por outros usuários{" "}
            <Span onClick={() => router.push("/shortly")}>CLIQUE AQUI!</Span>
          </h2>
        </>
      ) : (
        <ListTraining>
          {trainings.map((training) => (
            <TrainingContainer
              key={training.id}
              onClick={() => handleTrainingClick(training.id)}
            >
              <p>
                <span>Nome do treino: </span>
                {training.name.length > 35
                  ? training.name.substring(0, 35) + "..."
                  : training.name}
              </p>
              <p>
                <span>Tipo do treino: </span>
                {training.type === "circuit" ? "Circuito" : "Série"}
              </p>
              <p>
                {" "}
                <span>Criado por: </span> {training.user.name}
              </p>
            </TrainingContainer>
          ))}
        </ListTraining>
      )}
    </Body>
  );
}

const Span = styled.span`
  text-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;
  color: #00d9ff;
  cursor: pointer;
`;

const ListTraining = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TrainingContainer = styled.div`
  cursor: pointer;
  background-color: #000000;
  padding: 15px 10px 15px 15px;
  width: 280px;
  height: 110px;
  border-radius: 20px;
  margin-top: 30px;
  margin-right: 30px;
  border: 2px solid #808080;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  word-wrap: break-word;
  word-break: break-all;
  :hover {
    border: 2px solid #00d9ff;
    box-shadow: 0 0 35px #00d9ff, 0 0 15px #00d9ffc0;
    p {
      color: #00d9ff;
      text-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;
    }
  }
  p {
    line-height: 20px;
    color: #bdbdbd;
    font-family: "Roboto", sans-serif;
  }
  span {
    font-weight: bold;
  }
`;

const Body = styled.div`
  margin-top: 65px;
  background-color: #000000;
  min-height: calc(100vh - 65px);
  width: 100%;
  padding: 3% 20% 10% 5%;
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
    margin-left: 30px;
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
    font-family: "Roboto", sans-serif;
    color: #848484;
  }
`;
