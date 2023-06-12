import Header from "@/components/common/header";
import SideBar from "@/components/common/sidebar/sidebar";
import TimeLine from "@/components/layout/timeline/timeline";
import { useState } from "react";
import styled from "styled-components";

export default function timeLine() {
  const [iconClicked, setIconClicked] = useState(false);

  return (
    <Container>
      <Header
        stepTwo={true}
        iconClicked={iconClicked}
        setIconClicked={setIconClicked}
      />
      <TimeLine dash={true} />
      <SideBar iconClicked={iconClicked} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
