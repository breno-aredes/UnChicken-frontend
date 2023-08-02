import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { tokenExist } from "@/api/auth";
import styled from "styled-components";
import { Body } from "./createTraining";

import { StartTraining } from "./startTraining";
import ViewTraining from "./viewTraining";
import useGetTrainingById from "@/api/hooks/useGetTrainingById";

export function TrainingQuery() {
  const router = useRouter();
  const { id } = router.query;

  const { trainingById, getTrainingById } = useGetTrainingById(id);

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

  if (!trainingById) return <Body></Body>;

  return (
    <Body>
      <h1>{trainingById.name}</h1>
      <Container>
        <TrainingQueryContainer step={step}>
          <ViewTraining
            startClicked={startClicked}
            training={trainingById}
          ></ViewTraining>
        </TrainingQueryContainer>
        <StartTrainingEfect
          step={step}
          highestNumber={highestNumber * 100 + 660}
        >
          <StartTraining
            training={trainingById}
            setStep={setStep}
            highestNumber={highestNumber}
            setHighestNumber={setHighestNumber}
          ></StartTraining>
        </StartTrainingEfect>
        <BarNeon></BarNeon>
      </Container>
    </Body>
  );
}

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
`;

const BarNeon = styled.div`
  width: 2px;
  background-color: #00d9ff;
  border: 1px solid #00d9ff;
  border-radius: 4px;
  box-shadow: 0 0 20px 2px #00d9ffcc, 0 0 15px 1px #00d9ff;
`;

const TrainingQueryContainer = styled.div`
  width: 500px;
  white-space: nowrap;
  display: ${(props) => props.step === 2 && "none"};
  animation: ${(props) =>
    props.step === 1
      ? "removeInfo 0.5s ease forwards"
      : props.step === 3 || props.step === 0
      ? "infoAppears 0.5s ease forwards"
      : "none"};

  overflow: hidden;
  animation-delay: ${(props) => props.step === 2 && "0.5s"};

  @keyframes removeInfo {
    from {
      width: 650px;
    }
    to {
      width: 0;
    }
  }

  @keyframes infoAppears {
    from {
      width: 0;
    }
    to {
      width: 650px;
    }
  }
`;

const StartTrainingEfect = styled.div`
  display: ${(props) => (props.step === 0 ? "none" : "flex ")};
  width: 0;
  white-space: nowrap;
  overflow: hidden;
  animation: ${(props) =>
    props.step === 1
      ? "infoAppearsTwo 0.5s ease forwards"
      : props.step === 2
      ? "removeInfoTwo 0.5s ease forwards"
      : "none"};
  animation-delay: ${(props) => props.step === 1 && "0.5s"};

  @keyframes infoAppearsTwo {
    from {
      width: 0;
    }
    to {
      width: ${(props) => `${props.highestNumber}px`};
    }
  }

  @keyframes removeInfoTwo {
    from {
      width: ${(props) => `${props.highestNumber}px`};
    }
    to {
      width: 0;
    }
  }
`;
