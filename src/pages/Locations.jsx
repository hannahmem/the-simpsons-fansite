import LocationsList from "../components/LocationsList";
import NavBar from "../components/NavBar";
import ScrollButton from "../components/ScrollButton";

function Locations() {
  return (
    <>
      <NavBar home={"Home"} characters={"Characters"} episodes={"Episodes"} />
      <LocationsList num={20} />
      <ScrollButton />
    </>
  );
}

export default Locations;
