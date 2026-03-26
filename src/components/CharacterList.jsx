import { Link } from "react-router-dom";
import useFetch from "../useFetch";

function CharacterList({ num, phraseNum }) {
  const { data: characters, error } = useFetch(
    "https://thesimpsonsapi.com/api/characters",
  );

  return (
    <div className="char-container">
      {error && <p>{error}</p>}
      <h2>Characters</h2>
      {characters &&
        characters
          .map((char) => (
            <ul className="char-list">
              <Link to={`/character-details/${char.id}`}>
                <li key={char.id}>
                  <p>{char.name}</p>
                  <img
                    src={`https://cdn.thesimpsonsapi.com/200${char.portrait_path}`}
                    alt={`Desenho do personagem ${char.name}`}
                    width={100}
                  />
                  <p>{char.age}</p>
                  <p>{char.occupation}</p>
                  <p>{char.phrases[phraseNum]}</p>
                </li>
              </Link>
            </ul>
          ))
          .slice(0, num)}
    </div>
  );
}
export default CharacterList;
