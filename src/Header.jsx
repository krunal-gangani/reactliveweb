import React from "react";
import logo from './images/logo.png'

const Header = () => {
  return (
    <>
      <div className="header">
          <img src={logo} alt="logo" width='70' height='50' />
          <h1 style={{ textTransform : 'capitalize' }}> take note </h1>
      </div>
    </>
  );
};
export default Header;