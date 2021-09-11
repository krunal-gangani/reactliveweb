// video 55 react final project responsive dynamic website

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./app.css";
import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Service from "./component/Service";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/service" component={Service} />
        <Redirect to="/" />
      </Switch>
      <br/>
      <br/>
      <Footer />
    </>
  );
};

export default App;
