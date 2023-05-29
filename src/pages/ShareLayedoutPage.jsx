import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, NavBar, SideBar } from "../components";

const ShareLayedoutPage = () => {
  return (
    <>
      <NavBar />
      <SideBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default ShareLayedoutPage;
