import React, { Fragment, useEffect, useMemo } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { selectTarot, setDeck, TarotState, Card } from "../redux/tarotSlice";
import { createDeck } from "../pages/utils/tarotDeckCreator";
import { shuffle } from "./tarotDeckApi";

const TarotDeck = () => {
  const state = useAppSelector(selectTarot);
  const dispatch = useAppDispatch();

  return (
    <Fragment>
      <div>Tarot Deck</div>
      <button
        onClick={() => {
          dispatch(setDeck(createDeck()));
        }}
      >
        Create Deck
      </button>
      <button>Draw</button>
      <button
        onClick={() => {
          dispatch(setDeck(shuffle(state.deck.cards)));
        }}
      >
        Shuffle
      </button>
      {state.deck.cards.map((card: Card) => {
        return (
          <div key={card.image}>
            <div>{card.title}</div>
            <div>{card.symbol}</div>
            <div>{card.element}</div>

            <img className={"image"} src={card.image}></img>
            <p>{card.description}</p>
          </div>
        );
      })}
    </Fragment>
  );
};

export default TarotDeck;
