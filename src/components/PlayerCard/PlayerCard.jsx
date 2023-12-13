import React from "react";

const PlayerCard = ({ player, onDetailsClick, onRemoveClick }) => {
  return (
    <div className="playerCard">
      <img src={player.imageUrl} alt={player.name} />
      <p>
        Name: {player.name}
        <br />
        Breed: {player.breed}
        <br />
        Status: {player.status}
      </p>
      <button onClick={() => onDetailsClick(player.id)}>See Details</button>
      <button onClick={() => onRemoveClick(player.id)}>Remove Player</button>
    </div>
  );
};

export default PlayerCard;
