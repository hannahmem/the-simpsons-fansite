import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

function CharacterInfo() {
  const { id } = useParams();
  const { data, error, isLoading } = useFetch(
    "https://thesimpsonsapi.com/api/characters/" + id,
  );

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
      {data && (
        <div className="info-container">
          <h2>{data.name}</h2>
          <img
            src={`https://cdn.thesimpsonsapi.com/200${data.portrait_path}`}
            alt={`A drawing of ${data.name}`}
          />
          <p>{data.description}</p>
          <span>
            First appearance: season {data.first_appearance_ep["season"]}{" "}
            episode {data.first_appearance_ep["episode_number"]} '
            {data.first_appearance_ep["name"]}'
          </span>
          {data.first_appearance_ep["airdate"] && (
            <span>in {data.first_appearance_ep["airdate"]}</span>
          )}
        </div>
      )}
    </div>
  );
}

export default CharacterInfo;
