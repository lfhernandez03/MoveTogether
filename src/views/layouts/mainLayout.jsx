import React from "react";
import "../../../index.css";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <main className="">
        <Outlet />
      </main>
      <ToastContainer />
    </>
  );
};

export default MainLayout;
