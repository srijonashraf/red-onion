import React, { Fragment } from "react";
import Navbar from "../components/shared/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Details from "./../components/details/Details";
import WhyChooseUs from "../components/whychoose/WhyChooseUs";
import Footer from "../components/shared/footer/Footer";

const DetailsPage = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Details />
      <WhyChooseUs />
      <Footer />
    </Fragment>
  );
};

export default DetailsPage;
