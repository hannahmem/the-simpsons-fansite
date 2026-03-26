import { Link } from "react-router-dom";
import { useState } from "react";
import useFetch from "../useFetch";

function EpisodesList({ num, button }) {
  const [page, setPage] = useState(1);
  const { data: episodes, error } = useFetch(
    `https://thesimpsonsapi.com/api/episodes?page=${page}`,
  );
  return (
    <div className="episodes-list">
      <h2>Episodes</h2>
      <p>Page {page}</p>
      {error && <p>{error}</p>}

      {episodes &&
        episodes
          .map((ep) => (
            <ul>
              <Link to={`/episodes-details/${ep.id}`}>
                <li key={ep.id}>
                  <p>
                    Season {ep.season}: {ep.name}
                  </p>
                  <img
                    src={`https://cdn.thesimpsonsapi.com/200${ep.image_path}`}
                    alt={`Capa do episódio ${ep.name}`}
                    width={250}
                  />
                </li>
              </Link>
            </ul>
          ))
          .slice(0, num)}

      <button onClick={() => setPage((prev) => (prev > 1 ? prev - 1 : prev))}>
        Previous
      </button>
      <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
    </div>
  );
}

export default EpisodesList;
