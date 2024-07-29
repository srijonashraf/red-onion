import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/index.css";
import { Toaster } from "react-hot-toast";
import MenuTabProvider from "./context/MenuTabProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster position="top-right" />
    <MenuTabProvider>
      <App />
    </MenuTabProvider>
  </React.StrictMode>
);
