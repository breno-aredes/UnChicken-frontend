import { useRouter } from "next/router";
import { Body } from "../createTraining/styled";
import useGetTrainingReports from "@/api/hooks/useGetTrainingReports";
import { useEffect } from "react";
import { tokenExist } from "@/api/auth";
import styled from "styled-components";
import { Back, BackContainer } from "../training.query/startTraining/styled";
import Link from "next/link";

export default function Reports() {
  const router = useRouter();
  const { id } = router.query;

  const { trainingReports, getTrainingReports } = useGetTrainingReports(id);

  useEffect(() => {
    if (!id) return;
    try {
      getTrainingReports(id);
    } catch (error) {}
    const tokenEx = tokenExist();
    if (!tokenEx) {
      router.push("/");
    }
  }, [id]);

  const exercises = trainingReports?.exercises || [];
  const repetitions = exercises.map((exercise) => exercise.repetitions);

  const reportsByDateTime = trainingReports?.exercises.reduce(
    (acc, exercise) => {
      exercise.reports.forEach((report) => {
        const dateTime = report.createdAt;
        if (!acc[dateTime]) {
          acc[dateTime] = [];
        }
        acc[dateTime].push(report.averageReps);
      });
      return acc;
    },
    {}
  );

  const dateTimes = Object.keys(reportsByDateTime || []);

  return (
    <Body>
      <h1>Relatório de treino</h1>
      <Link href={`/training/${id}`} style={{ textDecoration: "none" }}>
        <BackContainer>
          <Back></Back>
          <h3>voltar para o resumo</h3>
        </BackContainer>
      </Link>
      <ReportContainer>
        <div>
          <POne>Exercícios</POne>

          {exercises.map((exercise) => (
            <POne key={exercise.id}>{exercise.name}</POne>
          ))}
        </div>

        <div>
          <PTwo>Repetições</PTwo>

          {repetitions.map((repetition, index) => (
            <PTwo key={index}>{repetition}</PTwo>
          ))}
        </div>

        <DateContainer>
          {dateTimes.map((dateTime) => (
            <div key={dateTime}>
              <PTwo>{new Date(dateTime).toLocaleDateString("pt-BR")}</PTwo>

              {reportsByDateTime[dateTime].map((averageReps, index) => (
                <PTwo
                  color={
                    averageReps > repetitions[index]
                      ? "green"
                      : averageReps < repetitions[index]
                      ? "red"
                      : "#bdbdbd"
                  }
                  key={index}
                >
                  {averageReps}
                </PTwo>
              ))}
            </div>
          ))}
        </DateContainer>
      </ReportContainer>
    </Body>
  );
}

const ReportContainer = styled.div`
  display: flex;
  p {
    font-family: "Roboto", sans-serif;
    box-sizing: border-box;
    padding: 10px;
  }
`;

const DateContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding-bottom: 20px;
  &:hover {
    &::-webkit-scrollbar-thumb {
      box-shadow: none;
    }
  }

  ::-webkit-scrollbar {
    height: 10px;
  }
`;

export const POne = styled.p`
  min-width: 250px;
  color: #bdbdbd;
`;

export const PTwo = styled.p`
  width: 150px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : "#bdbdbd")};
`;
