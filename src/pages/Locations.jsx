import LocationsList from "../components/LocationsList";
import NavBar from "../components/NavBar";

function Locations() {
  return (
    <>
      <NavBar home={"Home"} characters={"Characters"} episodes={"Episodes"} />
      <LocationsList num={20} />
    </>
  );
}

export default Locations;
