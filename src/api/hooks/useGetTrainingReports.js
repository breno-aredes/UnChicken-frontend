import { useToken } from "../auth";
import trainingApi from "../services/trainingApi";
import useAsync from "../useAsync";

export default function useGetTrainingReports(id) {
  const token = useToken();

  const {
    data: trainingReports,
    loading: trainingReportsLoading,
    error: trainingReportsError,
    act: getTrainingReports,
  } = useAsync(() => (id ? trainingApi.getTrainingReports(token, id) : null));

  return {
    trainingReports,
    trainingReportsLoading,
    trainingReportsError,
    getTrainingReports,
  };
}
