import { tokenExist } from "@/api/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { FiPlusSquare, FiMinusSquare } from "react-icons/fi";

export default function CreateTraining() {
  const router = useRouter();
  const [trainingName, setTrainingName] = useState("");
  const [exercises, setExercises] = useState([
    { ExerciceName: "", repetitions: "", series: "" },
  ]);
  const [tipo, setTipo] = useState("");
  const [description, setDescription] = useState("");
  const [countExercises, setCountExercises] = useState(1);

  useEffect(() => {
    const token = tokenExist();
    if (!token) {
      router.push("/");
    }
  }, []);

  function addExercise() {
    setCountExercises(countExercises + 1);
    setExercises((prevExercises) => [
      ...prevExercises,
      { ExerciceName: "", repetitions: "", series: "" },
    ]);
  }

  function removeExercise() {
    if (countExercises > 1) {
      setCountExercises(countExercises - 1);
      setExercises((prevExercises) =>
        prevExercises.slice(0, prevExercises.length - 1)
      );
    }
  }

  function handleExerciseChange(index, field, value) {
    const updatedExercises = [...exercises];
    updatedExercises[index][field] = value;
    setExercises(updatedExercises);
    console.log(exercises);
  }

  return (
    <Body>
      <h1> Criar uma fichas</h1>
      <Container>
        {" "}
        <TrainingContainer>
          <h2>Dados da Ficha</h2>
          <TypeContainer>
            <Input
              placeholder="Nome da ficha (ex: Treino de perna...)"
              type="trainingName"
              value={trainingName}
              onChange={(e) => setTrainingName(e.target.value)}
            />
            <Select value={tipo} onChange={(e) => setTipo(e.target.value)}>
              <option value="" disabled>
                Tipo de ficha
              </option>
              <option value="circuito">Circuito</option>
              <option value="serie">Série</option>
            </Select>
          </TypeContainer>
          <TextArea
            placeholder="Descrição (ex: Este treino é focado em hipertrofia, dos quadríceps ...)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={250}
          />
        </TrainingContainer>
        <BarNeon></BarNeon>
        <ExerciceContainer>
          <h2>Exercícios</h2>

          {Array.from({ length: countExercises }).map((_, index) => (
            <SequenceExercices key={index}>
              <Input
                placeholder="Nome do exercício"
                type="ExerciceName"
                value={exercises[index].ExerciceName}
                onChange={(e) =>
                  handleExerciseChange(index, "ExerciceName", e.target.value)
                }
              />
              <Input
                placeholder="Séries"
                style={{ width: "100px" }}
                value={exercises[index].series}
                onChange={(e) =>
                  handleExerciseChange(index, "series", e.target.value)
                }
              />
              <Input
                placeholder="Repetições"
                style={{ width: "100px" }}
                value={exercises[index].repetitions}
                onChange={(e) =>
                  handleExerciseChange(index, "repetitions", e.target.value)
                }
              />
            </SequenceExercices>
          ))}

          <ButtonContainer>
            {" "}
            <IconContainer onClick={() => addExercise()}>
              <Icon></Icon>
              <h3> Adicionar exercício </h3>
            </IconContainer>
            <IconContainer
              onClick={() => removeExercise()}
              disabled={countExercises === 1}
            >
              <Icontwo disabled={countExercises === 1}></Icontwo>
              <h3> Remover exercício </h3>
            </IconContainer>
          </ButtonContainer>
        </ExerciceContainer>
      </Container>
    </Body>
  );
}

const ButtonContainer = styled.div`
  display: flex;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  width: 170px;
  margin-top: 20px;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  h3 {
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    color: ${({ disabled }) => (disabled ? "#808080   " : "#00d9ff")};
    margin-left: 8px;
    text-shadow: ${({ disabled }) =>
      disabled ? "none" : "0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff"};
  }
`;

const Icon = styled(FiPlusSquare)`
  font-size: 20px;
  font-family: "Roboto", sans-serif;
  text-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;
  color: #00d9ff;
`;

const Icontwo = styled(FiMinusSquare)`
  margin-left: 10px;
  font-size: 20px;
  font-family: "Roboto", sans-serif;
  text-shadow: ${({ disabled }) =>
    disabled ? "none" : "0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff"};
  color: ${({ disabled }) => (disabled ? "#808080   " : "#00d9ff")};
`;

