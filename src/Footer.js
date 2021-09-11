import React from "react";

const Footer = () => {

   const year = new Date().getFullYear();

  return (
    <>
      <footer>
        <p>
          copyright <i class="fa fa-copyright" aria-hidden="true"></i> {year}
        </p>
      </footer>
    </>
  );
};
export default Footer;
