import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Name from "./Name";
import Error from "./Error";
import Navbar from "./Navbar";

const App33 = () => {
  return (<>

   {/*here banne page render demo */}

   {/* <About />
   <Contact /> */}

   <Navbar />
   <Switch>
   <Route exact path='/' component={About} />  
   <Route exact path='/contact' component={Contact} />
   <Route path='/contact/name' component={Name} />
   <Route path='/contact/*' component={Error} />
   <Route component={Error} />
   
   </Switch>

  {/* /means home('/') path par About component render render thse and /conact path par Contact component and exact property no means that jo te path hoy to j te component render karo nkr ny */}

  </>);
};
export default App33;
