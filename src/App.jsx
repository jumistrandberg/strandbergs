import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
<BrowserRouter>
  <Navigation />

  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
</BrowserRouter>
  );
}

export default App;