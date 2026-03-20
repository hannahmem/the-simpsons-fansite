import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

function CharactersDetails() {
  const { id } = useParams();
  const { data, error } = useFetch(
    "https://thesimpsonsapi.com/api/characters/" + id,
  );
  return (
    <div>
      <p>{error}</p>
      {data && (
        <div>
          {console.log(data)}
          <h2>{data.name}</h2>
          <img
            src={`https://cdn.thesimpsonsapi.com/200${data.portrait_path}`}
            alt={`A drawing of ${data.name}`}
          />
          <p>{data.description}</p>
          <p>
            First appearance: season {data.first_appearance_ep["season"]}{" "}
            episode {data.first_appearance_ep["episode_number"]} '
            {data.first_appearance_ep["name"]}' in{" "}
            {data.first_appearance_ep["airdate"]}
          </p>
        </div>
      )}
    </div>
  );
}

export default CharactersDetails;

{
  /* {char &&
	char.map((character) => {
	  <h2>{character.name}</h2>;
	})} */
}
