import React from "react";
import DeliveryDetails from "./../components/place-order/DeliveryDetails";
import OrderDetails from "./../components/place-order/OrderDetails";
import MenuTab from "../components/shared/menu-tab/MenuTab";

const PlaceOrderPage = () => {
  return (
    <>
      <MenuTab />
      <div
        className="container h-[85vh] max-md:h-auto max-md:mb-10 mx-auto 
        flex max-md:flex-col gap-5 max-md:gap-10 items-center w-full "
      >
        <DeliveryDetails />
        <OrderDetails />
      </div>
    </>
  );
};

export default PlaceOrderPage;
