import { Link } from "react-router-dom";

function NavBar({ home, characters, episodes }) {
  return (
    <div className="nav-bar">
      {home && <Link to="/">{home}</Link>}
      {characters && <Link to="/characters">{characters}</Link>}
      {episodes && <Link to="/episodes">{episodes}</Link>}
    </div>
  );
}

export default NavBar;
