import "./App.css";
import { Routes, Route} from "react-router-dom";
import Points from "./components/Players Points/Points";
import Players from "./components/Players/index";
import Podium from "./components/Players Podium/Podium";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/points" element={<Points />} />
        <Route path="/" element={<Players />} />
        <Route path="/podium" element={<Podium />} />
      </Routes>
    </div>
  );
}

export default App;
