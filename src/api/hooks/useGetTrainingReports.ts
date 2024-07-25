import { useToken } from "../auth";
import trainingApi from "../services/trainingApi";
import useAsync from "../useAsync";

export default function useGetTrainingReports(id: any) {
  const token = useToken();

  const {
    data: trainingReports,
    loading: trainingReportsLoading,
    error: trainingReportsError,
    act: getTrainingReports,
  } = useAsync({
    handler: () =>
      id
        ? trainingApi.getTrainingReports(token, id)
        : Promise.reject(new Error("ID não fornecido")),
  });

  return {
    trainingReports,
    trainingReportsLoading,
    trainingReportsError,
    getTrainingReports,
  };
}
