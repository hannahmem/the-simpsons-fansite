import { useEffect, useState } from "react";
import CharacterList from "./components/CharacterList";
import EpisodesList from "./components/EpisodesList";

function Home() {
  const [characters, setCharacters] = useState(null);
  const [episodes, setEpisodes] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://thesimpsonsapi.com/api/characters")
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            "Resources not found. Check the address and try again.",
          );
        }
        return res.json();
      })
      .then((data) => {
        const charactersList = data.results;
        const episodesList = data.results;
        setEpisodes(episodesList);
        setCharacters(charactersList);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

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
        {characters && (
          <CharacterList
            title={"Characters"}
            characters={characters}
            url={"https://cdn.thesimpsonsapi.com/500"}
            num={6}
            phraseNum={3}
          />
        )}
        {/* <div>
          <label>Search character </label>
          <input type="text" />
        </div> */}
      </section>
      {/* <section className="episodes">
        {episodes && (
          <div>
            <EpisodesList
              episodes={episodes}
              title={"Episodes"}
              url={"https://cdn.thesimpsonsapi.com/500"}
            />
          </div>
        )}
      </section> */}
    </>
  );
}

export default Home;
