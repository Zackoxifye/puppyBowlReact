import React, { useState } from "react";
import { addNewPlayer } from "../../API";

const NewPlayerForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addNewPlayer({ name, breed, status });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="breed">Breed:</label>
      <input
        type="text"
        id="breed"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
        required
      />

      <label htmlFor="status">Status:</label>
      <input
        type="text"
        id="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        required
      />

      <button type="submit">Add Player</button>
    </form>
  );
};

export default NewPlayerForm;
