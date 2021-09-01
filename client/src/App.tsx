import React from "react";
import Login from "./pages/Login/Login";
import CreateUser from "./pages/CreateUser/CreateUser";
import Landing from "./pages/Landing/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserHome from "./pages/UserHome/UserHome";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/create">
            <CreateUser />
          </Route>
          <Route exact path="/home">
            <UserHome />
          </Route>
          <Route exact path="/invalid">
            <h1>Invalid Login</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
