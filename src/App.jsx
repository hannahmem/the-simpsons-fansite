import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import "./App.css";
import Characters from "./pages/Characters";
import Episodes from "./pages/Episodes";
import CharactersDetails from "./pages/CharactersDetails";
import EpisodesDetails from "./pages/EpisodesDetails";
import Locations from "./pages/Locations";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/episodes" element={<Episodes />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/character-details/:id" element={<CharactersDetails />} />
      <Route path="/episodes-details/:id" element={<EpisodesDetails />} />
    </Routes>
  );
}

export default App;
