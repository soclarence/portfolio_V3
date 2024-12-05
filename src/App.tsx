import "./App.css";
import Dash from "./views/Dash";
import Archive from "./views/Archive";
import { Routes, Route } from "react-router-dom";
import Og from "./views/Og";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dash />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/og" element={<Og />} />
      </Routes>
    </div>
  );
}

export default App;