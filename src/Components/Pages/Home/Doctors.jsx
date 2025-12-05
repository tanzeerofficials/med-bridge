import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import DoctorsCard from "./DoctorsCard";

const Doctors = () => {
  const doctors = useLoaderData();
  const [visibleCount, setVisibleCount] = useState(9);
  const visibleDoctors = doctors.slice(0, visibleCount);
  const handleShowMore = () => {
    setVisibleCount(12);
  };

  return (
    <div className="mt-4 md:mt-[4rem]">
      <div className="text-center mb-4 md:mb-0">
        <h2 className="text-2xl font-bold text-primary">Meet Our Heroes</h2>
        <p>
          Our team of dedicated medical professionals is here to provide you
          with exceptional care and support.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:px-[4rem] p-2 my-4">
        {visibleDoctors.map((doctor) => (
          <DoctorsCard key={doctor.id} doctor={doctor}></DoctorsCard>
        ))}
      </div>
      <div className="text-center ">
        {visibleCount < doctors.length && (
          <button onClick={handleShowMore} className="btn btn-soft btn-primary">
            View All Doctors
          </button>
        )}
      </div>
    </div>
  );
};

export default Doctors;
