// Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// CSS
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

// Pages
import Home from "./pages/Home/Home";

// Components

function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
