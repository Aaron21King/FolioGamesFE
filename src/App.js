import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Points from "./components/Players Points/Points";
import Players from "./components/Players/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/points" element={<Points />} />
        <Route path="/players" element={<Players />} />
      </Routes>
    </div>
    
  );
}

export default App;
