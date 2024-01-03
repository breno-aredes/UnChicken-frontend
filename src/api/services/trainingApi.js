import api from "../api";

async function getUserTrainings(token) {
  const response = await api.get("/training", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

async function getTrainingReports(token, trainingId) {
  const response = await api.get(`training/${trainingId}/reports`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

async function trainingById(token, trainingId) {
  const response = await api.get(`training/${trainingId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

async function createTraining(data, token) {
  const response = await api.post("/training", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export default {
  getUserTrainings,
  trainingById,
  createTraining,
  getTrainingReports,
};
