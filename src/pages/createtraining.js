import Header from "@/components/common/header";
import CreateTraining from "@/components/layout/training/createTraining";

import styled from "styled-components";

export default function createTraining() {
  return (
    <Container>
      <Header />
      <CreateTraining></CreateTraining>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
