import useAsync from "../useAsync";

import authApi from "../services/authApi";

export default function useSignIn() {
  const {
    loading: signInLoading,
    error: signInError,
    act: signIn,
  } = useAsync({ handler: authApi.signIn, immediate: false });

  return {
    signInLoading,
    signInError,
    signIn,
  };
}
