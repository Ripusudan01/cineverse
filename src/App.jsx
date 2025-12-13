import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Favourite from "./pages/favorites";
import Navbar from "./components/Navbar";
import { MovieProvider } from "./contexts/MovieContexts"; 

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <MovieProvider>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <main>
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} />} />
          <Route path="/favourite" element={<Favourite searchQuery={searchQuery}/>} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;