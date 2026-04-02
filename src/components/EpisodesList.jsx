import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useFetch from "../useFetch";
import PageButton from "./PageButton";

function EpisodesList({ num }) {
  const [page, setPage] = useState(() => {
    const savedPage = sessionStorage.getItem("currentEpPage");
    return savedPage ? parseInt(savedPage) : 1;
  });

  const {
    data: episodes,
    error,
    isLoading,
  } = useFetch(`https://thesimpsonsapi.com/api/episodes?page=${page}`);

  useEffect(() => {
    sessionStorage.setItem("currentEpPage", page.toString());
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

      <h2>Episodes</h2>
      <div className="link-container">
        {episodes &&
          episodes
            .map((ep) => (
              <Link to={`/episodes-details/${ep.id}`} key={ep.id}>
                <li>
                  <p>{ep.name}</p>
                  <img
                    src={`https://cdn.thesimpsonsapi.com/200${ep.image_path}`}
                    alt={`Capa do episódio ${ep.name}`}
                    width={250}
                  />
                  <p>Season {ep.season}</p>
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
          text1={"Previous"}
          text2={"Next"}
        />
      }
    </div>
  );
}

export default EpisodesList;
