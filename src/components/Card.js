import React from "react";

import classes from "./Card.module.css";

const Card = ({ card, onChoice, disabled }) => {
  const handleClick = () => {
    if (disabled) return;

    if (!card.status) onChoice(card);
  };

  let specialClass;
  switch (card.status) {
    case "flipped":
      specialClass = classes.flipped;
      break;
    case "found":
      specialClass = `${classes.found} ${classes.flipped}`;
      break;
    default:
      specialClass = "";
  }

  return (
    <div className={`${classes.card} ${specialClass}`} onClick={handleClick}>
      <div className={`${classes["card-front"]} ${classes["card-side"]}`}>
        <img src={card.pic} alt={card.name} />
      </div>
      <div className={`${classes["card-back"]} ${classes["card-side"]}`}></div>
    </div>
  );
};

export default Card;
