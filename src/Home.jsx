import CharacterList from "./components/CharacterList";
import EpisodesList from "./components/EpisodesList";
import useFetch from "./useFetch";

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
