import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import About from "../About/About";
import Admin from "../Admin/Admin";
import Contact from "../Contact/Contact";

const Home = () => {
  const { path } = useRouteMatch();
  return (
    <div>
      <h1>home</h1>

      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </div>
  );
};

export default Home;
