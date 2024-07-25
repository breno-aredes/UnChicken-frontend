import api from "../api";

async function getUserTrainings(token: any): Promise<any> {
  const response = await api.get("/training", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

async function getTrainingReports(token: any, trainingId: any): Promise<any> {
  const response = await api.get(`training/${trainingId}/reports`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

async function trainingById(token: any, trainingId: any): Promise<any> {
  const response = await api.get(`training/${trainingId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

async function createTraining(data: any, token: any): Promise<any> {
  const response = await api.post("/training", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

async function deleteTraining(token: any, trainingId: any): Promise<any> {
  const response = await api.delete(`training/${trainingId}`, {
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
  deleteTraining,
};
