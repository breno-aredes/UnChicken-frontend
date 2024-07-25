import useAsync from "../useAsync";

import authApi from "../services/authApi";

export default function useSignUp() {
  const {
    loading: signUpLoading,
    error: signUpError,
    act: signUp,
  } = useAsync({ handler: authApi.signUp, immediate: false });

  return {
    signUpLoading,
    signUpError,
    signUp,
  };
}
