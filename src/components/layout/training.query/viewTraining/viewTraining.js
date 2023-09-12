import Link from "next/link";
import { NeonButton } from "@/components/common/StyleButton";

import {
  Div,
  POne,
  PTwo,
  PThree,
  Back,
  ExcercisesHeader,
  ExercisesContainer,
  PZero,
  BackContainer,
  OptionContainer,
} from "./styled";

export default function ViewTraining({ startClicked, training }) {
  return (
    <Div>
      <Link href={"/training"} style={{ textDecoration: "none" }}>
        <BackContainer>
          <Back></Back>
          <h3>voltar para as fichas</h3>
        </BackContainer>
      </Link>
      {training.type === "circuit" && (
        <>
          <PZero>
            Exercícios feitos em {training.exercises[0].series} circuitos
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
          <PZero>Exercícios feitos com séries</PZero>
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
        <NeonButton onClick={() => startClicked()}>Iniciar</NeonButton>
        <NeonButton>Relatorio do treino</NeonButton>
        <NeonButton>Deletar</NeonButton>
      </OptionContainer>
    </Div>
  );
}
