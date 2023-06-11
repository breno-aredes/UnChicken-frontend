import Dashboard from "@/components/common/dashboard/dashboard";
import Header from "@/components/common/header";
import TimeLine from "@/components/layout/timeline/timeline";
import styled from "styled-components";

export default function timeLine() {
  return (
    <Container>
      <Header />
      <TimeLine dash={true} />
      <Dashboard />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
