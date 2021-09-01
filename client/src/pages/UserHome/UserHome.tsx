import React, { Fragment } from "react";
import TarotDeck from "../../components/TarotDeck";
import { useAppSelector } from "../../redux/hooks";
import { selectTarot } from "../../redux/tarotSlice";

const UserHome = () => {
  const state = useAppSelector(selectTarot);

  return (
    <Fragment>
      <header>Tarot User Home</header>
      <p>Welcome{` ${state.loginForm.userName}`}</p>
      <TarotDeck />
    </Fragment>
  );
};

export default UserHome;
