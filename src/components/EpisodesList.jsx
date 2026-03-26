import { Link } from "react-router-dom";
import useFetch from "../useFetch";

function EpisodesList({ num }) {
  const { data: episodes, error } = useFetch(
    "https://thesimpsonsapi.com/api/episodes",
  );
  return (
    <div className="episodes-list">
      <h2>Episodes</h2>
      {error && <p>{error}</p>}

      {episodes &&
        episodes.map((ep) => (
          <ul>
            <Link to={`/episodes-details/${ep.id}`}>
              {ep.id < num && (
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
              )}
            </Link>
          </ul>
        ))}
    </div>
  );
}

export default EpisodesList;
