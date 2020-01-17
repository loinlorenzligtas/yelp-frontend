import React from "react";
import { LandingPage } from "./landing-page/landing-page";
import { Switch, Route } from "react-router-dom";
import { Search } from "./search/search";

function App() {
  return (
    <Switch>
      <Route path="/search" component={Search} />
      <Route path="/" component={LandingPage} />
    </Switch>
  );
}

export default App;
