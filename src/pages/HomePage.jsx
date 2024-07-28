import React, { Fragment } from "react";
import Navbar from "./../components/shared/navbar/Navbar";
import Hero from "./../components/hero/Hero";
import Menu from "./../components/menu/Menu";
import WhyChooseUs from "../components/whychoose/WhyChooseUs";
import Footer from "./../components/shared/footer/Footer";

const HomePage = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Menu />
      <WhyChooseUs />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
