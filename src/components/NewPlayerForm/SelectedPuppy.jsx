import { useEffect, useState } from "react";

export default function SelectedPuppy({ selectedPuppyId, setSelectedPuppyId }) {
  const [Puppy, setPuppy] = useState(null);
  const cohortName = "2308-FTB-MT-WEB-PT";
  const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;
  const cohortPlayersAPI = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;

  useEffect(() => {
    async function fetchSingleUser(playerId) {
      try {
        const res = await fetch(`${cohortPlayersAPI}/${playerId}`);
        const json = await res.json();
        console.log(json);
        setPuppy(json);
      } catch (err) {
        console.log(err);
      }
    }
    fetchSingleUser(selectedPuppyId);
  }, []);

  return (
    <div>
      <p> Selected Puppy is {Puppy?.name}</p>
      <p>Breed: {Puppy?.breed}</p>
      <p>Status: {Puppy?.status}</p>
      <button onClick={() => setSelectedPuppyId(null)}>Close</button>
    </div>
  );
}
