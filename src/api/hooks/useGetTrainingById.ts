import { useToken } from "../auth";
import trainingApi from "../services/trainingApi";
import useAsync from "../useAsync";

export default function useGetTrainingById(id: any) {
  const token = useToken();

  const {
    data: trainingById,
    loading: trainingByIdLoading,
    error: trainingByIdError,
    act: getTrainingById,
  } = useAsync({
    handler: () => {
      return trainingApi.trainingById(token, id);
    },
  });

  return {
    trainingById,
    trainingByIdLoading,
    trainingByIdError,
    getTrainingById,
  };
}
