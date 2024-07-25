import { tokenExist, tokenSaveData } from "@/api/auth";
import useSignIn from "@/api/hooks/useSignIn";

import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { isEmail, isLength } from "validator";
import { Body, Input, SignInContainer, StyleNeonButton } from "./styled";

export default function SignIn() {
  const router = useRouter();

  useEffect(() => {
    const token = tokenExist();
    if (token) {
      router.push("/");
    }
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [error, setError] = useState();

  const { signIn } = useSignIn();

  function isFormValid() {
    return email !== "" && password !== "";
  }

  async function login(e: any) {
    e.preventDefault();

    let newErrorEmail = false;
    let newErrorPassword = false;

    if (!isEmail(email)) {
      newErrorEmail = true;
    }

    if (!isLength(password, { min: 6 })) {
      newErrorPassword = true;
    }

    setErrorEmail(newErrorEmail);
    setErrorPassword(newErrorPassword);

    if (newErrorEmail === true || newErrorPassword === true) {
      return;
    }

    const body = {
      email,
      password,
    };

    try {
      const token = await signIn(body);
      tokenSaveData(token);
      router.push("/training");
    } catch (error: any) {
      return setError(error.response.status);
    }
  }

  return (
    <Body>
      <SignInContainer>
        <h1>Entrar</h1>

        <form onSubmit={login}>
          <Input
            placeholder="E-mail"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            errorNeon={errorEmail === true || error === 401}
          />

          <Input
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            errorNeon={errorPassword === true || error === 401}
          />
          {errorEmail && <h2>* O e-mail fornecido não é válido.</h2>}
          {errorPassword && (
            <h2>* A senha deve ter pelo menos 6 caracteres.</h2>
          )}
          {error === 401 && <h2>* Usuário e/ou senha inválidos</h2>}
          <StyleNeonButton hover={isFormValid()} disabled={!isFormValid()}>
            Entrar
          </StyleNeonButton>
        </form>
        <Link style={{ textDecoration: "none" }} href="/signup">
          <h3>
            ainda não possui conta? <br /> cadastre-se aqui!
          </h3>
        </Link>
      </SignInContainer>
    </Body>
  );
}
