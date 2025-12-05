import React from "react";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom";
import Navbar from "../../Nabvar/Navbar";

const Invalid = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="md:w-1/2 w-full mx-auto mt-6">
          <DotLottieReact
            loop={true}
            autoplay={true}
            src="/gif.json"
          ></DotLottieReact>
          <h2 className="text-center font-bold text-2xl text-gray-500 my-6">
            Invalid Route
          </h2>
        </div>
        <div>
          <Link to="/">
            <button className="btn btn-primary">Go Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Invalid;
