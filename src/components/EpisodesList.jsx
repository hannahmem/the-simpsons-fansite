import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useFetch from "../useFetch";
import PageButton from "./PageButton";

function EpisodesList({ num }) {
  const [page, setPage] = useState(() => {
    const savedPage = sessionStorage.getItem("currentEpPage");
    return savedPage ? parseInt(savedPage) : 1;
  });

  const { data: episodes, error } = useFetch(
    `https://thesimpsonsapi.com/api/episodes?page=${page}`,
  );

  useEffect(() => {
    sessionStorage.setItem("currentEpPage", page.toString());
  }, [page]);

  return (
    <div className="page-container">
      <h2>Episodes</h2>
      {error && <p>{error}</p>}

      <div className="list-container">
        {episodes &&
          episodes
            .map((ep) => (
              <Link to={`/episodes-details/${ep.id}`}>
                <li key={ep.id}>
                  <p>
                    Season {ep.season}: {ep.name}
                  </p>
                  <img
                    src={`https://cdn.thesimpsonsapi.com/200${ep.image_path}`}
                    alt={`Capa do episódio ${ep.name}`}
                    width={250}
                  />
                </li>
              </Link>
            ))
            .slice(0, num)}
        {
          <PageButton
            handlePrevBtn={() =>
              setPage((prev) => (prev > 1 ? prev - 1 : prev))
            }
            handleNextBtn={() => setPage((prev) => prev + 1)}
            page={page}
            text1={"Previous"}
            text2={"Next"}
          />
        }
      </div>
    </div>
  );
}

export default EpisodesList;
