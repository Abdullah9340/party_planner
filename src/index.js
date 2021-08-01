import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";

import joinParty from "./joinParty";
import mainPage from "./App";
import createParty from "./createParty";
import ItemPage from "./PartyScreen/ItemPage";
import AddItem from "./PartyScreen/AddItem";
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={withRouter(mainPage)} />
      <Route exact path="/joinParty" component={withRouter(joinParty)} />
      <Route exact path="/createParty" component={withRouter(createParty)} />
      <Route exact path="/itemsPage/:id" component={withRouter(ItemPage)} />
      <Route exact path="/addItem/:id" component={withRouter(AddItem)} />
    </Switch>
  </Router>,
  rootElement
);
