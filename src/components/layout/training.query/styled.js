import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
`;

export const BarNeon = styled.div`
  width: 2px;
  background-color: #00d9ff;
  border: 1px solid #00d9ff;
  border-radius: 4px;
  box-shadow: 0 0 20px 2px #00d9ffcc, 0 0 15px 1px #00d9ff;
`;

export const TrainingQueryContainer = styled.div`
  width: 500px;
  white-space: nowrap;
  display: ${(props) => props.step === 2 && "none"};
  animation: ${(props) =>
    props.step === 1
      ? "removeInfo 0.5s ease forwards"
      : props.step === 3 || props.step === 0
      ? "infoAppears 0.5s ease forwards"
      : "none"};

  overflow: hidden;
  animation-delay: ${(props) => props.step === 2 && "0.5s"};

  @keyframes removeInfo {
    from {
      width: 650px;
    }
    to {
      width: 0;
    }
  }

  @keyframes infoAppears {
    from {
      width: 0;
    }
    to {
      width: 650px;
    }
  }
`;

export const StartTrainingEfect = styled.div`
  display: ${(props) => (props.step === 0 ? "none" : "flex ")};
  width: 0;
  white-space: nowrap;
  overflow: hidden;
  animation: ${(props) =>
    props.step === 1
      ? "infoAppearsTwo 0.5s ease forwards"
      : props.step === 2
      ? "removeInfoTwo 0.5s ease forwards"
      : "none"};
  animation-delay: ${(props) => props.step === 1 && "0.5s"};

  @keyframes infoAppearsTwo {
    from {
      width: 0;
    }
    to {
      width: ${(props) => `${props.highestNumber * 125 + 660}px`};
    }
  }

  @keyframes removeInfoTwo {
    from {
      width: ${(props) => `${props.highestNumber * 125 + 660}px`};
    }
    to {
      width: 0;
    }
  }
`;
