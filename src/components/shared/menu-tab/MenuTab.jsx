import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MenuTabContext } from "../../../context/MenuTabContext";

const MenuTab = () => {
  const { menuType, setMenuType } = useContext(MenuTabContext);
  return (
    <div className="my-10">
      <ul className="menu-tab flex items-center gap-5 justify-center font-inter font-medium text-sm">
        <li
          className={`menu-item ${menuType === "Breakfast" ? "active" : ""}`}
          onClick={() => setMenuType("Breakfast")}
        >
          <NavLink to={`/`}>Breakfast</NavLink>
        </li>
        <li
          className={`menu-item ${menuType === "Lunch" ? "active" : ""}`}
          onClick={() => setMenuType("Lunch")}
        >
          <NavLink to={`/`}>Lunch</NavLink>
        </li>
        <li
          className={`menu-item ${menuType === "Dinner" ? "active" : ""}`}
          onClick={() => setMenuType("Dinner")}
        >
          <NavLink to={`/`}>Dinner</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MenuTab;
