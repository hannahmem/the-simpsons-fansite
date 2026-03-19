function EpisodesList({ title, episodes, url }) {
  return (
    <div className="episodes-list">
      <h2>{title}</h2>

      {episodes.map((ep) => (
        <ul>
          <li key={ep.id}>
            <p>{ep.name}</p>
            <img
              src={`${url}/500${ep.image_path}`}
              alt={`Capa do episódio ${ep.name}`}
            />
          </li>
        </ul>
      ))}
    </div>
  );
}

export default EpisodesList;
