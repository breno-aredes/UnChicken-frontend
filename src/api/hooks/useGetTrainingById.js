import { useToken } from "../auth";
import trainingApi from "../services/trainingApi";
import useAsync from "../useAsync";

export default function useGetTrainingById(id) {
  const token = useToken();

  const {
    data: trainingById,
    loading: trainingByIdLoading,
    error: trainingByIdError,
    act: getTrainingById,
  } = useAsync(() => (id ? trainingApi.trainingById(token, id) : null));

  return {
    trainingById,
    trainingByIdLoading,
    trainingByIdError,
    getTrainingById,
  };
}
