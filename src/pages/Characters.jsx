import CharacterList from "../components/CharacterList";
import NavBar from "../components/NavBar";

function Characters() {
  return (
    <div>
      <NavBar home={"Home"} episodes={"Episodes"} locations={"Locations"} />
      <CharacterList num={20} phraseNum={3} />
    </div>
  );
}

export default Characters;
