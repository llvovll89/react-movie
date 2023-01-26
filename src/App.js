import React from "react";
import { Home } from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Notice } from "./pages/notice/Notice";
import Tvtop from "./pages/Tv/Tvtop";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/notice" element={<Notice />} />
          <Route path='/tv' element={<Tvtop />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
