import { tokenExist, useToken } from "@/api/auth";
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

  return (
    <Body>
      <h1>Minhas fichas</h1>
      {trainings.length === 0 ? (
        <>
          <h2>Você ainda não possui nenhuma ficha de treino.</h2>
          <h2>
            Se deseja criar uma ficha{" "}
            <span onClick={() => router.push("/createtraining")}>
              CLIQUE AQUI!
            </span>
          </h2>
          <h2>
            Se deseja ver fichas criadas por outros usuários{" "}
            <span onClick={() => router.push("/shortly")}>CLIQUE AQUI!</span>
          </h2>
        </>
      ) : (
        <ListTraining>
          {trainings.map((training) => (
            <TrainingContainer key={training.id}>
              <p>Nome do treino: {training.name}</p>
              <p>Tipo do treino: {training.type}</p>
              <p>Criado por: {training.user.name}</p>
            </TrainingContainer>
          ))}
        </ListTraining>
      )}
    </Body>
  );
}

const ListTraining = styled.div`
  display: flex;
`;

const TrainingContainer = styled.div`
  cursor: pointer;
  background-color: #000000;
  padding: 15px 10px 15px 15px;
  width: 280px;
  height: 100px;
  border-radius: 20px;
  margin-top: 20px;
  margin-right: 30px;
  margin-bottom: 30px;
  border: 2px solid #808080;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  :hover {
    border: 2px solid #00d9ff;
    box-shadow: 0 0 35px #00d9ff, 0 0 15px #00d9ffc0;
    p {
      color: #00d9ff;
      text-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;
    }
  }
  p {
    color: #808080;
    margin-top: 2px;
    font-family: "Roboto", sans-serif;
  }
`;

const Body = styled.div`
  background-color: #000000;
  min-height: 100vh;
  max-height: 100vh;
  width: 100%;
  padding: 5% 20% 10% 5%;
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

  span {
    text-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;
    color: #00d9ff;
    cursor: pointer;
  }
`;
