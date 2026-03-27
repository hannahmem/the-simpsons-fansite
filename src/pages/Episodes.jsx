import EpisodesList from "../components/EpisodesList";
import NavBar from "../components/NavBar";

function Episodes() {
  return (
    <div>
      <NavBar home={"Home"} characters={"Charaters"} locations={"Locations"} />
      <EpisodesList num={20} />
    </div>
  );
}

export default Episodes;
