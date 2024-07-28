import React from "react";
import logo from "../../../assets/image/logo.png";
const Footer = () => {
  const list1 = [
    "About Online food",
    "Read our blog",
    "Sign up to deliver",
    "Add your restaurant",
  ];
  const list2 = [
    "Get Help",
    "Read FAQ",
    "View all offers",
    "Restaurant near me",
  ];

  return (
    <div className="bg-black flex items-center">
      <div className="container mx-auto flex flex-col gap-3 text-white my-10 px-5">
        <section className="flex justify-between items-start max-sm:flex-col max-sm:gap-5">
          <img src={logo} alt="" className="w-36" />
          <div className="flex gap-20">
            <ul className="flex flex-col gap-2">
              {list1.map((item, index) => (
                <li className="text-sm font-medium" key={index.toString()}>
                  {item}
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-2">
              {list2.map((item, index) => (
                <li className="text-sm font-medium" key={index.toString()}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="flex items-center justify-between mt-10">
          <p className="text-sm text-gray-500 font-medium">Copyright 2024</p>
          <div>
            <ul className="flex gap-10 text-sm font-medium">
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>Pricing</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
