import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import asyncComponent from "./hoc/asyncComponent/asyncComponent";
import Latest from "./Pages/Latest/Latest";
import './App.css';
import DashboardLayout from "./Layout/DashboardLayout/DashboardLayout";
import React from "react";
//import History from "./Pages/History/History";

const asyncHistory = asyncComponent(() => {
    return import('./Pages/History/History');
});

function App() {
  let routes = (
      <Switch>
        <Route path="/latest" exact component={Latest} />
        <Route path="/history" exact component={asyncHistory} />
        <Redirect to="/latest" />
      </Switch>
  );
  return (
      <DashboardLayout>
          {routes}
      </DashboardLayout>
  );
}

export default withRouter(App);
