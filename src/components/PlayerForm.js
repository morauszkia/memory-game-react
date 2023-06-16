import React from "react";

import classes from "./PlayerForm.module.css";

const PlayerForm = ({ playerNumber }) => {
  return (
    <div className={classes.form}>
      <div className={classes["form-control"]}>
        <label htmlFor={`name-${playerNumber}`}>Player {playerNumber}:</label>
        <input
          type="text"
          id={`name-${playerNumber}`}
          name={`name-${playerNumber}`}
          placeholder={`Please enter your name`}
        />
      </div>
    </div>
  );
};

export default PlayerForm;
