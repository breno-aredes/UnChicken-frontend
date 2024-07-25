import { tokenExist } from "@/api/auth";
import useGetTrainings from "@/api/hooks/useGetTraining";
import { NeonButton } from "@/components/common/StyleButton";
import Link from "next/link";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import {
  ButtonContainer,
  Span,
  ListTraining,
  TrainingContainer,
  Body,
} from "./styled";

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
          {trainings.map((training: any) => (
            <Link
              href={`/training/${training.id}`}
              style={{ textDecoration: "none" }}
            >
              {" "}
              <TrainingContainer key={training.id + training.name}>
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
            </Link>
          ))}
        </ListTraining>
      )}
      <ButtonContainer>
        <Link href={`/createtraining`}>
          <NeonButton>Criar Nova Ficha</NeonButton>
        </Link>
      </ButtonContainer>
    </Body>
  );
}
