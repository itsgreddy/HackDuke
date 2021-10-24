import React from "react";
import Form from "./Components/Form/Form";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Publicfeed from "./Components/Publicfeed/Publicfeed";
import University from "./Components/University/University";
import Homepage from "./Components/Homepage/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/University">
          <University />
        </Route>
        <Route path="/Form">
          <Form />
        </Route>
        <Route path="/Publicfeed">
          <Publicfeed />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
