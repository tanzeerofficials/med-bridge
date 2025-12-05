import React from "react";
import Banner from "./Banner";
import Doctors from "./Doctors";
import { useLoaderData } from "react-router-dom";
import Stats from "./Stats";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="md:px-[4rem] p-4">
    
      <Banner></Banner>
      <Doctors></Doctors>
      <Stats></Stats>
    </div>
  );
};

export default Home;
