import { Link } from "react-router-dom";
import useFetch from "../useFetch";
import { useState, useEffect } from "react";
import PageButton from "./PageButton";

function CharacterList({ num, phraseNum }) {
  const [page, setPage] = useState(() => {
    const savedPage = sessionStorage.getItem("currentCharPage");
    return savedPage ? parseInt(savedPage) : 1;
  });
  const { data: characters, error } = useFetch(
    `https://thesimpsonsapi.com/api/characters?page=${page}`,
  );

  useEffect(() => {
    sessionStorage.setItem("currentCharPage", page.toString());
  }, [page]);

  return (
    <div className="page-container">
      <h2>Characters</h2>
      {error && <p>{error}</p>}

      <div className="list-container">
        {characters &&
          characters
            .map((char) => (
              <Link to={`/character-details/${char.id}`}>
                <li key={char.id}>
                  <h3>{char.name}</h3>
                  <img
                    src={`https://cdn.thesimpsonsapi.com/200${char.portrait_path}`}
                    alt={`Desenho do personagem ${char.name}`}
                    width={100}
                  />
                  {char.age && <p>{char.age} years old</p>}
                  <p>{char.occupation}</p>
                  {char.phrases && <p id="phrase">{char.phrases[phraseNum]}</p>}
                </li>
              </Link>
            ))
            .slice(0, num)}
      </div>
      {
        <PageButton
          handlePrevBtn={() => setPage((prev) => (prev > 1 ? prev - 1 : prev))}
          handleNextBtn={() => setPage((prev) => prev + 1)}
          page={page}
          currentPage={"currentCharPage"}
          text1={"Previous"}
          text2={"Next"}
        />
      }
    </div>
  );
}
export default CharacterList;
