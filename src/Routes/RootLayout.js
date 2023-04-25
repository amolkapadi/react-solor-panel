import React from "react";
import Navbar from "../Layout/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Layout/Footer/Footer";
export default function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
