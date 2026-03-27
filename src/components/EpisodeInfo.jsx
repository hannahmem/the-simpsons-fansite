import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

function EpisodeInfo() {
  const { id } = useParams();
  const {
    data: ep,
    error,
    isLoading,
  } = useFetch("https://thesimpsonsapi.com/api/episodes/" + id);
  return (
    <div className="page-container">
      {error && <p>{error}</p>}
      {isLoading && (
        <div>
          <img
            className="loading-img"
            src={
              "https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif"
            }
            width={70}
            alt="Loading gif"
          />
        </div>
      )}
      {ep && (
        <div className="info-container">
          <h2>{ep.name}</h2>
          <img
            src={`https://cdn.thesimpsonsapi.com/500${ep.image_path}`}
            alt={`Drawing cover of the episode ${ep.name}`}
            width={400}
          />
          <h3 className="info-subtitle">
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
