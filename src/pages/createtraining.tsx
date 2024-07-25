import Header from "@/components/common/header";
import CreateTraining from "@/components/layout/createTraining/createTraining";
import { Container } from "@/styles/pagesStyles";

export default function createTraining() {
  return (
    <Container>
      <Header />
      <CreateTraining />
    </Container>
  );
}
