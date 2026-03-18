function EpisodesList({ title, episodes, url }) {
  return (
    <div className="episodes-list">
      <h2>{title}</h2>

      {episodes.map((ep) => (
        <ul>
          <li key={ep.id}>
            <p>{ep.name}</p>
            <img
              src={url + ep.image_path}
              alt={`Capa do episódio ${ep.name}`}
            />
          </li>
        </ul>
      ))}

      <span>Season 1 </span>
      <span>Season 2 </span>
      <span>Season 3</span>
    </div>
  );
}

export default EpisodesList;
