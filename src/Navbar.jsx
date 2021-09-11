import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* here in this case page reload thase so we will use Link component form react-router-dom jethi page reload ny thay */}

      {/* <a href="/">About us</a>
      <a href="/contact">Contact us</a> */}

      {/* <Link to="/">About us</Link>
      <Link to="/contact">Contact Us</Link> */}

      <br />
      <br />

      {/* we can use NavLink also from react-router-dom jeni pase ek attribute se -> activeClassName */}

      <NavLink exact activeClassName="active_class" to="/">
        About us
      </NavLink>
      <NavLink exact activeClassName="active_class" to="/contact">
        Contact Us
      </NavLink>
    </>
  );
};

export default Navbar;
