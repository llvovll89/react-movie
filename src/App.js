import React from "react";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Notice } from "./pages/Notice";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/notice" element={<Notice />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// https://api.themoviedb.org/3/movie/550?api_key=81dcb16b2b29c9eea6cdc5e7b5a42358
