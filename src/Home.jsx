import CharacterList from "./components/CharacterList";
import EpisodesList from "./components/EpisodesList";
import LocationsList from "./components/LocationsList";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>The Simpsons Fanbase</h1>
      <p>
        Welcome to The Simpsons' fan made website
        <br />
        Here you can find everything about the characters and your favorite
        episodes
      </p>
      <section className="characters">
        <CharacterList num={5} phraseNum={3} />
        <Link to="/characters">View full list of characters</Link>
      </section>
      <section className="episodes">
        <EpisodesList num={5} />
        <Link to={"/episodes"}>View full list of episodes</Link>
      </section>
      <section className="locations">
        <LocationsList num={5} />
        <Link to={"/locations"}>View full list of locations</Link>
      </section>
    </>
  );
}

export default Home;
