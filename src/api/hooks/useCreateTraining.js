import { useToken } from "../auth";
import trainingApi from "../services/trainingApi";
import useAsync from "../useAsync";

export default function useCreateTrainings() {
  const token = useToken();

  const {
    loading: createTrainingLoading,
    error: createTrainingError,
    act: createTraining,
  } = useAsync((data) => trainingApi.createTraining(data, token), false);

  return {
    createTrainingLoading,
    createTrainingError,
    createTraining,
  };
}
