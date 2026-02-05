import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import YesPage from "./YesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/yes" element={<YesPage />} />
    </Routes>
  );
}

export default App;
