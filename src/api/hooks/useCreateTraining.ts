import { useToken } from "../auth";
import trainingApi from "../services/trainingApi";
import useAsync from "../useAsync";

export default function useCreateTrainings() {
  const token = useToken();

  const {
    loading: createTrainingLoading,
    error: createTrainingError,
    act: createTraining,
  } = useAsync({
    handler: (data) => trainingApi.createTraining(data, token),
    immediate: false,
  });

  return {
    createTrainingLoading,
    createTrainingError,
    createTraining,
  };
}
