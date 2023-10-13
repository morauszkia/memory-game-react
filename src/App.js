import { useState, useEffect, useCallback } from 'react';

import './App.css';

import Setup from './components/Setup';
import Card from './components/Card';
import GameOver from './components/GameOver';

import list from './data/data.js';

function App() {
  // STATE VARIABLES
  // Setup
  const defaultPlayers = [
    { name: 'Player 1', color: '#3498db', points: 0, cards: [] },
    { name: 'Player 2', color: '#c0392b', points: 0, cards: [] },
  ];

  const [setup, setSetup] = useState(true);
  const [playing, setPlaying] = useState(false);

  // Deck
  const [deck, setDeck] = useState('animals');
  const [cardsNumber, setCardsNumber] = useState(12);

  // Players
  const [players, setPlayers] = useState(defaultPlayers);

  // Gameplay
  const [cards, setCards] = useState([]);
  const [chosenCards, setChosenCards] = useState([]);
  const [remainingCards, setRemainingCards] = useState(null);
  const [activePlayer, setActivePlayer] = useState(players[0]);
  const [winner, setWinner] = useState(null);

  // FUNCTIONS

  // Randomly select cards from full list
  const selectCards = useCallback(
    () => list[deck].sort(() => 0.5 - Math.random()).slice(0, cardsNumber),
    [deck, cardsNumber]
  );

  // Create & shuffle deck + add id & status
  const createDeck = useCallback(
    (cardsList) =>
      cardsList
        .concat(cardsList)
        .sort(() => 0.5 - Math.random())
        .map((el, idx) => {
          return { ...el, id: idx, status: null };
        }),
    []
  );

  const startGame = useCallback(() => {
    const selectedCardsList = selectCards();
    const finalList = createDeck(selectedCardsList);

    setPlaying(true);
    setCards(finalList);
    setRemainingCards(finalList.length);
  }, [selectCards, createDeck]);

  const closeSetup = () => {
    setSetup(false);
    startGame();
  };

  // Only runs if card not yet flipped or found
  const handleChoice = (currentCard) => {
    // Add chosen card to array
    const newChosenCards = [...chosenCards, currentCard];

    // Update status of chosen card to flipped
    setCards(
      cards.map((card) => {
        if (card.id === currentCard.id && card.status !== 'flipped')
          return { ...currentCard, status: 'flipped' };
        else return card;
      })
    );

    // Update cards state
    setChosenCards(newChosenCards);

    // After 2s delay check cards and flip back/hide card
    setTimeout(() => {
      compareCards(newChosenCards);
    }, 2000);
  };

  const compareCards = (selectedCards) => {
    // Only run if there are two cards to compare
    if (selectedCards.length < 2) return;

    // It's a match
    if (selectedCards[0].name === selectedCards[1].name) {
      // Add found status to matched cards, leave the rest unchanged
      const newCards = cards.map((card) => {
        if (card.name === selectedCards[0].name) {
          return { ...card, status: 'found' };
        } else {
          return card;
        }
      });

      // update state accordingly
      setCards(newCards);
      setRemainingCards(remainingCards - 2);
    } else {
      const newCards = cards.map((card) => {
        // Flip back all cards that have not been found
        if (card.status !== 'found') {
          return { ...card, status: null };
        } else {
          return card;
        }
      });

      // Update state accordingly to take effect
      setCards(newCards);
    }

    // Empty array of choices
    setChosenCards([]);
  };

  useEffect(() => {
    startGame();
  }, [startGame]);

  return (
    <div className="App">
      {setup && <Setup onStart={closeSetup} />}
      {remainingCards > 0 && (
        <div className={`game-field ${`game-field-${cardsNumber}`}`}>
          {cards.map((el) => (
            <Card
              card={el}
              key={el.id}
              onChoice={handleChoice}
              disabled={chosenCards.length >= 2}
            />
          ))}
        </div>
      )}
      {remainingCards === 0 && <GameOver onButtonClick={startGame} />}
    </div>
  );
}

export default App;
