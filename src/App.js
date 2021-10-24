import React from "react";
import Homepage from "./Components/Homepage/Homepage";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import University from "./Components/University/University";
import Form from "./Components/Form/Form";
import Publicfeed from "./Components/Publicfeed/Publicfeed";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/Form" component={Form} />
        <Route path="/Login" component={Login} />
        <Route path="/Publicfeed" component={Publicfeed} />
        <Route path="/Register" component={Register} />
        <Route path="/University" component={University} />
      </Switch>
    </Router>
  );
}

export default App;
