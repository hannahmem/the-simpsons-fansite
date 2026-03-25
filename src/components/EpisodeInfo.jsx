import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

function EpisodeInfo() {
  const { id } = useParams();
  const { data: ep, error } = useFetch(
    "https://thesimpsonsapi.com/api/episodes/" + id,
  );
  return (
    <div className="ep-info-container">
      {error && <p>{error}</p>}
      {ep && (
        <div>
          <h2>{ep.name}</h2>
          <img
            src={`https://cdn.thesimpsonsapi.com/500${ep.image_path}`}
            alt={`Drawing cover of the episode ${ep.name}`}
            width={400}
          />
          <h3>
            Season {ep.season} Episode {ep.episode_number}
          </h3>
          {ep.airdate && <p>Air date: {ep.airdate}</p>}
          {ep.description && <p>{ep.description}</p>}
          <h4>Synopsys</h4>
          <p>{ep.synopsis}</p>
        </div>
      )}
    </div>
  );
}

export default EpisodeInfo;
