import React from "react";

import Button from "./Button";
import Overlay from "./Overlay";
import PlayerForm from "./PlayerForm";

import classes from "./Setup.module.css";

const Setup = ({ onStart }) => {
  const startGame = (event) => {
    event.preventDefault();
    onStart();
  };
  // Players

  // Deck

  // Number of cards

  return (
    <>
      <Overlay />
      <form className={classes.form}>
        <div className={classes.players}>
          <PlayerForm playerNumber="1" />
          <PlayerForm playerNumber="2" />
        </div>
        <div className={classes["form-deck"]}></div>
        <Button onClick={startGame}>Start Game!</Button>
      </form>
    </>
  );
};

export default Setup;
