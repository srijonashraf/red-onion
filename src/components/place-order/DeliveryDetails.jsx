import React from "react";

const DeliveryDetails = () => {
  return (
    <div className="w-full">
      <form
        action=""
        className="flex flex-col gap-5 w-3/4 text-xs mx-auto max-md:w-[90%]"
      >
        <h2 className="text-2xl font-medium">Edit Delivery Details</h2>
        <hr className="bg-black" />
        <input
          type="text"
          className="px-2 py-3 rounded-md bg-gray-100 outline-none font-medium"
          placeholder="Name"
        />
        <input
          type="text"
          className="px-2 py-3 rounded-md bg-gray-100 outline-none font-medium"
          placeholder="Deliver to door"
        />
        <input
          type="text"
          className="px-2 py-3 rounded-md bg-gray-100 outline-none font-medium"
          placeholder="Flat, suit or floor"
        />
        <input
          type="text"
          className="px-2 py-3 rounded-md bg-gray-100 outline-none font-medium"
          placeholder="Business Name"
        />
        <textarea
          name=""
          id=""
          rows={4}
          className="px-2 py-3 rounded-md bg-gray-100 outline-none resize-none font-medium"
          placeholder="Delivery Instructions"
        ></textarea>

        <button className="bg-red-500 py-2 text-gray-100 rounded-md hover:bg-red-500/80 text-sm">
          Save and Continue
        </button>
      </form>
    </div>
  );
};

export default DeliveryDetails;
