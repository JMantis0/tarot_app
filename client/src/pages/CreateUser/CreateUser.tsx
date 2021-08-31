import React, { useEffect, useState, Fragment } from "react";
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

  useEffect(() => {
    isUserNameAvailable(state, dispatch);
  }, [state.createUserForm.userName]);

  return (
    <Fragment>
      <header>Tarot Create User</header>
      <form
        onChange={(e: React.FormEvent<HTMLFormElement>) => {
          if ((e.target as HTMLInputElement).name !== "retypePassword") {
            formChangeHandler(e, dispatch);
          } else {
            console.log(
              `Setting ${(e.target as HTMLInputElement).name} to ${
                (e.target as HTMLInputElement).value
              }`
            );
            setRetypePassword((e.target as HTMLInputElement).value);
          }
        }}
      >
        <label>User Name</label>
        <br></br>
        <input value={state.createUserForm.userName} name="userName"></input>
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
        <input value={state.createUserForm.firstName} name="firstName"></input>
        <br></br>
        <label>Last Name</label>
        <br></br>
        <input value={state.createUserForm.lastName} name="lastName"></input>
        <br></br>
        <label>E-Mail</label>
        <br></br>
        <input
          value={state.createUserForm.email}
          type="email"
          name="email"
        ></input>
        <br></br>
        <label>Password</label>
        <br></br>
        <input
          value={state.createUserForm.password}
          type="password"
          name="password"
        ></input>

        {state.createUserForm.password !== retypePassword &&
        retypePassword !== "" ? (
          <span>Passwords do not match</span>
        ) : (
          ""
        )}

        <br></br>
        <label>Re-Type Password</label>
        <br></br>
        <input
          value={retypePassword}
          type="password"
          name="retypePassword"
        ></input>
      </form>
      <button onClick={() => createUser(state)}>Create</button>
      <Link to="/login">Log In</Link>
    </Fragment>
  );
};

export default CreateUser;
