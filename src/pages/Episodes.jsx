import useFetch from "../useFetch";
import EpisodesList from "../components/EpisodesList";
import NavBar from "../components/NavBar";

function Episodes() {
  const { data: eps, error } = useFetch(
    "https://thesimpsonsapi.com/api/episodes",
  );
  return (
    <div>
      <NavBar home={"Home"} characters={"Charaters"} />
      <p>{error}</p>
      {eps && (
        <div>
          <EpisodesList
            episodes={eps}
            title={"Episodes"}
            url={"https://cdn.thesimpsonsapi.com"}
          />
        </div>
      )}
    </div>
  );
}

export default Episodes;
