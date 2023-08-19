import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa"; // Import the hamburger icon
import mainlogo from "../Assets/main-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="Home">
      <div id="nav" className="flex items-center justify-around navBar">
        <div
          id="logo"
          className="flex justify-center items-center h-[5em] w-[11em]"
        >
          <img src={mainlogo} alt="" />
        </div>
        <div className="hidden md:flex gap-9">
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

        <div className="md:hidden">
          <FaBars onClick={toggleMenu} size={24} />
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <ul className="text-center">
            {navLinks.map(({ id, tab }) => (
              <li
                key={id}
                className="py-2 text-blue-500 cursor-pointer hover:text-blue-800"
              >
                {tab === "Reservation" ? (
                  <Link
                    to="Reservation"
                    smooth={true}
                    duration={500}
                    onClick={toggleMenu}
                  >
                    {tab}
                  </Link>
                ) : tab === "Menu" ? (
                  <Link
                    to="Meals"
                    smooth={true}
                    duration={500}
                    onClick={toggleMenu}
                  >
                    {tab}
                  </Link>
                ) : tab === "Review" ? (
                  <Link
                    to="Review"
                    smooth={true}
                    duration={500}
                    onClick={toggleMenu}
                  >
                    {tab}
                  </Link>
                ) : (
                  <span>{tab}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
