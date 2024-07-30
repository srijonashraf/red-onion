import React, { Fragment } from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import OrderCompletePage from "./pages/OrderCompletePage";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/placeOrder" element={<PlaceOrderPage />} />
          <Route path="/orderComplete" element={<OrderCompletePage />} />
          <Route path="/*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
