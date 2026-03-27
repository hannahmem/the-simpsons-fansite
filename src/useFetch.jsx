import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            "Resources not found. Check the address and try again.",
          );
        }
        return res.json();
      })
      .then((data) => {
        data.hasOwnProperty("results") ? setData(data.results) : setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [url]);

  return { data, error, isLoading };
}

export default useFetch;
