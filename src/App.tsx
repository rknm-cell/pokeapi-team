import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import PokedexContainer from "./PokedexContainer";
import TeamContainer from "./TeamContainer";

import "./App.css";

function App() {
  const [pokedex, setPokedex] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1024&offset=0")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPokedex(data.results);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []); // Empty array ensures this effect runs only once

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/pokedex"
          element={<PokedexContainer pokedex={pokedex} />}
        />
        <Route path="/team" element={<TeamContainer pokedex={pokedex} />} />
      </Routes>
    </Router>
  );
}

export default App;
