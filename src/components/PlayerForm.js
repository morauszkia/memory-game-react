import React from "react";

import classes from "./PlayerForm.module.css";

const PlayerForm = ({ playerNumber }) => {
  return (
    <div className={classes.form}>
      <h2>Player {playerNumber}</h2>
      <div className={classes["form-control-1"]}>
        <label htmlFor={`name-${playerNumber}`}>Name</label>
        <input
          type="text"
          id={`name-${playerNumber}`}
          name={`name-${playerNumber}`}
          placeholder={`Player ${playerNumber}`}
        />
      </div>
      <div className={classes["form-control-2"]}>
        <p>Choose your color!</p>
        <label htmlFor={`color-${playerNumber}-1`}>Red</label>
        <input
          type="radio"
          id={`color-${playerNumber}-1`}
          name={`color-${playerNumber}`}
        />
        <label htmlFor={`color-${playerNumber}-2`}>Blue</label>
        <input
          type="radio"
          id={`color-${playerNumber}-2`}
          name={`color-${playerNumber}`}
        />
        <label htmlFor={`color-${playerNumber}-3`}>Green</label>
        <input
          type="radio"
          id={`color-${playerNumber}-3`}
          name={`color-${playerNumber}`}
        />
        <label htmlFor={`color-${playerNumber}-4`}>Yellow</label>
        <input
          type="radio"
          id={`color-${playerNumber}-4`}
          name={`color-${playerNumber}`}
        />
      </div>
    </div>
  );
};

export default PlayerForm;
