import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const MenuTab = () => {
  const [activeTab, setActiveTab] = useState("Lunch");
  return (
    <div className="my-10">
      <ul className="menu-tab flex items-center gap-5 justify-center font-inter font-medium text-sm">
        <li
          className={`menu-item ${activeTab === "Breakfast" ? "active" : ""}`}
          onClick={() => setActiveTab("Breakfast")}
        >
          <NavLink to={`/`}>Breakfast</NavLink>
        </li>
        <li
          className={`menu-item ${activeTab === "Lunch" ? "active" : ""}`}
          onClick={() => setActiveTab("Lunch")}
        >
          <NavLink to={`/`}>Lunch</NavLink>
        </li>
        <li
          className={`menu-item ${activeTab === "Dinner" ? "active" : ""}`}
          onClick={() => setActiveTab("Dinner")}
        >
          <NavLink to={`/`}>Dinner</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MenuTab;
