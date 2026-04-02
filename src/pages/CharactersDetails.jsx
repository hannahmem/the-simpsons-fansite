import CharacterInfo from "../components/CharacterInfo";
import NavBar from "../components/NavBar";
import ScrollButton from "../components/ScrollButton";

function CharactersDetails() {
  return (
    <div>
      <NavBar home={"Home"} characters={"Characters"} />
      <CharacterInfo />
      <ScrollButton />
    </div>
  );
}

export default CharactersDetails;
