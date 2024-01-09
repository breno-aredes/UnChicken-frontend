import { useToken } from "../auth";
import reportApi from "../services/reportsApi";
import useAsync from "../useAsync";

export default function useCreateReport() {
  const token = useToken();

  const {
    loading: createReportLoading,
    error: createReportError,
    act: createReport,
  } = useAsync((data) => reportApi.createReport(data, token), false);

  return {
    createReportLoading,
    createReportError,
    createReport,
  };
}
