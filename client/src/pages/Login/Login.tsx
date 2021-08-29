import React, { useEffect } from "react";
import { Fragment } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectTarot, updateLoginForm } from "../../redux/tarotSlice";
import axios from "axios";
import { store } from "../../redux/store";

const Login = () => {
  const state = useAppSelector(selectTarot);
  const dispatch = useAppDispatch();

  const formChangeHandler = (event: any) => {
    const fieldName = event.target.name;
    const value = event.target.value;
    dispatch(updateLoginForm({ fieldName, value }));
  };

  useEffect(() => {
    isUserNameAvailable();
  }, [state.loginForm.userName])

  const isUserNameAvailable = () => {
    axios
      .get(
        "http://localhost:8080/api/is_username_available?userName=" +
          state.loginForm.userName
      )
      .then((response) => {
        console.log("Response: ", response);
      })
      .catch((err) => {
        console.log("There was an error: ", err);
      });
  };

  const authenticate = (event: any) => {
    axios
      .post("http://localhost:8080/api/authenticate_user", state.loginForm)
      .then((response) => {
        console.log("Response is: ", response);
      })
      .catch((err) => {
        console.log("There was an error: ", err);
      });
  };

  return (
    <Fragment>
      <header>Tarot Login</header>
      <form>
        <label>User Name</label>
        <br></br>
        <input name="userName" onChange={formChangeHandler}></input>
        <br></br>
        <label>Password</label>
        <br></br>
        <input name="password" onChange={formChangeHandler}></input>
      </form>
      <button onClick={authenticate}>Log In</button>
    </Fragment>
  );
};

export default Login;
