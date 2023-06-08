import api from "../api";

async function signUp(body) {
  const response = await api.post("/auth/sign-up", body);
  return response.data;
}

async function signIn(body) {
  const response = await api.post("/auth/sign-in", body);
  return response.data;
}

export default {
  signIn,
  signUp,
};
