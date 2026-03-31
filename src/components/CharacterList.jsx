import { Link } from "react-router-dom";
import useFetch from "../useFetch";
import { useState, useEffect } from "react";
import PageButton from "./PageButton";

function CharacterList({ num, phraseNum }) {
  const [page, setPage] = useState(() => {
    const savedPage = sessionStorage.getItem("currentCharPage");
    return savedPage ? parseInt(savedPage) : 1;
  });
  const {
    data: characters,
    error,
    isLoading,
  } = useFetch(`https://thesimpsonsapi.com/api/characters?page=${page}`);

  useEffect(() => {
    sessionStorage.setItem("currentCharPage", page.toString());
  }, [page]);

  return (
    <div className="page-container">
      {error && <p>{error}</p>}
      {isLoading && (
        <div>
          <img
            className="loading-img"
            src={
              "https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif"
            }
            width={70}
            alt="Loading gif"
          />
        </div>
      )}

      <h2>Characters</h2>
      <div className="list-container">
        {characters &&
          characters
            .map((char) => (
              <li key={char.id}>
                <Link to={`/character-details/${char.id}`}>
                  <h3>{char.name}</h3>
                  <img
                    src={`https://cdn.thesimpsonsapi.com/200${char.portrait_path}`}
                    alt={`Desenho do personagem ${char.name}`}
                    width={100}
                  />
                  {char.age &&
                    (char.age > 1 ? (
                      <p>{char.age} years old</p>
                    ) : (
                      <p>{char.age} year old</p>
                    ))}
                  <p>{char.occupation}</p>
                </Link>
                {char.phrases[phraseNum] && (
                  <p className="cutoff-text" id="phrase">
                    "{char.phrases[phraseNum]}"
                  </p>
                )}
                {char.phrases[phraseNum] &&
                  (char.phrases[phraseNum].length > 100 ? (
                    <input type="checkbox" className="expand-btn" />
                  ) : null)}
              </li>
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
