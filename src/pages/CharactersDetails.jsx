import CharacterInfo from "../components/CharacterInfo";
import NavBar from "../components/NavBar";

function CharactersDetails() {
  return (
    <div>
      <NavBar home={"Home"} characters={"Characters"} />
      <CharacterInfo />
    </div>
  );
}

export default CharactersDetails;
