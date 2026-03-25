import { Link } from "react-router-dom";

function EpisodesList({ title, episodes, url }) {
  return (
    <div className="episodes-list">
      <h2>{title}</h2>

      {episodes.map((ep) => (
        <ul>
          <Link to={`/episodes-details/${ep.id}`}>
            <li key={ep.id}>
              <p>{ep.name}</p>
              <img
                src={`${url}/500${ep.image_path}`}
                alt={`Capa do episódio ${ep.name}`}
              />
            </li>
          </Link>
        </ul>
      ))}
    </div>
  );
}

export default EpisodesList;
