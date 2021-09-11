import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>

      <br />
      <br />

      {/* we can use NavLink also from react-router-dom jeni pase ek attribute se -> activeClassName */}
      <div className="menu_style">
      <NavLink
        exact
        activeClassName="active_class"
        to="/"
      >
        About us
      </NavLink>
      <NavLink
        exact
        activeClassName="active_class"
        to="/contact"
      >
        Contact Us
      </NavLink>
      {/* this is for video 55 */}
      <NavLink
        exact
        activeClassName="active_class"
        to="/search"
      >
        Search
      </NavLink>
      <NavLink
        exact
        activeClassName="active_class"
        to="/service"
      >
        Service
      </NavLink>

     {/* this is for video 54 */}

      <NavLink
        exact
        activeClassName="active_class"
        // to="/user/krunal"      //bydefult krunal name rese jyare user par click karse tyare
        to="/user/krunal/gangani"      //bydefult krunal and gaangani name and sirname rese jyare user par click karse tyare
      >
        User
      </NavLink>
      </div>
    </>
  );
};

export default Menu;
