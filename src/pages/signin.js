import { NeonButton } from "@/components/common/button";
import Header from "@/components/layout/header";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

export default function signIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function isFormValid() {
    return email !== "" && password !== "";
  }

  return (
    <>
      <Header />
      <Body>
        <SignInContainer>
          <h1>Entrar</h1>

          <form>
            <input
              placeholder="E-mail"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              placeholder="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <StyleNeonButton hover={isFormValid()}>Entrar</StyleNeonButton>
          </form>
          <Link style={{ textDecoration: "none" }} href="/signup">
            <h3>
              ainda não possui conta? <br /> cadastre-se aqui!
            </h3>
          </Link>
        </SignInContainer>
      </Body>
    </>
  );
}

const StyleNeonButton = styled(NeonButton)`
  margin-top: 20px;
`;

const Body = styled.div`
  background-image: linear-gradient(
      90deg,
      rgba(2, 0, 36, 0.5) 0%,
      rgba(0, 0, 0, 1) 57%
    ),
    url("acad_led_1.jpg");
  background-repeat: no-repeat;
  background-size: auto;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font-family: "Roboto", sans-serif;
`;

const SignInContainer = styled.div`
  padding: 30px;
  background-color: black;
  border: 2px solid #00d9ff;
  color: #00d9ff;
  box-shadow: 0 0 35px #00d9ff, 0 0 15px #00d9ffc0;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  h1 {
    margin-bottom: 20px;
    padding-bottom: 10px;
    color: #00d9ff;
    text-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;
    font-size: 40px;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
  }
  h3 {
    margin-top: 40px;
    padding-bottom: 10px;
    color: #808080;
    font-size: 15 px;
    font-weight: bold;
    white-space: pre-line;

    :hover {
      color: #00d9ff;
      text-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;
    }
  }
  input {
    width: 300px;
    padding: 2px 10px;
    color: #00d9ff;
    border: none;
    border-bottom: 2px solid #00d9ff;
    background-color: black;
    margin-bottom: 30px;
    outline: none;
    box-shadow: 0 8px 15px -15px #00d9ff, 0 8px 10px -5px #00d9ffc0;
    border-radius: 10px;
    text-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;
  }
  input:focus::-webkit-input-placeholder {
    color: transparent;
  }
  input::placeholder {
    color: #808080;
    text-shadow: none;
    font-size: 15px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
`;
