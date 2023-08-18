import React from "react";
import { Link } from "react-scroll";
import mainlogo from "../Assets/main-logo.png";

const NavBar = () => {
  const navLinks = [
    {
      id: 1,
      tab: "Home",
    },
    {
      id: 2,
      tab: "Menu",
    },
    {
      id: 3,
      tab: "Review",
    },
    {
      id: 4,
      tab: "Reservation",
    },
  ];

  return (
    <div id="Home">
      <div id="nav" className="flex items-center justify-around navBar">
        <div
          id="logo"
          className="flex justify-center items-center h-[5em] w-[11em]"
        >
          <img src={mainlogo} alt="" />
        </div>
        <div className="flex gap-9">
          {navLinks.map(({ id, tab }) => (
            <li
              key={id}
              className="text-blue-500 list-none cursor-pointer hover:text-blue-800"
            >
              {tab === "Reservation" ? (
                <Link to="Reservation" smooth={true} duration={500}>
                  {tab}
                </Link>
              ) : tab === "Menu" ? (
                <Link to="Meals" smooth={true} duration={500}>
                  {tab}
                </Link>
              ) : (
                <span>{tab}</span>
              )}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
