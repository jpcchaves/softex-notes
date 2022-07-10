import React from 'react';
// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// CSS
import "./App.css";

// Pages
import Home from "./pages/Home/Home";
import Modulo1 from "./pages/Modulo1/Modulo1";

// Components
import Navbar from "./components/Navbar/Navbar";
import Modulo2 from "./pages/Modulo2/Modulo2";
import Modulo3 from "./pages/Modulo3/Modulo3";
import Modulo4 from "./pages/Modulo4/Modulo4";
import Modulo5 from "./pages/Modulo5/Modulo5";
import Modulo6 from "./pages/Modulo6/Modulo6";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        {/* Navbar */}
        <Navbar />
        <hr/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/modulo1" element={<Modulo1 />} />
            <Route path="/modulo2" element={<Modulo2 />} />
            <Route path="/modulo3" element={<Modulo3 />} />
            <Route path="/modulo4" element={<Modulo4 />} />
            <Route path="/modulo5" element={<Modulo5 />} />
            <Route path="/modulo6" element={<Modulo6 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
