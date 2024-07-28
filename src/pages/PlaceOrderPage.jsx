import React from "react";
import DeliveryDetails from "./../components/place-order/DeliveryDetails";
import OrderDetails from "./../components/place-order/OrderDetails";
import MenuTab from "../components/shared/menu-tab/MenuTab";

const PlaceOrderPage = () => {
  return (
    <>
      <MenuTab />
      <div className="container h-screen mx-auto max-md:flex-col flex gap-5 items-center w-full">
        <DeliveryDetails />
        <OrderDetails />
      </div>
    </>
  );
};

export default PlaceOrderPage;
