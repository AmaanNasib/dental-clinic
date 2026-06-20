import { useState } from "react";

type ApiFunction<T> = () => Promise<{ data: T }>;

const useApi = <T,>(apiFunc: ApiFunction<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const request = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await apiFunc();
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    request,
  };
};

export default useApi;