import api from "../api";

async function createReport(data, token) {
  const response = await api.post("/reports", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export default {
  createReport,
};
