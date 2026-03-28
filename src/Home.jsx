import CharacterList from "./components/CharacterList";
import EpisodesList from "./components/EpisodesList";
import LocationsList from "./components/LocationsList";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <img
        id="logo"
        src={
          "https://logos-world.net/wp-content/uploads/2023/02/The-Simpsons-Symbol.png"
        }
        alt="The simpsons logo"
        width={200}
      />
      <div>
        {/* <h1>The Simpsons Fanbase</h1> */}
        <p id="subtitle">
          Welcome to The Simpsons' fan made website
          <br />
          Here you can find everything about the characters and your favorite
          episodes
        </p>
      </div>
      <section className="characters-section">
        <CharacterList num={10} phraseNum={3} />
        <Link to="/characters">View full list of characters</Link>
      </section>
      <section className="episodes-section">
        <EpisodesList num={10} />
        <Link to={"/episodes"}>View full list of episodes</Link>
      </section>
      <section className="locations-section">
        <LocationsList num={10} />
        <Link to={"/locations"}>View full list of locations</Link>
      </section>
    </div>
  );
}

export default Home;
