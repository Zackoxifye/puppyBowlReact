import React from "react";

const PlayerModal = ({ player }) => {
  return (
    <div>
      <div className="playerCard">
        <img src={player?.imageUrl} alt={player?.name} />
        <p>
          Name: {player?.name}
          <br />
          Breed: {player?.breed}
          <br />
          Status: {player?.status}
        </p>
      </div>
    </div>
  );
};

export default PlayerModal;
