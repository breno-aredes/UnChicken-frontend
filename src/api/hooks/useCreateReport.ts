import { useToken } from "../auth";
import reportApi from "../services/reportsApi";
import useAsync from "../useAsync";

export default function useCreateReport() {
  const token = useToken();

  const {
    loading: createReportLoading,
    error: createReportError,
    act: createReport,
  } = useAsync({
    handler: (data: any) => reportApi.createReport(data, token),
    immediate: false,
  });
  return {
    createReportLoading,
    createReportError,
    createReport,
  };
}
