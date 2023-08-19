import React from "react";
import customer1 from "../Assets/customer-1.jpg";
import customer2 from "../Assets/customer-2.jpg";
import customer3 from "../Assets/customer-3.jpg";
import customer4 from "../Assets/customer-4.jpg";
const Review = () => {
  const Review = [
    {
      id: 1,
      src: customer1,
      Name: "Maria Sanchez",
      Description: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."`,
    },
    {
      id: 2,
      src: customer2,
      Name: "Antony Clifton",
      Description: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."`,
    },
    {
      id: 3,
      src: customer3,
      Name: "Tamika Jackson",
      Description: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."`,
    },
    {
      id: 4,
      src: customer4,
      Name: "Brandon Ming",
      Description: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."`,
    },
  ];
  return (
    <div id="Review">
      <div>
        <h1 className=" bg-teal-900 h-[3em] text-center pb-[0em] text-4xl text-white flex justify-center items-center text-none ">
          What People Say About Us !
        </h1>
      </div>
      <div className="flex gap-8 items-center justify-center bg-teal-900 h-[210vh] md:h-[30em] flex-wrap pb-8 md:flex-nowrap md:pb-0">
        {Review.map(({ id, src, Name, Description }) => (
          <div
            key={id}
            className="bg-white w-[95%] md:w-[14%] h:[65vh] md:h-[53vh]"
          >
            <div className="flex items-center justify-center pt-5 ">
              <img src={src} className="w-[8em] h-[8em] rounded-full 	" alt="" />
            </div>
            <div>
              <h3 className="text-2xl text-center">{Name}</h3>
              <h5>{Description}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
