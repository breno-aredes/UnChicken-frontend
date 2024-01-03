import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { tokenExist } from "@/api/auth";

import { Body } from "../createTraining/styled";
import {
  Container,
  BarNeon,
  TrainingQueryContainer,
  StartTrainingEfect,
} from "./styled";

import { StartTraining } from "./startTraining/startTraining";
import ViewTraining from "./viewTraining/viewTraining";
import useGetTrainingById from "@/api/hooks/useGetTrainingById";

export function TrainingQuery() {
  const router = useRouter();
  const { id } = router.query;

  const { trainingById, getTrainingById, trainingByIdLoading } =
    useGetTrainingById(id);

  const [step, setStep] = useState(0);
  const [highestNumber, setHighestNumber] = useState(0);

  function startClicked() {
    setStep(1);
  }

  useEffect(() => {
    if (!id) return;
    try {
      getTrainingById(id);
    } catch (error) {}

    const tokenEx = tokenExist();
    if (!tokenEx) {
      router.push("/");
    }
  }, [id]);

  useEffect(() => {
    let internalHighestNumber = 0;

    if (trainingById) {
      trainingById.exercises.forEach((e) => {
        if (e.series > internalHighestNumber) {
          internalHighestNumber = e.series;
        }
      });
    }

    setHighestNumber(() => internalHighestNumber);
    console.log(highestNumber, internalHighestNumber);
  }, [trainingByIdLoading]);

  if (!trainingById) return <Body></Body>;

  return (
    <Body>
      <h1>{trainingById.name}</h1>
      <Container>
        <TrainingQueryContainer step={step}>
          <ViewTraining
            startClicked={startClicked}
            training={trainingById}
            id={id}
          ></ViewTraining>
        </TrainingQueryContainer>
        <StartTrainingEfect step={step} highestNumber={highestNumber}>
          <StartTraining
            training={trainingById}
            setStep={setStep}
            highestNumber={highestNumber}
          ></StartTraining>
        </StartTrainingEfect>
        <BarNeon></BarNeon>
      </Container>
    </Body>
  );
}
