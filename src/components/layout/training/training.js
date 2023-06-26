import { tokenExist } from "@/api/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";

export default function Training() {
  const router = useRouter();

  useEffect(() => {
    const token = tokenExist();
    if (!token) {
      router.push("/");
    }
  }, []);

  return (
    <Body>
      <h1> Minhas fichas</h1>
      <h2> Você ainda não possui nenhuma ficha de treino.</h2>
      <h2>
        Se deseja criar uma ficha{" "}
        <span onClick={() => router.push("/createtraining")}>CLIQUE AQUI!</span>
      </h2>
      <h2>
        Se deseja ver fichas criadas por outros usuários{" "}
        <span onClick={() => router.push("/shortly")}>CLIQUE AQUI!</span>
      </h2>
    </Body>
  );
}

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

  span {
    text-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;
    color: #00d9ff;
    cursor: pointer;
  }
`;
