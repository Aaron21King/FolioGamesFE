import "./App.css";
import { Routes, Route} from "react-router-dom";
import Points from "./components/Players Points/Points";
import Players from "./components/Players/index";
import Podium from "./components/Players Podium/Podium";
import Error404 from "./components/Error404/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/points" element={<Points />} />
        <Route exact path="/" element={<Players />} />
        <Route exact path="/podium" element={<Podium />} />
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </div>
  );
}

export default App;
