import React, { useState } from "react";
import { MenuTabContext } from "./MenuTabContext";

const MenuTabProvider = ({ children }) => {
  const [menuType, setMenuType] = useState("Lunch");
  return (
    <MenuTabContext.Provider value={{ menuType, setMenuType }}>
      {children}
    </MenuTabContext.Provider>
  );
};

export default MenuTabProvider;
