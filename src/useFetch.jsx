import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

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
        if (data.hasOwnProperty("results")) {
          setData(data.results);
        } else {
          setData(data);
        }
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return { data, error };
}

export default useFetch;
