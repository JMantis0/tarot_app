import React, { Fragment, useEffect } from "react";
import TarotDeck from "../../components/TarotDeck";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectTarot, setDeck } from "../../redux/tarotSlice";
import { createDeck } from "../utils/TarotDeck";

const UserHome = () => {
  const state = useAppSelector(selectTarot);
  const dispatch = useAppDispatch();

  return (
    <Fragment>
      <header>Tarot User Home</header>
      <TarotDeck />
    </Fragment>
  );
};

export default UserHome;
