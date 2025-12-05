import React from "react";
import { Link } from "react-router-dom";

const DoctorsCard = ({ doctor }) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-sm ">
        <figure className="px-10 pt-10">
          <img src={doctor.image} alt={doctor.name} className="rounded-xl " />
        </figure>
        <div className="card-body text-start">
          <div className="flex gap-4">
            <div className="badge badge-soft badge-secondary">
              {doctor.specialty}
            </div>
            <div className="badge badge-soft badge-info">
              {doctor.availability}
            </div>
          </div>
          <h2 className="text-xl font-bold">{doctor.name}</h2>
          <p className="text-sm text-gray-600">{doctor.degree}</p>

          <div className="">
            <div>
              <Link to={`/doctor-details/${doctor.id}`}>
                <button className="btn btn-sm btn-block btn-outline btn-primary rounded-3xl">
                  View Details
                </button>
              </Link>
            </div>
            <div>
              <Link to={`/doctor-details/${doctor.id}`}>
                <button className="btn btn-sm btn-block btn-outline btn-primary rounded-3xl mt-2">
                  Book Appointment
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsCard;
