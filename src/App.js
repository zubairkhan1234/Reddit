
import Login from "./Components/login/login";
import Dashboard from "./Components/dashboard/dashboard";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <h1>hello world</h1>
      <Login />
      <Dashboard /> */}


      <Router>
        <div>
          <ul>
            <li>
              <Link exact to="/">login</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
          <hr />
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
