import { useState } from "react";

import { useRouter } from "next/router";
import * as S from "./styles";

export default function SideBar({ iconClicked }: any) {
  const [openAccount, setOpenAccount] = useState(false);
  const [openWorkouts, setOpenWorkouts] = useState(false);
  const [openServices, setOpenServices] = useState(false);

  const router = useRouter();

  function logout() {
    localStorage.clear();
    router.push("/");
  }

  function redirectPg() {
    router.push("/shortly");
  }

  function redirectToTraining() {
    router.push("/training");
  }

  return (
    <S.SideBarContainer iconClicked={iconClicked}>
      <S.Bar
        onClick={() => setOpenAccount(!openAccount)}
        openIcon={openAccount}
      >
        <p></p>
        <h1>Conta</h1>
        <S.OpenIcon openIcon={openAccount}></S.OpenIcon>
      </S.Bar>
      {openAccount && (
        <S.BarTwo>
          <p onClick={() => redirectPg()}>Editar conta</p>
          <p onClick={() => redirectPg()}>Mudar senha</p>
        </S.BarTwo>
      )}

      <S.BarNeon />

      <S.Bar
        onClick={() => setOpenWorkouts(!openWorkouts)}
        openIcon={openWorkouts}
      >
        <p></p>
        <h1>Treinos</h1>
        <S.OpenIcon openIcon={openWorkouts} />
      </S.Bar>
      {openWorkouts && (
        <S.BarTwo>
          <p onClick={() => redirectToTraining()}>Minhas fichas</p>
          <p onClick={() => router.push("/createtraining")}>Criar ficha</p>
          <p onClick={() => redirectPg()}>Fichas que eu criei</p>
          <p onClick={() => redirectPg()}>Explorar</p>
        </S.BarTwo>
      )}

      <S.BarNeon />

      <S.Bar
        onClick={() => setOpenServices(!openServices)}
        openIcon={openServices}
      >
        <p></p>
        <h1>Serviços</h1>
        <S.OpenIcon openIcon={openServices} />
      </S.Bar>
      {openServices && (
        <S.BarTwo>
          <p onClick={() => redirectPg()}>Personal trainers</p>
          <p onClick={() => redirectPg()}>Nutricionistas</p>
        </S.BarTwo>
      )}

      <S.BarNeon />

      <S.Bar onClick={() => logout()}>
        <p></p>
        <h1>Sair</h1>
        <S.LogOutIcon />
      </S.Bar>

      <S.BarNeon />
    </S.SideBarContainer>
  );
}
