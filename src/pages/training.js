import Header from "@/components/common/header";

import TimeLine from "@/components/layout/timeline/timeline";

import styled from "styled-components";

export default function training() {
  return (
    <Container>
      <Header />
      <TimeLine dash={true} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
