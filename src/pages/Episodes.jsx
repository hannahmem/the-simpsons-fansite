import EpisodesList from "../components/EpisodesList";
import NavBar from "../components/NavBar";

function Episodes() {
  return (
    <div>
      <NavBar home={"Home"} characters={"Charaters"} locations={"Locations"} />

      <div>
        <EpisodesList num={20} />
      </div>
    </div>
  );
}

export default Episodes;