const SequenceExercices = styled.div`
  padding-bottom: 10px;
  padding-top: 10px;
`;

const Container = styled.div`
  display: flex;
`;

const TextArea = styled.textarea`
  font-family: "Roboto", sans-serif;
  width: 450px;
  height: auto;
  min-height: 150px;
  max-height: 200px;
  padding: 10px;
  font-size: 15px;
  color: ${(props) => (props.errorNeon ? "#ff5555" : "#00d9ff")};
  border: none;
  border-bottom: 2px solid
    ${(props) => (props.errorNeon ? "#ff5555" : "#00d9ff")};
  background-color: black;
  margin-right: 20px;
  outline: none;
  box-shadow: ${(props) =>
    props.errorNeon
      ? "0 8px 15px -15px #ff5555, 0 8px 10px -5px #ff5555c0"
      : "0 8px 15px -15px #00d9ff, 0 8px 10px -5px #00d9ffc0"};
  border-radius: 10px;
  text-shadow: ${(props) =>
    props.errorNeon
      ? "0px 0px 10px #ff5555cc, 0px 0px 3px #ff5555"
      : "0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff"};

  :focus::-webkit-input-placeholder {
    color: transparent;
  }
  ::placeholder {
    color: #808080;
    text-shadow: none;
    font-size: 15px;
    font-family: "Roboto", sans-serif;
  }
`;

const TrainingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  margin-left: 30px;
`;

const TypeContainer = styled.div`
  display: flex;
  align-items: end;
  margin-bottom: 40px;
`;

const Select = styled.select`
  height: 30px;
  width: 125px;
  padding: 5px;
  font-size: 15px;
  color: ${(props) => (props.value === "" ? "#808080" : "#00d9ff")};
  background-color: black;
  border: none;
  border-bottom: 2px solid #00d9ff;
  margin-right: 10px;
  outline: none;
  box-shadow: 0 8px 15px -15px #00d9ff, 0 8px 10px -5px #00d9ffc0;
  border-radius: 10px;
  text-shadow: ${(props) =>
    props.value === ""
      ? "none"
      : "0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff"};

  option:first-child {
    color: #808080;
  }
`;

const ExerciceContainer = styled.div`
  margin-left: 50px;
`;

const Body = styled.div`
  background-color: #000000;
  min-height: 100vh;
  max-height: 100vh;
  width: 100%;
  padding: 5% 20% 10% 5%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  h1 {
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 25px;
    font-weight: bold;
    font-family: "Roboto", sans-serif;
    text-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;
    color: #00d9ff;
  }
  h2 {
    margin-bottom: 20px;
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
    font-family: "Roboto", sans-serif;
    color: #00d9ff;
    text-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;
  }
`;

export const Input = styled.input`
  width: 300px;
  margin-top: 10px;
  height: 22px;
  padding: 2px 10px;
  font-size: 15px;
  color: ${(props) => (props.errorNeon ? "#ff5555" : "#00d9ff")};
  border: none;
  border-bottom: 2px solid
    ${(props) => (props.errorNeon ? "#ff5555" : "#00d9ff")};
  background-color: black;
  margin-right: 20px;
  outline: none;
  box-shadow: ${(props) =>
    props.errorNeon
      ? "0 8px 15px -15px #ff5555, 0 8px 10px -5px #ff5555c0"
      : "0 8px 15px -15px #00d9ff, 0 8px 10px -5px #00d9ffc0"};
  border-radius: 10px;
  text-shadow: ${(props) =>
    props.errorNeon
      ? "0px 0px 10px #ff5555cc, 0px 0px 3px #ff5555"
      : "0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff"};

  :focus::-webkit-input-placeholder {
    color: transparent;
  }
  ::placeholder {
    color: #808080;
    text-shadow: none;
    font-size: 15px;
  }
`;

const BarNeon = styled.div`
  width: 2px;
  background-color: #00d9ff;
  border: 1px solid #00d9ff;
  border-radius: 4px;
  box-shadow: 0 0 20px 2px #00d9ffcc, 0 0 15px 1px #00d9ff;
  margin: 0 20px 0 40px;
`;
