import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";

//salva o token e os dados no local storage
export function tokenSaveData(token) {
  const decode = jwt_decode(token);

  localStorage.setItem("exp", decode.exp);
  localStorage.setItem("userId", decode.userId);
  localStorage.setItem("userName", decode.name);
  localStorage.setItem("token", token);
}

//para usar o id do usuario
export function userId() {
  const userId = localStorage.userId;
  return userId;
}

//para usar o nome do usuario
export function userName() {
  const userName = localStorage.userName;
  return userName;
}

//quando o token expirar ou não existir
export function tokenExist() {
  const router = useRouter();

  const token = localStorage.token;

  if (!token) {
    router.push("/signin");
  }

  const expTime = parseInt(localStorage.exp);
  const currentTime = Math.floor(Date.now() / 1000);

  if (expTime < currentTime) {
    localStorage.clear();
    router.push("/signin");
  }

  return;
}
