import CharacterList from "../components/CharacterList";
import NavBar from "../components/NavBar";
import ScrollButton from "../components/ScrollButton";

function Characters() {
  return (
    <div className="charList-container">
      <NavBar home={"Home"} episodes={"Episodes"} locations={"Locations"} />
      <CharacterList num={20} phraseNum={3} />
      <ScrollButton />
    </div>
  );
}

export default Characters;
