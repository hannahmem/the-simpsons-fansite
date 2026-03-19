import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import "./App.css";
import CharacterList from "./components/CharacterList";
import EpisodesList from "./components/EpisodesList";
import Characters from "./pages/Characters";
import Episodes from "./pages/Episodes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/episodes" element={<Episodes />} />
    </Routes>
  );
}

export default App;
