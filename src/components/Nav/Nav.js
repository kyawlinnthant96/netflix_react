import React, { useState, useEffect } from "react";

// style and icon logo
import "./Nav.css";
import { logo, avatar } from "../../assets/images";
import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";

function Nav() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  const profileClick = () => {
    navigate("/profile");
  };
  const homeClick = () => {
    navigate("/");
  };

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={homeClick}
          className="nav__logo"
          src={logo}
          alt="netflix logo"
        />

        <img
          onClick={profileClick}
          className="nav__avatar"
          src={avatar}
          alt="netflix avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
