import React, { useContext, useEffect, useState } from "react";
import MenuTab from "../shared/menu-tab/MenuTab";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ItemDetailsContext } from "../../context/ItemDetailsContext";
import { MenuTabContext } from "../../context/MenuTabContext";
import {
  BreakfastImages,
  DinnerImages,
  LunchImages,
} from "../../data/menuImages";

const Details = () => {
  const [cartValue, setCartValue] = useState(1);
  const [date, setDate] = useState(0);
  const [sliderList, setSliderList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  let { itemDetails, setItemDetails } = useContext(ItemDetailsContext);
  const { menuType } = useContext(MenuTabContext);

  useEffect(() => {
    if (menuType === "Breakfast") {
      setSliderList(BreakfastImages);
    } else if (menuType === "Lunch") {
      setSliderList(LunchImages);
    } else {
      setSliderList(DinnerImages);
    }
    setCurrentIndex(0);
    // In Case the item details is not there show a dummy details
    if (itemDetails == null) {
      setItemDetails({
        id: 1,
        thumbnail: DinnerImages[0],
        title: "Steak",
        description: "Grilled steak with vegetables",
        price: 14.99,
      });
    }
  }, [menuType, date]);

  const handleRightArrowClick = () => {
    if (currentIndex + 3 < sliderList.length) {
      setCurrentIndex(currentIndex + 3);
    }
  };
  const handleLeftArrowClick = () => {
    if (currentIndex - 3 >= 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };
  const handleSliderImageClick = (sliderImage) => {
    setItemDetails((prevDetails) => ({
      ...prevDetails,
      thumbnail: sliderImage,
    }));
    setDate(Date.now());
  };
  return (
    <>
      <MenuTab />
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.2,
        }}
        viewport={{ once: true }}
        className="w-3/4 grid grid-cols-6 gap-8 items-center mx-auto my-10"
      >
        <div className="flex flex-col gap-5 col-span-6 md:col-span-3 w-full">
          <h1 className="text-4xl font-semibold font-inter">
            {itemDetails?.title}
          </h1>
          <p className="text-gray-500 text-base font-inter font-normal">
            {itemDetails?.description}
          </p>
          <div className="hidden md:flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <h3 className="text-2xl font-inter font-medium">
                ${itemDetails?.price}
              </h3>
              <div className="flex items-center border border-gray-300 rounded-full">
                <button
                  className="px-4 py-1"
                  onClick={() =>
                    setCartValue((preValue) => Math.max(preValue - 1, 1))
                  }
                >
                  -
                </button>
                <input
                  type="number"
                  className="w-16 text-center outline-none border-l border-r border-gray-300"
                  value={cartValue}
                />
                <button
                  className="px-4 py-1"
                  onClick={() => setCartValue((preValue) => preValue + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() => navigate("/placeOrder")}
              className="outline-none bg-red-500 text-white text-base 
          font-inter flex self-start gap-2 px-6 py-2 rounded-full hover:bg-red-500/80"
            >
              Add
            </button>
          </div>
          <div className="hidden md:flex items-center gap-5 mt-5">
            {/* Left Arrow SVG Start */}
            {currentIndex > 0 && (
              <svg
                width="30"
                height="30"
                viewBox="0 0 49 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
                onClick={handleLeftArrowClick}
              >
                <rect
                  width="49"
                  height="49"
                  rx="24.5"
                  fill="#FFFFFF"
                  fillOpacity="0.85"
                />
                <path
                  d="M29.4608 21.1129L22.438 15.0722C22.1513 14.827 21.7636 14.6895 21.3594 14.6895C20.9551 14.6895 20.5674 14.827 20.2807 15.0722C20.1373 15.1945 20.0235 15.3401 19.9458 15.5004C19.8681 15.6608 19.8281 15.8328 19.8281 16.0066C19.8281 16.1803 19.8681 16.3523 19.9458 16.5127C20.0235 16.6731 20.1373 16.8186 20.2807 16.941L27.3187 22.9686C27.4621 23.091 27.576 23.2365 27.6536 23.3969C27.7313 23.5573 27.7713 23.7293 27.7713 23.903C27.7713 24.0768 27.7313 24.2488 27.6536 24.4092C27.576 24.5695 27.4621 24.7151 27.3187 24.8374L20.2807 30.8651C19.9926 31.1111 19.8299 31.4456 19.8285 31.7948C19.8271 32.1441 19.987 32.4795 20.2731 32.7273C20.5591 32.9751 20.9479 33.115 21.3539 33.1163C21.76 33.1175 22.1499 32.98 22.438 32.7339L29.4608 26.6931C30.3203 25.9528 30.8031 24.9493 30.8031 23.903C30.8031 22.8567 30.3203 21.8532 29.4608 21.1129Z"
                  fill="black"
                  fillOpacity="0.5"
                  transform="scale(-1, 1) translate(-49, 0)"
                />
              </svg>
            )}
            {/* Left Arrow SVG Finish */}

            {sliderList
              ?.slice(currentIndex, currentIndex + 3)
              ?.map((item, index) => (
                <img
                  key={index.toString()}
                  src={item}
                  alt=""
                  className="rounded-full object-contain w-16 cursor-pointer"
                  onClick={() => handleSliderImageClick(item)}
                />
              ))}

            {/* Right Arrow SVG Start */}
            {currentIndex <= 0 && (
              <svg
                width="30"
                height="30"
                viewBox="0 0 49 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
                onClick={handleRightArrowClick}
              >
                <rect
                  width="49"
                  height="49"
                  rx="24.5"
                  fill="#FFFFFF"
                  fillOpacity="0.85"
                />
                <path
                  d="M29.4608 21.1129L22.438 15.0722C22.1513 14.827 21.7636 14.6895 21.3594 14.6895C20.9551 14.6895 20.5674 14.827 20.2807 15.0722C20.1373 15.1945 20.0235 15.3401 19.9458 15.5004C19.8681 15.6608 19.8281 15.8328 19.8281 16.0066C19.8281 16.1803 19.8681 16.3523 19.9458 16.5127C20.0235 16.6731 20.1373 16.8186 20.2807 16.941L27.3187 22.9686C27.4621 23.091 27.576 23.2365 27.6536 23.3969C27.7313 23.5573 27.7713 23.7293 27.7713 23.903C27.7713 24.0768 27.7313 24.2488 27.6536 24.4092C27.576 24.5695 27.4621 24.7151 27.3187 24.8374L20.2807 30.8651C19.9926 31.1111 19.8299 31.4456 19.8285 31.7948C19.8271 32.1441 19.987 32.4795 20.2731 32.7273C20.5591 32.9751 20.9479 33.115 21.3539 33.1163C21.76 33.1175 22.1499 32.98 22.438 32.7339L29.4608 26.6931C30.3203 25.9528 30.8031 24.9493 30.8031 23.903C30.8031 22.8567 30.3203 21.8532 29.4608 21.1129Z"
                  fill="black"
                  fillOpacity="0.5"
                />
              </svg>
            )}
          </div>
        </div>
        {/* Right Arrow SVG Finish */}

        {/* For Small Device view we have used the slider list twice*/}
        <div className="col-span-6 md:col-span-3 w-full">
          {/* Display the main image */}
          <img src={itemDetails?.thumbnail} alt="" className="w-full" />

          <div className="flex items-center gap-5 my-5 md:hidden">
            {/* Left Arrow SVG Start */}
            {currentIndex > 0 && (
              <svg
                width="30"
                height="30"
                viewBox="0 0 49 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
                onClick={handleLeftArrowClick}
              >
                <rect
                  width="49"
                  height="49"
                  rx="24.5"
                  fill="#FFFFFF"
                  fillOpacity="0.85"
                />
                <path
                  d="M29.4608 21.1129L22.438 15.0722C22.1513 14.827 21.7636 14.6895 21.3594 14.6895C20.9551 14.6895 20.5674 14.827 20.2807 15.0722C20.1373 15.1945 20.0235 15.3401 19.9458 15.5004C19.8681 15.6608 19.8281 15.8328 19.8281 16.0066C19.8281 16.1803 19.8681 16.3523 19.9458 16.5127C20.0235 16.6731 20.1373 16.8186 20.2807 16.941L27.3187 22.9686C27.4621 23.091 27.576 23.2365 27.6536 23.3969C27.7313 23.5573 27.7713 23.7293 27.7713 23.903C27.7713 24.0768 27.7313 24.2488 27.6536 24.4092C27.576 24.5695 27.4621 24.7151 27.3187 24.8374L20.2807 30.8651C19.9926 31.1111 19.8299 31.4456 19.8285 31.7948C19.8271 32.1441 19.987 32.4795 20.2731 32.7273C20.5591 32.9751 20.9479 33.115 21.3539 33.1163C21.76 33.1175 22.1499 32.98 22.438 32.7339L29.4608 26.6931C30.3203 25.9528 30.8031 24.9493 30.8031 23.903C30.8031 22.8567 30.3203 21.8532 29.4608 21.1129Z"
                  fill="black"
                  fillOpacity="0.5"
                  transform="scale(-1, 1) translate(-49, 0)"
                />
              </svg>
            )}
            {/* Left Arrow SVG Finish */}

            {sliderList
              ?.slice(currentIndex, currentIndex + 3)
              ?.map((item, index) => (
                <img
                  key={index.toString()}
                  src={item}
                  alt=""
                  className="rounded-full object-contain w-16 cursor-pointer"
onClick={() => handleSliderImageClick(item)}
                />
              ))}

            {/* Right Arrow SVG Start */}
            {currentIndex <= 0 && (
              <svg
                width="30"
                height="30"
                viewBox="0 0 49 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
                onClick={handleRightArrowClick}
              >
                <rect
                  width="49"
                  height="49"
                  rx="24.5"
                  fill="#FFFFFF"
                  fillOpacity="0.85"
                />
                <path
                  d="M29.4608 21.1129L22.438 15.0722C22.1513 14.827 21.7636 14.6895 21.3594 14.6895C20.9551 14.6895 20.5674 14.827 20.2807 15.0722C20.1373 15.1945 20.0235 15.3401 19.9458 15.5004C19.8681 15.6608 19.8281 15.8328 19.8281 16.0066C19.8281 16.1803 19.8681 16.3523 19.9458 16.5127C20.0235 16.6731 20.1373 16.8186 20.2807 16.941L27.3187 22.9686C27.4621 23.091 27.576 23.2365 27.6536 23.3969C27.7313 23.5573 27.7713 23.7293 27.7713 23.903C27.7713 24.0768 27.7313 24.2488 27.6536 24.4092C27.576 24.5695 27.4621 24.7151 27.3187 24.8374L20.2807 30.8651C19.9926 31.1111 19.8299 31.4456 19.8285 31.7948C19.8271 32.1441 19.987 32.4795 20.2731 32.7273C20.5591 32.9751 20.9479 33.115 21.3539 33.1163C21.76 33.1175 22.1499 32.98 22.438 32.7339L29.4608 26.6931C30.3203 25.9528 30.8031 24.9493 30.8031 23.903C30.8031 22.8567 30.3203 21.8532 29.4608 21.1129Z"
                  fill="black"
                  fillOpacity="0.5"
                />
              </svg>
            )}
            {/* Right Arrow SVG Finish */}
          </div>
          <div className="flex flex-col gap-3 md:hidden">
            <div className="flex items-center gap-4">
              <h3 className="text-2xl font-inter font-medium">
                ${itemDetails?.price}
              </h3>
              <div className="flex items-center border border-gray-300 rounded-full">
                <button
                  className="px-4 py-1"
                  onClick={() =>
                    setCartValue((preValue) => Math.max(preValue - 1, 1))
                  }
                >
                  -
                </button>
                <input
                  type="number"
                  className="w-16 text-center outline-none border-l border-r border-gray-300"
                  value={cartValue}
                />
                <button
                  className="px-4 py-1"
                  onClick={() => setCartValue((preValue) => preValue + 1)}
                >
                  +
                </button>
              </div>
              <button className="outline-none bg-red-500 text-white text-base font-inter flex self-start gap-2 px-6 py-2 rounded-full hover:bg-red-500/80">
                Add
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Details;
