import api from "../api";

async function createReport(data: any, token: string): Promise<any> {
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
