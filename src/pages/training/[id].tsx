import { TrainingQuery } from "@/components/layout/training.query/training.query";
import Header from "@/components/common/header";
import { Container } from "@/styles/pagesStyles";

export default function TrainingDetails() {
  return (
    <Container>
      <Header />
      <TrainingQuery></TrainingQuery>
    </Container>
  );
}
