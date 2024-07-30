import React from "react";
import cardImg1 from "../../assets/image/adult-blur-blurred-background-687824.png";
import cardImg2 from "../../assets/image/chef-cook-food-33614.png";
import cardImg3 from "../../assets/image/architecture-building-city-2047397.png";
import fastDeliveryIcon from "../../assets/icons/fast-delivery.png";
import homeDeliveryIcon from "../../assets/icons/home-delivery.png";
import notificationIcon from "../../assets/icons/notification.png";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
const WhyChooseUs = () => {
  const cardItem = [
    {
      img: cardImg1,
      icon: fastDeliveryIcon,
      title: "Fast Delivery",
      description:
        "Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future",
    },
    {
      img: cardImg2,
      icon: notificationIcon,
      title: "A Good Auto Responder",
      description:
        "Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future",
    },
    {
      img: cardImg3,
      icon: homeDeliveryIcon,
      title: "Home Delivery",
      description:
        "Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future",
    },
  ];
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.2,
      }}
      viewport={{ once: true }}
      className="container mx-auto px-5 mb-10"
    >
      <section>
        <h2 className="text-3xl font-medium">Why you choose us</h2>
      </section>
      <section>
        <p className="text-base my-10">
          Barton waited twenty always repair in within we do. An delighted
          offending curiosity my is dashwoods at. Boy prosperous increasing
          surrounded.
        </p>
      </section>
      <section>
        <ul className="flex max-sm:flex-col gap-5 max-sm:gap-10">
          {cardItem?.map((item, index) => (
            <li key={index.toString()} className="flex flex-col gap-5">
              <img src={item.img} alt="" className="" />
              <div className="flex items-start gap-3">
                <img src={item.icon} alt="" className="" />
                <div>
                  <p className="mb-4 text-lg font-semibold">{item.title}</p>
                  <p className="mb-2 text-gray-400">{item.description}</p>
                  <div>
                    <button className="text-blue-600 font-medium flex items-center gap-3">
                      See more{" "}
                      <motion.span
                        whileHover={{ x: 10 }}
                        transition={{
                          duration: 0.2,
                        }}
                        className="p-1 items-center justify-center bg-green-400 text-white rounded-full"
                      >
                        <FaArrowRight />
                      </motion.span>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </motion.div>
  );
};

export default WhyChooseUs;
