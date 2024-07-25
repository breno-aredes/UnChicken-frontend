import { useState, useEffect } from "react";

interface UseAsyncProps<T = void> {
  handler: (data?: T) => Promise<any>;
  immediate?: boolean;
}

interface UseAsyncResult<T> {
  data: any | null;
  loading: boolean;
  error: Error | null;
  act: (data?: T) => Promise<any>;
}

export default function useAsync<T>({
  handler,
  immediate = true,
}: UseAsyncProps<T>): UseAsyncResult<T> {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(immediate);
  const [error, setError] = useState<Error | null>(null);

  const act = async (data?: T): Promise<any> => {
    setLoading(true);
    setError(null);

    try {
      const result = await handler(data);
      setData(result);
      setLoading(false);
      return result;
    } catch (err) {
      if (err instanceof Error) {
        setError(err);
      }
      setLoading(false);
      throw err;
    }
  };

  useEffect(() => {
    if (immediate) {
      act();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    loading,
    error,
    act,
  };
}
