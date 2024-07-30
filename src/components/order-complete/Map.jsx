import React from "react";

const Map = () => {
  return (
    <div className="w-full lg:w-[40%]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.303648705929!2d90.41357447602415!3d23.807799086569183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70055f1202d%3A0xdcb5b6d90076107e!2sGulshan%20Restaurant%20and%20Catering%20Service!5e0!3m2!1sen!2sbd!4v1722333638534!5m2!1sen!2sbd"
        width="600"
        height="450"
        allow="fullscreen"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg w-full"
      ></iframe>
    </div>
  );
};

export default Map;
