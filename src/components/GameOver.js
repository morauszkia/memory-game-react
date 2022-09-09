import React from "react";

import Button from "./Button";
import Overlay from "./Overlay";

import classes from "./GameOver.module.css";

const GameOver = ({ onButtonClick }) => {
  return (
    <>
      <Overlay />
      <div className={classes.container}>
        <p className={classes.message}>No cards left!</p>
        <Button onClick={onButtonClick}>Start again!</Button>
      </div>
    </>
  );
};

export default GameOver;
