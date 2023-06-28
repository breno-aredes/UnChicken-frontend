import { TrainingQuery } from "@/components/layout/training/training.query";
import Header from "@/components/common/header";
import styled from "styled-components";

export default function TrainingDetails() {
  return (
    <Container>
      <Header />
      <TrainingQuery></TrainingQuery>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
