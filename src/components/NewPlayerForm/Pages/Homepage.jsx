import React, { useState, useEffect } from "react";
import PlayerCard from "../../PlayerCard/PlayerCard";
import { Link, useNavigate } from "react-router-dom";
import { fetchAllPlayers } from "../../../API";

const HomePage = () => {
  const [players, setPlayers] = useState([]);
  // const [selectedPlayer, setSelectedPlayer] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getPlayerData() {
      try {
        const data = await fetchAllPlayers();
        console.log(data);
        setPlayers(data);
      } catch (err) {
        console.log(err);
      }
    }
    getPlayerData();
  }, []);
  return (
    <div>
      <div id="all-players-container">
        {players.map((player) => (
          <PlayerCard
            key={player.id}
            player={player}
            onDetailsClick={() => navigate(`/details/${player.id}`)}
            onRemoveClick={() => onRemoveClick(playerId)}
          />
        ))}
      </div>

      <Link to="/add">Add New Puppy</Link>
    </div>
  );
};

export default HomePage;
