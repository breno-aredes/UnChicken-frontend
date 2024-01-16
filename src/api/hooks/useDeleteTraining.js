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
  } = useAsync((id) => trainingApi.deleteTraining(token, id), false);

  return {
    deleteResult,
    deleteLoading,
    deleteError,
    deleteTraining,
  };
}
