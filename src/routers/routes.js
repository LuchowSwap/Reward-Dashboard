import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// importing all the themes
import Layout from "./layout";
import Dashboard from "../pages/Dashboard";
import RewardsCalculator from "../pages/RewardsCalculator";
import MigrationPage from "../pages/MigrationPage";


function MyRouts(props) {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/dashboard" />
          </Route>
          <Route path="/dashboard" exact render={() => (<Layout {...props}><Dashboard {...props} /></Layout>)} />
          <Route path="/migration" exact render={() => (<Layout {...props}><MigrationPage {...props} /></Layout>)} />
          <Route path="/rewards-calculator" exact render={() => (<Layout {...props}><RewardsCalculator {...props} /></Layout>)} />
        </Switch>
      </Router>
    </div>
  );
}

export default MyRouts;