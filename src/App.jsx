import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    fetch("https://thesimpsonsapi.com/api/characters")
      .then((res) => res.json())
      .then((data) => {
        const charactersList = data.results;
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
        <h2>Characters</h2>
        <div>
          {characters.map((char) => {
            return (
              <div>
                <span>{char.id < 6 ? char.name : null}</span>
                <span>{char.id < 6 ? char.age : null}</span>
              </div>
            );
          })}
          {/* <img src={characters.portrait_path} alt="" width={150} height={150} />
          <p>{characters.name}</p>
          <p>{characters.age}</p>
          <p>{characters.occupation}</p>
          <p>{characters.phrases[3]}</p> */}
        </div>
        <div>
          <label>Search character </label>
          <input type="text" />
        </div>
      </section>
      <section className="seasons">
        <h2>Episodes</h2>
        <span>Season 1 </span>
        <span>Season 2 </span>
        <span>Season 3</span>
      </section>
    </>
  );
}

export default App;
