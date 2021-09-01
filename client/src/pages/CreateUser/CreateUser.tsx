import React, { useEffect, useState, Fragment, useRef } from "react";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectTarot } from "../../redux/tarotSlice";
import {
  formChangeHandler,
  isUserNameAvailable,
  createUser,
} from "./createUserAPI";

const CreateUser = () => {
  const state = useAppSelector(selectTarot);
  const [retypePassword, setRetypePassword] = useState("");
  const dispatch = useAppDispatch();
  const firstRender = useRef(true);
  
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    isUserNameAvailable(state, dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.createUserForm.userName]);

  return (
    <Fragment>
      <header>Tarot Create User</header>
      <form
        onChange={(e: React.FormEvent<HTMLFormElement>) => {
          formChangeHandler(e, dispatch, setRetypePassword);
        }}
      >
        <label>User Name</label>
        <br></br>
        <input name="userName"></input>
        {state.createUserForm.userName !== "" ? (
          state.userNameAvailable ? (
            <span>User Name is Available</span>
          ) : (
            <span>User Name already taken</span>
          )
        ) : (
          ""
        )}
        <br></br>
        <label>First Name</label>
        <br></br>
        <input name="firstName"></input>
        <br></br>
        <label>Last Name</label>
        <br></br>
        <input name="lastName"></input>
        <br></br>
        <label>E-Mail</label>
        <br></br>
        <input type="email" name="email"></input>
        <br></br>
        <label>Password</label>
        <br></br>
        <input type="password" name="password"></input>
        {state.createUserForm.password !== retypePassword &&
        retypePassword !== "" ? (
          <span>Passwords do not match</span>
        ) : (
          ""
        )}
        <br></br>
        <label>Re-Type Password</label>
        <br></br>
        <input type="password" name="retypePassword"></input>
      </form>
      <button onClick={() => createUser(state)}>Create</button>
      <Link to="/login">Log In</Link>
    </Fragment>
  );
};

export default CreateUser;
