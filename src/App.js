import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Table from './components/Table';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Table />} />
     
    </Routes>
  </div>
  );
}

export default App;
