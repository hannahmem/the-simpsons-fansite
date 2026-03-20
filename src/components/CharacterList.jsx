import { Link } from "react-router-dom";

function CharacterList({ title, characters, imageUrl, num, phraseNum }) {
  return (
    <div className="char-container">
      <h2>{title}</h2>
      {characters.map((char) => (
        <ul className="char-list">
          {char.id < num && (
            <Link to={`/character-details/${char.id}`}>
              <li key={char.id}>
                <p>{char.name}</p>
                <img
                  src={`${imageUrl}/200${char.portrait_path}`}
                  alt={`Desenho do personagem ${char.name}`}
                  width={100}
                />
                <p>{char.age}</p>
                <p>{char.occupation}</p>
                <p>{char.phrases[phraseNum]}</p>
              </li>
            </Link>
          )}
        </ul>
      ))}
    </div>
  );
}
export default CharacterList;
