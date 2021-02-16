
import Login from "./Components/login/login";
import Dashboard from "./Components/dashboard/dashboard";
import css from './App.css'

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App_body">

      <Router>
        <div >
          <div className="App">
            <div><img className="App_logo" src="https://logodownload.org/wp-content/uploads/2018/02/reddit-logo.png" /></div>
            <div><input type="text" placeholder="Search" className="search" className="App_search" /></div>
            <div>
              <Link exact className="log_button" to="/">login</Link>
              <Link exact className="dash_button" to="/dashboard">Dashboard</Link>
            </div>
          </div>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
