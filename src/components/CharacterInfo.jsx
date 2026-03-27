import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

function CharacterInfo() {
  const { id } = useParams();
  const { data, error } = useFetch(
    "https://thesimpsonsapi.com/api/characters/" + id,
  );

  return (
    <div className="page-container">
      {error && <p>{error}</p>}

      {data && (
        <div className="info-container">
          <h2>{data.name}</h2>
          {/* {console.log(data)} */}
          <img
            src={`https://cdn.thesimpsonsapi.com/200${data.portrait_path}`}
            alt={`A drawing of ${data.name}`}
          />
          <p>{data.description}</p>
          <p>
            First appearance: season {data.first_appearance_ep["season"]}{" "}
            episode {data.first_appearance_ep["episode_number"]} '
            {data.first_appearance_ep["name"]}'
          </p>
          {data.first_appearance_ep && (
            <span>in {data.first_appearance_ep["airdate"]}</span>
          )}
        </div>
      )}
    </div>
  );
}

export default CharacterInfo;
