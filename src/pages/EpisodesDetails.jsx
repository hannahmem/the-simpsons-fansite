import EpisodeInfo from "../components/EpisodeInfo";
import NavBar from "../components/NavBar";
import ScrollButton from "../components/ScrollButton";

function EpisodesDetails() {
  return (
    <div className="ep-info">
      <NavBar home={"Home"} episodes={"Episodes"} />
      <EpisodeInfo />
      <ScrollButton />
    </div>
  );
}

export default EpisodesDetails;
