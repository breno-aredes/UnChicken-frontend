import styled from "styled-components";

export const ButtonContainer = styled.div`
  margin-top: 30px;
`;

export const Span = styled.span`
  text-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;
  color: #00d9ff;
  cursor: pointer;
`;

export const ListTraining = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TrainingContainer = styled.div`
  cursor: pointer;
  background-color: #000000;
  padding: 15px 10px 15px 15px;
  width: 280px;
  height: 110px;
  border-radius: 20px;
  margin-top: 30px;
  margin-right: 30px;
  border: 2px solid #808080;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  word-wrap: break-word;
  word-break: break-all;

  :hover {
    border: 2px solid #00d9ff;
    box-shadow: 0 0 35px #00d9ff, 0 0 15px #00d9ffc0;
    p {
      color: #00d9ff;
      text-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;
    }
  }
  p {
    line-height: 20px;
    color: #bdbdbd;
    font-family: "Roboto", sans-serif;
  }
  span {
    font-weight: bold;
  }
`;

export const Body = styled.div`
  margin-top: 65px;
  background-color: #000000;
  min-height: calc(100vh - 65px);
  width: 100%;
  padding: 3% 20% 10% 5%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  h1 {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 25px;
    font-weight: bold;
    font-family: "Roboto", sans-serif;
    text-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;
    color: #00d9ff;
  }
  h2 {
    margin-left: 30px;
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
    font-family: "Roboto", sans-serif;
    color: #848484;
  }
`;
