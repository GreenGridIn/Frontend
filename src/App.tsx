import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Prediction from "./pages/Prediction";
import LocationPrediction from "./pages/LocationPrediction";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prediction" element={<Prediction />} />
        <Route path="/location" element={<LocationPrediction />} />
      </Routes>
    </>
  );
}

export default App;
