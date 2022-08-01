import React, { useEffect, useState } from "react";
import logo from "./assets/netflix-logo.png";
import "./NavBar.css";

function NavBar() {
  const [show, handleShow] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav_logo" src={logo} alt="Netflix logo" />
      <img
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix logo"
      />
    </div>
  );
}

export default NavBar;
