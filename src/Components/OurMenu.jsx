import React from "react";
import itemOne from "../Assets/menu-item1.jpg";
import itemTwo from "../Assets/menu-item2.jpg";
import itemThree from "../Assets/menu-item3.jpg";

const OurMenu = () => {
  const menuItems = [
    {
      id: 1,
      src: itemOne,
      title: "Greek Salad",
      price: "$ 12.99",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished  crunchy .",
    },
    {
      id: 2,
      src: itemTwo,
      title: "Bruschetta",
      price: "$ 5.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
      id: 3,
      src: itemThree,
      title: "Lemon Desert",
      price: "$ 5.00",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
  ];
  return (
    <div id="Meals">
      <div className="flex justify-center md:justify-between w-[90vw] gap-6 md:px-[4em] py-[2em] flex-wrap md:flex-nowrap md:gap-0 ">
        <h1 className="text-2xl text-black md:text-3xl md:px-8">
          This Weeks Special !!
        </h1>
        <button className="px-4 py-2 font-semibold text-white transition duration-300 ease-in-out bg-yellow-400 rounded-lg shadow-md hover:bg-black hover:text-white">
          Menu
        </button>
      </div>
      <div className="flex flex-wrap justify-around gap-10 md:pb-8 md:flex-nowrap md:gap-0  border-[black]">
        {menuItems.map(({ id, src, title, price, description }) => (
          <div
            key={id}
            className="box-border w-[90vw] md:w-[22%] h-[70vh] md:h-[40%] overflow-hidden ransition duration-500  border-black"
          >
            <div>
              <img src={src} className=" h-[33vh] w-[100%] " alt="" />
            </div>
            <div className="flex justify-between px-4 py-4">
              <h4>{title}</h4>
              <h4>{price}</h4>
            </div>
            <div className="">
              <p>{description}</p>
            </div>
            <button className="px-4 py-2 my-3 font-semibold text-white transition duration-300 ease-in-out bg-yellow-400 rounded-lg shadow-md hover:bg-black hover:text-white">
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurMenu;
