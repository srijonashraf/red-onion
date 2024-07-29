import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import MenuTab from "./../shared/menu-tab/MenuTab";
import { MenuTabContext } from "../../context/MenuTabContext";
import { Breakfast, Dinner, Lunch } from "../../data/menuList";

const Menu = () => {
  const { menuType } = useContext(MenuTabContext);
  const navigate = useNavigate();

  let menuList;
  if (menuType === "Breakfast") {
    menuList = Breakfast;
  } else if (menuType === "Lunch") {
    menuList = Lunch;
  } else {
    menuList = Dinner;
  }

  return (
    <motion.div
      initial={{ x: -30, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.2,
      }}
      className="flex flex-col items-center"
    >
      <MenuTab />
      <section className="w-3/4">
        <ul className="grid grid-cols-12 md:gap-5 justify-items-center">
          {menuList?.map((item, index) => (
            <li
              onClick={() => navigate("/details")}
              key={index.toString()}
              className="col-span-12 md:col-span-4 p-3 hover:shadow-lg transition-all 
              flex flex-col w-48 gap-4 cursor-pointer"
            >
              <img
                src={item.thumbnail}
                alt=""
                className="w-full object-contain"
              />
              <div className="text-center flex flex-col gap-1">
                <h3 className="text-base font-medium">{item.title}</h3>
                <h6 className="text-xs text-gray-500">{item.description}</h6>
                <p className="text-sm font-medium">$ {item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="py-10">
        <button
          className="bg-gray-400 font-poppins 
        px-6 py-1.5 text-sm rounded-md text-white hover:bg-black transition-all"
        >
          Checkout Your Food
        </button>
      </section>
    </motion.div>
  );
};

export default Menu;
