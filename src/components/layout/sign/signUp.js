import { Body, Input, SignInContainer, StyleNeonButton } from "./styled";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { isEmail, isLength } from "validator";
import useSignUp from "@/api/hooks/useSignUp";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  const router = useRouter();

  const [errorEmail, setErrorEmail] = useState([]);
  const [errorPassword, setErrorPassword] = useState([]);
  const [error, setError] = useState();

  const { signUp } = useSignUp();

  function isFormValid() {
    return (
      email !== "" &&
      password !== "" &&
      name !== "" &&
      confirmPassword !== "" &&
      confirmEmail !== ""
    );
  }

  async function createAcount(e) {
    e.preventDefault();
    const newErrorEmail = [];
    const newErrorPassword = [];

    if (email !== confirmEmail) {
      newErrorEmail.push(1);
    }

    if (password !== confirmPassword) {
      newErrorPassword.push(1);
    }

    if (!isEmail(email)) {
      newErrorEmail.push(2);
    }

    if (!isLength(password, { min: 6 })) {
      newErrorPassword.push(2);
    }

    setErrorEmail(newErrorEmail);
    setErrorPassword(newErrorPassword);

    if (newErrorEmail.length > 0 || newErrorPassword.length > 0) {
      return;
    }
    const body = {
      name,
      email,
      password,
    };

    try {
      await signUp(body);
      router.push("/signin");
    } catch (error) {
      return setError(error.response.status);
    }
  }

  return (
    <Body>
      <SignInContainer>
        <h1>Cadastre-se</h1>

        <form onSubmit={createAcount}>
          <Input
            placeholder="Nome"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="E-mail"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            errorNeon={errorEmail.length > 0 || error === 409}
          />
          <Input
            placeholder="Confirme o e-mail"
            type="text"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
            errorNeon={errorEmail.length > 0 || error === 409}
          />

          <Input
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            errorNeon={errorPassword.length > 0}
          />
          <Input
            placeholder="Confirme a senha"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            errorNeon={errorPassword.length > 0}
          />
          {errorEmail.includes(1) && (
            <h2>* Os campos de e-mail devem ser iguais.</h2>
          )}
          {errorPassword.includes(1) && (
            <h2>* Os campos de senha devem ser iguais.</h2>
          )}
          {errorEmail.includes(2) && (
            <h2>* O e-mail fornecido não é válido.</h2>
          )}
          {errorPassword.includes(2) && (
            <h2>* A senha deve ter pelo menos 6 caracteres.</h2>
          )}
          {error === 409 && <h2>* O e-mail fornecido já está cadastrado.</h2>}
          <StyleNeonButton
            type="submit"
            hover={isFormValid()}
            disabled={!isFormValid()}
          >
            Cadrastre-se
          </StyleNeonButton>
        </form>
        <Link style={{ textDecoration: "none" }} href="/signin">
          <h3>
            Já possui conta? <br /> entre aqui!
          </h3>
        </Link>
      </SignInContainer>
    </Body>
  );
}
