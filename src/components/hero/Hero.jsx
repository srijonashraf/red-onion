import React from "react";

const Hero = () => {
  return (
    <div
      className=" h-[500px] w-full flex flex-col gap-5 
      items-center justify-center"
      id="hero"
    >
      <h1 className="text-xl sm:text-3xl font-poppins">
        Best food waiting for your belly
      </h1>
      <div className="w-full flex justify-center">
        <input
          type="text"
          className="w-[75%] sm:w-[30%] p-2 px-5 outline-none 
          rounded-full text-sm text-gray-500"
          placeholder="Search food items"
        />
        <button
          className="bg-red-500 px-5 rounded-full 
        text-white font-inter text-sm -ms-8 hover:bg-red-500/90"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Hero;
