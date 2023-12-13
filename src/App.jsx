import React, { useState, useEffect } from "react";
import PlayerCard from "./components/PlayerCard/PlayerCard";
import PlayerModal from "./components/PlayerModal/PlayerModal";
import { APIURL } from "./constants/APIConstants";
import { cohortPlayersAPI } from "./constants/APIConstants";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/NewPlayerForm/Pages/Homepage";
import DetailsPage from "./components/NewPlayerForm/Pages/DetailsPage";
import AddNewPuppyPage from "./components/NewPlayerForm/Pages/AddPlayer";
import "./index.css";
const App = () => {
  return (
    <Router>
      <div>
        <header>
          <h1>Puppy Bowl</h1>
          <div className="navbar">
            <span>
              <Link to="/">All Puppies</Link>
              <Link to="/add">Add a Player</Link>
            </span>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/add" element={<AddNewPuppyPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
