import React from "react";
import bigLogo from "../Assets/logo-white.png";
import facebook from "../Assets/facebook.png";
import youtube from "../Assets/youtube.png";
import instagram from "../Assets/instagram.png";
import twitter from "../Assets/twitter.png";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="flex justify-around text-white bg-green-800 h-[15em] mt-10 py-10">
      <div className="logo">
        <img src={bigLogo} className="w-[4em] h-[8em]" alt="" />
      </div>
      <div className="links">
        <Link to="Home" className="text-xl cursor-pointer">
          Home
        </Link>
        <Link to="Meals" className="block text-xl cursor-pointer ">
          Meals
        </Link>
        <Link to="Home" className="block text-xl cursor-pointer ">
          {" "}
          Reviews
        </Link>
        <Link to="Reservation" className="text-xl cursor-pointer">
          Reservation
        </Link>
      </div>
      <div className="contactUs">
        <h2 className="text-2xl">Contact Us</h2>
        <h4 className="text-xl"> 678 Pisa Ave, Chicago, IL 60611</h4>
        <h4 className="text-xl"> (304) 4202755</h4>
        <h4 className="text-xl"> customer@littlelemon.com</h4>
      </div>

      <div>
        <h2 className="text-2xl">Connect With Us</h2>
        <div className="flex">
          <a
            href="https://www.facebook.com/iamahmadsaboor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={facebook}
              alt=""
              className="w-[3em] h-[2em] cursor-pointer"
            />
          </a>
          <a
            href="https://www.twitter.com/iamahmadsaboor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={twitter}
              alt=""
              className="w-[3em] h-[2em] cursor-pointer"
            />
          </a>
          <a
            href="https://www.instagram.com/iamahmadsaboor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={instagram}
              alt=""
              className="w-[3em] h-[2em] cursor-pointer"
            />
          </a>
          <a
            href="https://www.youtube.com/@iamahmadsaboor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={youtube}
              alt=""
              className="w-[3em] h-[2em] cursor-pointer"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
