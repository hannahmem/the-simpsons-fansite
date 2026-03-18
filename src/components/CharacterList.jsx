function CharacterList({ title, characters, url }) {
  return (
    <div className="characters-list">
      <h2>{title}</h2>
      {characters.map((char) => (
        <ul>
          <li key={char.id}>
            <img
              src={url + char.portrait_path}
              alt={`Desenho do personagem ${char.name}`}
              width={100}
            />
            <p>{char.name}</p>
          </li>
        </ul>
      ))}
    </div>
  );
}
export default CharacterList;
