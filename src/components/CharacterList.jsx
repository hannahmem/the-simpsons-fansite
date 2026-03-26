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
    <div className="char-container">
      {error && <p>{error}</p>}
      <h2>Characters</h2>
      {characters &&
        characters
          .map((char) => (
            <ul className="char-list">
              <Link to={`/character-details/${char.id}`}>
                <li key={char.id}>
                  <p>{char.name}</p>
                  <img
                    src={`https://cdn.thesimpsonsapi.com/200${char.portrait_path}`}
                    alt={`Desenho do personagem ${char.name}`}
                    width={100}
                  />
                  <p>{char.age}</p>
                  <p>{char.occupation}</p>
                  <p>{char.phrases[phraseNum]}</p>
                </li>
              </Link>
            </ul>
          ))
          .slice(0, num)}
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
