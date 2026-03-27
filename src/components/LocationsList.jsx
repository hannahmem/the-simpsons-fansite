import { useState, useEffect } from "react";
import useFetch from "../useFetch";
import PageButton from "./PageButton";

function LocationsList({ num }) {
  const [page, setPage] = useState(() => {
    const savedPage = sessionStorage.getItem("currentLocPage");
    return savedPage ? parseInt(savedPage) : 1;
  });

  const { data: location, error } = useFetch(
    `https://thesimpsonsapi.com/api/locations?page=${page}`,
  );

  useEffect(() => {
    sessionStorage.setItem("currentLocPage", page.toString());
  }, [page]);

  return (
    <div className="page-container">
      {error && <p>{error}</p>}
      <h2>Locations</h2>

      <div className="list-container">
        {location &&
          location
            .map((loc) => (
              <li key={loc.id}>
                <h3>{loc.name}</h3>
                <img
                  src={`https://cdn.thesimpsonsapi.com/200${loc.image_path}`}
                  alt={`Desenho do local ${loc.name}`}
                  width={250}
                />
                <br />
                {loc.use && loc.town && (
                  <span className="loc-span">{loc.use} in </span>
                )}
                {loc.town && <span className="loc-span">{loc.town}</span>}
              </li>
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

export default LocationsList;
