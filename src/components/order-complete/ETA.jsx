import React from "react";
import riderImage from "../../assets/image/rider.png";
import helmetImage from "../../assets/image/helmet.png";
import { FaCircle } from "react-icons/fa";

const ETA = () => {
  return (
    <div className="w-full lg:w-[30%]">
      <div className="flex flex-col gap-3 my-3 p-5 bg-gray-100 rounded-xl">
        <section className="flex flex-col gap-1">
          <img src={riderImage} alt="" className="w-12 ms-5" />
          <div className="flex flex-col my-1 gap-8 bg-white p-3 rounded-lg relative px-6">
            <div className="flex flex-col gap-1">
              <p className="font-medium text-sm">Your Location</p>
              <p className="text-gray-400 text-xs font-medium">107 Rd No 8</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-medium text-sm">Shop Address</p>
              <p className="text-gray-400 text-xs font-medium">
                Gulshan Plaza Restaurant GPR
              </p>
            </div>
            <div className="flex flex-col items-center absolute left-2 top-[19px] h-[60%]">
              <FaCircle className="text-red-500 w-3" />
              <div className="w-[1px] h-full bg-gray-300"></div>
              <FaCircle className="text-red-500 w-3" />
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-2">
          <div>
            <p className="font-semibold text-2xl">09:30</p>
            <p className="text-xs text-gray-400 font-medium">
              Estimated delivery time
            </p>
          </div>
          <div className="flex gap-2 p-2 items-center bg-white rounded-lg">
            <img
              src={helmetImage}
              alt=""
              className="bg-gray-100 p-.5 rounded-full w-12"
            />
            <div className="flex flex-col">
              <p className="font-medium text-sm">Hamim</p>
              <p className="text-gray-400 text-xs font-medium">Your rider</p>
            </div>
          </div>
        </section>
        <button className="bg-red-500 py-2 rounded-md text-white text-sm hover:bg-red-500/80 outline-none">
          Contact
        </button>
      </div>
    </div>
  );
};

export default ETA;
