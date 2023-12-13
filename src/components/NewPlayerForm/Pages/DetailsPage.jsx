import React, { useState, useEffect } from "react";
import PlayerModal from "../../PlayerModal/PlayerModal";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchSinglePlayer } from "../../../API";
import { addNewPlayer } from "../../../API";

const DetailsPage = () => {
  const [players, setPlayers] = useState([]);
  const { id } = useParams();
  console.log(id);
  const [puppy, setPuppy] = useState(null);
  useEffect(() => {
    async function selectedPlayer() {
      try {
        const data = await fetchSinglePlayer(id);
        console.log(data.data.player);
        setPuppy(data.data.player);
      } catch (err) {
        console.log(err);
      }
    }
    selectedPlayer();
  }, []);
  return (
    <div id="puppyDetails">
      <PlayerModal player={puppy} />
    </div>
  );
};

export default DetailsPage;
