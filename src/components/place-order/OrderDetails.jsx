import React from "react";
import foodImage from "../../assets/image/dinner1.png";
import { useNavigate } from "react-router-dom";

const OrderDetails = () => {
  const orders = [
    {
      image: foodImage,
      name: "Butter Naan",
      price: 40,
      deliveryCharge: "Delivery free",
      quantity: "02",
    },
    {
      image: foodImage,
      name: "Butter Kacchi",
      price: 100,
      deliveryCharge: "Delivery free",
      quantity: "04",
    },
  ];

  const navigate = useNavigate();
  return (
    <div className="w-full">
      <div className="flex flex-col gap-2 w-3/4 mx-auto max-md:w-[90%]">
        <p>
          From <span className="font-medium">Gulshan Plaza Restaurant GPR</span>
        </p>
        <p>Arriving in 20-30 min</p>
        <p className="font-medium">107 Rd No 8</p>
        <ul className="flex flex-col gap-2">
          {orders?.map((item, index) => (
            <li
              className="p-2 bg-gray-100 rounded-lg flex items-start gap-2 relative"
              key={index.toString()}
            >
              <img src={item.image} alt="" className="w-12" />
              <div className="flex flex-col">
                <p className="font-medium text-sm">{item.name}</p>
                <p className="font-bold text-base text-red-500">
                  ${item.price}
                </p>
                <p className="font-normal text-[10px] text-gray-500">
                  {item.deliveryCharge}
                </p>
              </div>
              <div className="flex gap-2 absolute right-5 top-6">
                <p>-</p>
                <div className="bg-white p-0.5 rounded-md font-semibold text-sm">
                  {item.quantity}
                </div>
                <p>+</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="my-4 flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <p className="text-sm">Subtotal * {orders.length} items</p>
            <p className="text-sm font-medium">
              ${orders.reduce((sum, item) => sum + item.price, 0)}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm">Delivery Charge</p>
            <p className="text-sm font-medium">$0</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm">Tax</p>
            <p className="text-sm font-medium">
              {" "}
              ${(orders.reduce((sum, item) => sum + item.price, 0) * 5) / 100}
            </p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-sm">Grand Total</p>
            <p className="text-sm font-medium">
              {" "}
              $
              {orders.reduce((sum, item) => sum + item.price, 0) +
                (orders.reduce((sum, item) => sum + item.price, 0) * 5) / 100}
            </p>
          </div>
        </div>
        <button
          onClick={() => navigate("/orderComplete")}
          className="bg-red-500 hover:bg-red-500/80 py-2 rounded-md text-white text-sm"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default OrderDetails;
