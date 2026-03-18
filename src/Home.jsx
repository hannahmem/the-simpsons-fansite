import { useEffect, useState } from "react";
import CharacterList from "./components/CharacterList";
import EpisodesList from "./components/EpisodesList";

function Home() {
  const [characters, setCharacters] = useState(null);
  const [episodes, setEpisodes] = useState(null);

  useEffect(() => {
    fetch("https://thesimpsonsapi.com/api/characters")
      .then((res) => res.json())
      .then((data) => {
        const charactersList = data.results;
        const episodesList = data.results;
        setEpisodes(episodesList);
        setCharacters(charactersList);
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
      <section className="characters">
        {characters && (
          <CharacterList
            title={"Characters"}
            characters={characters}
            url={"https://cdn.thesimpsonsapi.com/500"}
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
