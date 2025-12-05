import React from "react";
import Navbar from "../Nabvar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div>
      <div className="bg-gray-100 flex flex-col min-h-screen ">
        <Navbar></Navbar>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Root;
