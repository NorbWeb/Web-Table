import { Route, Routes } from "react-router-dom";
import GameContext from "../src/components/contexts/GameContext";
import "./App.css";
import Home from "../src/components/pages/Home";
import Player from "../src/components/pages/Player";
import GameMaster from "../src/components/pages/GameMaster";
import Attributes from "./components/gameMaster/attributes/Attributes";

function App() {
  return (
    <GameContext.Provider value={null}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player" element={<Player />} />
        <Route path="/game-master" element={<GameMaster />}>
          <Route path="attributes" element={<Attributes />} />
        </Route>
      </Routes>
    </GameContext.Provider>
  );
}

export default App;
