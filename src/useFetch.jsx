import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [episodes, setEpisodes] = useState(null);
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
        const charactersList = data.results;
        const episodesList = data.results;
        setEpisodes(episodesList);
        setData(charactersList);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return { data, error };
}

export default useFetch;
