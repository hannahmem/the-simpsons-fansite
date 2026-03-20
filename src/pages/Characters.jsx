import CharacterList from "../components/CharacterList";
import useFetch from "../useFetch";

function Characters() {
  const { data: char, error } = useFetch(
    "https://thesimpsonsapi.com/api/characters",
  );
  return (
    <div>
      <p>{error}</p>
      {char && (
        <CharacterList
          title={"Characters"}
          characters={char}
          imageUrl={"https://cdn.thesimpsonsapi.com"}
          num={21}
          phraseNum={3}
        />
      )}
    </div>
  );
}

export default Characters;
