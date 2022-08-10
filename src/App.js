import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Points from "./components/Players Points/Points";
import Players from "./components/Players/index";
import Podium from "./components/Players Podium/Podium"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/points" element={<Points />} />
        <Route path="/players" element={<Players />} />
        <Route path="/podium" element={<Podium />} />
      </Routes>
    </div>
    
  );
}

export default App;
