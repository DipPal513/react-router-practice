import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./Component/About/About";
import Friend from "./Component/Friend/Friend";
import Friends from "./Component/Friends/Friends";
import Home from "./Component/Home/Home";
import Notfound from "./Notfound/Notfound";
const url = "https://jsonplaceholder.typicode.com/users";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/friends">
            <Friends />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path = '/'>
            <Home />
          </Route>
          <Route path = '*'>
            <Notfound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
