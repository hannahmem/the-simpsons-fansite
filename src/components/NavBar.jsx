import { Link } from "react-router-dom";

function NavBar({ home, characters, episodes, locations }) {
  return (
    <div className="nav-bar">
      {home && <Link to="/">{home}</Link>}
      {characters && <Link to="/characters">{characters}</Link>}
      {episodes && <Link to="/episodes">{episodes}</Link>}
      {locations && <Link to="/locations">{locations}</Link>}
    </div>
  );
}

export default NavBar;
