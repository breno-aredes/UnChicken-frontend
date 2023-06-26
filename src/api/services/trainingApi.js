import api from "../api";

async function getUserTrainings(token) {
  const response = await api.get("/training", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export default {
  getUserTrainings,
};
