import { useToken } from "../auth";
import trainingApi from "../services/trainingApi";
import useAsync from "../useAsync";

export default function useDeleteTraining() {
  const token = useToken();

  const {
    data: deleteResult,
    loading: deleteLoading,
    error: deleteError,
    act: deleteTraining,
  } = useAsync({
    handler: (id) => trainingApi.deleteTraining(token, id),
    immediate: false,
  });

  return {
    deleteResult,
    deleteLoading,
    deleteError,
    deleteTraining,
  };
}
