import CharacterList from "./components/CharacterList";
import EpisodesList from "./components/EpisodesList";
import useFetch from "./useFetch";
// import Link from "react-router-dom";
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
      <div className="error-message">{/* <p>{error}</p> */}</div>
      <section className="characters">
        <CharacterList num={6} phraseNum={3} />
        <Link to="/characters">View full list of characters</Link>
      </section>
      <section className="episodes">
        <EpisodesList num={6} />
        <Link to={"/episodes"}>View full list of episodes</Link>
      </section>
    </>
  );
}

export default Home;
