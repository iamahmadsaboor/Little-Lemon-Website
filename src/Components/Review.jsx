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
    <div>
      <div>
        <h1 className=" bg-green-800 h-[3em] mb-[1em] text-4xl text-white flex justify-center items-center ">
          Our Beloved Customers
        </h1>
      </div>
      <div className="flex justify-around">
        {Review.map(({ id, src, Name, Description }) => (
          <div key={id}>
            <div>
              <img
                src={src}
                className="w-[2em] h-[4em] flex items-center justify-center"
                alt=""
              />
            </div>
            <div>
              <h3 className="text-2xl">{Name}</h3>
              <h5>{Description}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
