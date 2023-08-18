import React from "react";
import heroImg from "../Assets/hero-img.jpg";
import { Link } from "react-scroll";
const HeroSection = () => {
  return (
    <div className="flex bg-green-800 h-[30em] mb-[6em] scroll-smooth" >
      <div className="w-[48%] mx-[5em] my-[7em] ">
        <h1 className="font-mono text-4xl text-yellow-500">Little Lemon</h1>
        <h2 className="pt-2 font-mono text-3xl text-white">Chicago</h2>
        <p className="py-5 text-xl font-thin text-white">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Link
          to="Reservation"
          className="px-4 py-2 font-semibold text-white transition duration-300 ease-in-out bg-yellow-400 rounded-lg shadow-md hover:bg-black hover:text-white"
        >
          Reservation
        </Link>
      </div>
      <div className="w-[48%] flex justify-center mt-[3em]">
        <img className="h-[66vh] w-[24vw] " src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
