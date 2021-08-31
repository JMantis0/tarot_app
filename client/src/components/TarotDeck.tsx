import React, { Fragment, useEffect, useMemo } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { selectTarot, setDeck, TarotState, Card } from "../redux/tarotSlice";
import { createDeck } from "../pages/utils/TarotDeck";

const TarotDeck = () => {
  const state = useAppSelector(selectTarot);
  const dispatch = useAppDispatch();

  useMemo(() => {
    dispatch(setDeck(createDeck()));
  }, [])

  return (
    <Fragment>
      <div>Tarot Deck</div>
      <button
        onClick={() => {
          console.log(
            state.deck.cards.map((card) => {
              return console.log(card);
            })
          );
        }}
      >
        click
      </button>
      <button
        onClick={() => {
          dispatch(setDeck(createDeck()));
        }}
      >
        Deck
      </button>
      <button
        onClick={() => {
          console.log(state);
        }}
      >
        State
      </button>
      {state.deck.cards.map((card: Card) => {
        return (
          <div  key={card.image}>
            <div>{card.title}</div>
            <img className={"image"} src={card.image}></img>
          </div>
        );
      })}
      <div>ass</div>
    </Fragment>
  );
};

export default TarotDeck;
