import React from "react";

const Reservation = () => {
  return (
    <div id="Reservation">
      <div>
        <h1 className=" bg-green-800 h-[3em] mb-[1em] text-4xl text-white flex justify-center items-center ">
          Table Reservations
        </h1>
      </div>
      <div>
        <form
          action="https://getform.io/f/731a3f52-388f-4e3c-8108-bf85b31d2f9c"
          method="POST"
          className="font-mono ml-[39em]"
        >
          <div className="">
            <label htmlFor="date" className="block py-4 font-mono text-2xl">
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="px-[2em]"
              required
            />
          </div>

          <div>
            <label htmlFor="date" className="block py-4 font-mono text-2xl">
              Time
            </label>
            <select id="time" name="Options" className="pr-[6em]" required>
              <option value="time1">4:00pm</option>
              <option value="time2">5:00pm</option>
              <option value="time3">6:00pm</option>
              <option value="time4">7:00pm</option>
              <option value="time5">8:00pm</option>
              <option value="time6">9:00pm</option>
              <option value="time7">10:00pm</option>
            </select>
          </div>
          <div>
            <label htmlFor="email" className="block py-4 font-mono text-2xl">
              Enter Your Email
            </label>
            <input
              type="email"
              name=""
              id="email"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="guest"
              min="2"
              max="50"
              className="block py-4 font-mono text-2xl "
            >
              Number Of Guests
            </label>
            <input
              type="number"
              name="guest"
              id="guest"
              placeholder="Number of Guests"
              required
            />
          </div>
          <div>
            <label htmlFor="option" className="block py-4 font-mono text-2xl">
              Select Ocasion
            </label>
            <select id="option" name="Options" required className="pr-[4em]">
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
          </div>
          <button className="block px-2 py-4 my-4 font-semibold text-white transition duration-300 ease-in-out bg-yellow-400 rounded-lg shadow-md hover:bg-black hover:text-white">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reservation;
