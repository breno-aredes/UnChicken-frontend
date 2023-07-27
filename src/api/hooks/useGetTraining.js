import { useToken } from "../auth";
import trainingApi from "../services/trainingApi";
import useAsync from "../useAsync";

export default function useGetTrainings() {
  const token = useToken();

  const {
    data: training,
    loading: trainingLoading,
    error: trainingError,
    act: getTraining,
  } = useAsync(() => trainingApi.getUserTrainings(token), false);

  return {
    training,
    trainingLoading,
    trainingError,
    getTraining,
  };
}
