import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectTarot } from "../../redux/tarotSlice";
import { formChangeHandler, authenticate } from "./loginAPI";
import { useHistory } from "react-router";

const Login = () => {
  const state = useAppSelector(selectTarot);
  const dispatch = useAppDispatch();
  const history = useHistory();

  return (
    <Fragment>
      <header>Tarot Login</header>
      <form>
        <label>User Name</label>
        <br></br>
        <input
          name="userName"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            formChangeHandler(e, dispatch)
          }
        ></input>
        <br></br>
        <label>Password</label>
        <br></br>
        <input
          type="password"
          name="password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            formChangeHandler(e, dispatch)
          }
        ></input>
      </form>
      <button onClick={() => authenticate(state, history)}>Log In</button>
      <Link to="/create">Create User</Link>
    </Fragment>
  );
};

export default Login;
