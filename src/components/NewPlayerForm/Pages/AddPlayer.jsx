import React from "react";
import NewPlayerForm from "../NewPlayerForm";

const AddNewPuppyPage = ({ onSubmit }) => {
  return (
    <div id="addPlayerForm">
      <NewPlayerForm onSubmit={onSubmit} />
    </div>
  );
};

export default AddNewPuppyPage;
