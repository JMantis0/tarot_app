import axios from "axios";
import React from "react";
import { TarotState, setLoginForm, setUserNameAvailable } from "../../redux/tarotSlice";
import { History, LocationState } from "history";
export const formChangeHandler = (
  event: React.ChangeEvent<HTMLInputElement>,
  dispatch: Function
) => {
  const fieldName = event.target.name;
  const value = event.target.value;
  dispatch(setLoginForm({ fieldName, value }));
};

export const authenticate = (state: TarotState, history: History<LocationState>) => {
  axios
    .post("http://localhost:8080/api/authenticate_user", state.loginForm)
    .then((response) => {
      console.log("Response is: ", response);
      history.push("/home");
    })
    .catch((err) => {
      console.log("There was an error: ", err);
      history.push("/invalid");
    });
};
