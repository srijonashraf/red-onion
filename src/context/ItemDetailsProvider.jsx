import React, { useState } from "react";
import { ItemDetailsContext } from "./ItemDetailsContext";

const ItemDetailsProvider = ({ children }) => {
  const [itemDetails, setItemDetails] = useState(null);
  return (
    <ItemDetailsContext.Provider value={{ itemDetails, setItemDetails }}>
      {children}
    </ItemDetailsContext.Provider>
  );
};

export default ItemDetailsProvider;
