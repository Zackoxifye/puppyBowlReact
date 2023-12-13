import { cohortPlayersAPI } from "../constants/APIConstants";

//-------------------------------------------FETCH ALL PLAYERS-----------------------------

const fetchAllPlayers = async () => {
  try {
    const response = await fetch(cohortPlayersAPI);
    const responseData = await response.json();
    const allPlayers = responseData.data.players;
    console.log("From fetchAllPlayers 2: ", allPlayers);
    return allPlayers;
  } catch (err) {
    console.error("Uh oh, trouble fetching players!", err);
  }
};

//------------------------------------------FETCH SINGLE PLAYER-----------------------------

const fetchSinglePlayer = async (playerId) => {
  try {
    const response = await fetch(`${cohortPlayersAPI}/${playerId}`);
    const responseData = await response.json();
    const player = responseData;
    console.log("From fetch SinglePlayer 1:", player);
    return player;
  } catch (err) {
    console.error(`Oh no, trouble fetching player #${playerId}!`, err);
  }
};

//----------------------------------------ADD NEW PLAYER------------------------------------

const addNewPlayer = async (playerObj) => {
  try {
    const response = await fetch(cohortPlayersAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(playerObj),
    });

    const newPlayer = await response.json();
    console.log("New Player Added:", newPlayer);
    return newPlayer;
  } catch (err) {
    console.error("Oops, something went wrong with adding that player!", err);
  }
};

//------------------------------REMOVE PLAYER--------------------------------------------

const removePlayer = async (playerId) => {
  try {
    const response = await fetch(`${cohortPlayersAPI}/${playerId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    // Check if the deletion was successful
    if (response.ok) {
      console.log(`Player with ID ${playerId} deleted successfully.`);
    } else {
      console.error(`Failed to delete player with ID ${playerId}.`);
    }
  } catch (err) {
    console.error(
      `Whoops, trouble removing player #${playerId} from the roster!`,
      err
    );
  }
};

export { fetchAllPlayers, fetchSinglePlayer, addNewPlayer, removePlayer };
