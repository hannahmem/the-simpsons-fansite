import CharacterList from "../components/CharacterList";
import useFetch from "../useFetch";
import NavBar from "../components/NavBar";
// import { useSearchParams } from "react-router-dom";

function Characters() {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const page = searchParams.get("page") || "1";

  const { data: char, error } = useFetch(
    `https://thesimpsonsapi.com/api/characters`,
  );

  return (
    <div>
      <NavBar home={"Home"} episodes={"Episodes"} />
      <div>
        {error && <h5>{error}</h5>}
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
    </div>
  );
}

export default Characters;
