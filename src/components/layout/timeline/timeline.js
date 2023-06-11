import styled from "styled-components";

export default function TimeLine({ dash }) {
  return (
    <Body>
      <TimelineContainer dash={dash}>
        <TimelineHead> </TimelineHead>
        <TimelineBody>
          <TrainingContainer></TrainingContainer>
          <TrainingContainer></TrainingContainer>
          <TrainingContainer></TrainingContainer>
          <TrainingContainer></TrainingContainer>
          <TrainingContainer></TrainingContainer>
          <TrainingContainer></TrainingContainer>
          <TrainingContainer></TrainingContainer>
          <TrainingContainer></TrainingContainer>
          <TrainingContainer></TrainingContainer>
        </TimelineBody>
      </TimelineContainer>
    </Body>
  );
}

const Body = styled.div`
  background-color: #000000;
  min-height: 100vh;
  max-height: 100%;
  padding: 5% 20% 10% 5%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

const TimelineContainer = styled.main`
  margin-top: 80px;
  background-color: red;
  width: 100;
  min-height: 600px;
  height: 100%;
  background-color: black;
  border: 2px solid #00d9ff;
  color: #00d9ff;
  box-shadow: 0 0 35px #00d9ff, 0 0 15px #00d9ffc0;
  border-radius: 20px;
  margin-right: ${(props) => (props.dash === true ? "0px" : "0px")};
`;

const TimelineHead = styled.div`
  height: 50px;
`;

const TimelineBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  padding: 30px 0px 0px 30px;
`;

const TrainingContainer = styled.div`
  background-color: #000000;
  width: 280px;
  height: 100px;
  border-radius: 20px;
  margin-right: 30px;
  margin-bottom: 30px;
  border: 2px solid #808080;
  :hover {
    border: 2px solid #00d9ff;
    box-shadow: 0 0 35px #00d9ff, 0 0 15px #00d9ffc0;
  }
`;
