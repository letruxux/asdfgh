/* eslint-disable react-hooks/exhaustive-deps */
import { searchPackages, SearchParams, SearchResponse } from "@/lib/winget";
import { useEffect, useState } from "react";

export function useWingetSearch(params: SearchParams) {
  const [result, setResult] = useState<SearchResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    searchPackages(params)
      .then(setResult)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { result, loading, error };
}
