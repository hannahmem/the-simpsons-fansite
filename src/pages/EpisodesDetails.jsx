import EpisodeInfo from "../components/EpisodeInfo";
import NavBar from "../components/NavBar";

function EpisodesDetails() {
  return (
    <div className="ep-info">
      <NavBar home={"Home"} episodes={"Episodes"} />
      <EpisodeInfo />
    </div>
  );
}

export default EpisodesDetails;
