import EpisodeInfo from "../components/EpisodeInfo";
import NavBar from "../components/NavBar";

function EpisodesDetails() {
  return (
    <>
      <NavBar home={"Home"} episodes={"Episodes"} />
      <EpisodeInfo />
    </>
  );
}

export default EpisodesDetails;
