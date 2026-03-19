import CharacterList from "./components/CharacterList";
import EpisodesList from "./components/EpisodesList";
import useFetch from "./useFetch";
// import Link from "react-router-dom";
import { Link } from "react-router-dom";

function Home() {
  const { data, error } = useFetch("https://thesimpsonsapi.com/api/characters");
  return (
    <>
      <h1>The Simpsons Fanbase</h1>
      <p>
        Welcome to The Simpsons' fan made website
        <br />
        Here you can find everything about the characters and your favorite
        episodes
      </p>
      <div className="error-message">
        <p>{error}</p>
      </div>
      <section className="characters">
        {data && (
          <CharacterList
            title={"Characters"}
            characters={data}
            url={"https://cdn.thesimpsonsapi.com"}
            num={6}
            phraseNum={3}
          />
        )}
        {/* <div>
          <label>Search character </label>
          <input type="text" />
        </div> */}
        <Link to="/characters">View full list of characters</Link>
      </section>
      <section className="episodes">
        <ul>
          <li>
            <Link to="/season-one">Season 1</Link>
          </li>
          <li>
            <Link to="/season-two">Season 2</Link>
          </li>{" "}
          <li>
            <Link to="/season-three">Season 3</Link>
          </li>{" "}
          <li>
            <Link to="/season-four">Season 4</Link>
          </li>{" "}
          <li>
            <Link to="/season-five">Season 5</Link>
          </li>{" "}
          <li>
            <Link to="/season-six">Season 6</Link>
          </li>
          <li>
            <Link to="/season-seven">Season 7</Link>
          </li>{" "}
          <li>
            <Link to="/season-eight">Season 8</Link>
          </li>{" "}
          <li>
            <Link to="/season-nine">Season 9</Link>
          </li>{" "}
          <li>
            <Link to="/season-ten">Season 10</Link>
          </li>
          <li>
            <Link to="/Episodes">View full list of episodes</Link>
          </li>
        </ul>
        {/* {episodes && (
          <div>
            <EpisodesList
              episodes={episodes}
              title={"Episodes"}
              url={"https://cdn.thesimpsonsapi.com"}
            />
          </div>
        )} */}
      </section>
    </>
  );
}

export default Home;
