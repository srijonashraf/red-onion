import React from "react";
import Map from "../components/order-complete/Map";
import ETA from "../components/order-complete/ETA";
import MenuTab from "../components/shared/menu-tab/MenuTab";

const OrderCompletePage = () => {
  return (
    <>
      <MenuTab />
      <div
        className="container h-[85vh] w-full mx-auto max-lg:flex-col flex gap-10 md:gap-5 
      items-center justify-around p-2 max-sm:h-auto"
      >
        <Map />
        <ETA />
      </div>
    </>
  );
};

export default OrderCompletePage;
