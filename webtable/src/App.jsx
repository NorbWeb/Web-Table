import { Route, Routes } from "react-router-dom";
import GameContext from "../src/components/contexts/GameContext";
import "./App.css";
import Home from "../src/components/pages/Home";
import Player from "../src/components/pages/Player";
import GameMaster from "../src/components/pages/GameMaster";

function App() {
  return (
    <GameContext.Provider value={null}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player" element={<Player />} />
        <Route path="/game-master" element={<GameMaster />} />
      </Routes>
    </GameContext.Provider>
  );
};

export default App;

