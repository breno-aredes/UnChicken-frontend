import styled from "styled-components";

export const ReportContainer = styled.div`
  display: flex;
  p {
    font-family: "Roboto", sans-serif;
    box-sizing: border-box;
    padding: 10px;
  }
`;

export const DateContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding-bottom: 20px;
  &:hover {
    &::-webkit-scrollbar-thumb {
      box-shadow: none;
    }
  }

  ::-webkit-scrollbar {
    height: 10px;
  }
`;

export const POne = styled.p`
  min-width: 250px;
  color: #bdbdbd;
`;

export const PTwo = styled.p`
  width: 150px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : "#bdbdbd")};
`;
