import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Layout/Footer/Footer";
export default function RootLayout() {
  return (
    <>
   
      <Outlet />
    </>
  );
}
