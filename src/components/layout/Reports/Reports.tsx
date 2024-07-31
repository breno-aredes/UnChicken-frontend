import { useRouter } from "next/router";
import { Body } from "../createTraining/styled";
import useGetTrainingReports from "@/api/hooks/useGetTrainingReports";
import { useEffect } from "react";
import { tokenExist } from "@/api/auth";
import { Back, BackContainer } from "../training.query/startTraining/styled";
import Link from "next/link";
import { DateContainer, POne, PTwo, ReportContainer } from "./styled";

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
  const repetitions = exercises.map((exercise: any) => exercise.repetitions);

  const reportsByDateTime = trainingReports?.exercises.reduce(
    (acc: any, exercise: any) => {
      exercise.reports.forEach((report: any) => {
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

          {exercises.map((exercise: any) => (
            <POne key={exercise.id}>{exercise.name}</POne>
          ))}
        </div>

        <div>
          <PTwo>Repetições</PTwo>

          {repetitions.map((repetition: any, index: any) => (
            <PTwo key={index}>{repetition}</PTwo>
          ))}
        </div>

        <DateContainer>
          {dateTimes.map((dateTime) => (
            <div key={dateTime}>
              <PTwo>{new Date(dateTime).toLocaleDateString("pt-BR")}</PTwo>

              {reportsByDateTime[dateTime].map(
                (averageReps: any, index: any) => (
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
                )
              )}
            </div>
          ))}
        </DateContainer>
      </ReportContainer>
    </Body>
  );
}
