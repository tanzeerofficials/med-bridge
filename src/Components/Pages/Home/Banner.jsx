import React from "react";
import { MdAddLocationAlt } from "react-icons/md";
import banner1 from "../../../assets/banner1.jpg";
import banner2 from "../../../assets/banner2.jpg";

const Banner = () => {
  return (
    <div className="bg-white shadow rounded">
      <div className="text-center p-4 md:p-[4rem]">
        <h2 className=" md:text-3xl text-xl font-bold">
          Your Healthier Tomorrow Starts At
          <span className="text-primary">
            {" "}
            <MdAddLocationAlt className="inline mb-2 text-secondary" />
            MedBridge
          </span>
        </h2>
        <p className="text-gray-500   italic">
          Compassonate Health Care and Modern Facilities Close To You.
        </p>
        <p className="mt-4">
          At MedBridge, we believe exceptional healthcare begins with genuine
          compassion and ends with you feeling your very best. <br /> Welcome to
          a place where modern medicine meets heartfelt care — your health is
          our highest calling.
        </p>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center pb-8 mt-4">
          <input
            type="text"
            placeholder="Search for services or doctors"
            className="border border-gray-300 outline-primary rounded p-2 w-full md:w-1/2 "
          />
          <button className="btn btn-soft btn-primary">Search</button>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <div >
            <img className="w-full object-cover rounded-2xl" src={banner1} alt="Banner 1" />
          </div>
          <div>
            <img className="w-full object-cover rounded-2xl" src={banner2} alt="Banner 2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
