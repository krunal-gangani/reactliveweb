import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Name from "./Name";
import Error from "./Error";
import Service from "./Services";
import Menu from "./Menu";
import User from "./User";
const App34 = () => {
  return (
    <>
      <Menu />
      <Switch>
        {/* we can use render method also instead component */}
        <Route exact path="/" render={() => <About name="About" />} />{" "}
        {/*we passed props as name*/}
        <Route
          exact
          path="/contact"
          component={() => <Contact name="Contact" />}
        />
        <Route
          exact
          path="/service"
          component={() => <Service name="Service" />}
        />
        <Route path="/user" component={User} />
        <Route path="/contact/name" component={Name} />
        <Route path="/contact/*" component={Error} />
        <Route component={Error} />
      </Switch>

      {/* /means home('/') path par About component render render thse and /conact path par Contact component and exact property no means that jo te path hoy to j te component render karo nkr ny */}
    </>
  );
};
export default App34;
