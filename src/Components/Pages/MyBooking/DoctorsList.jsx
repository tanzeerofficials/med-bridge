import React, { useState } from "react";
import { cancelAppointmentBooking } from "../../utilities";

const DoctorsList = ({ bookedDoctors, handleDeleteBooking }) => {
  const [activeId, setActiveId] = useState(null);
  const handleCancelConfirmation = (id) => {
    setActiveId(id);
  };
  const handleKeepIt=()=>{
    setActiveId(null);
    return;
  }
  return (
    <div className="md:mx-[4rem] mx-3 my-8 ">
      <div className="my-6 text-center">
        <h2 className="text-2xl font-bold">Your Booked Doctors</h2>
        <p>
          Our platform allows you to easily manage your appointments with your
          trusted healthcare providers.
        </p>
      </div>
      <div>
        {bookedDoctors.length ? (
          bookedDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className=" bg-white px-8 py-4 my-6 rounded-lg shadow-md gap-4"
            >
              <div className="flex justify-between  ">
                <div>
                  <p className="font-bold">{doctor.name}</p>
                  <p>{doctor.speciality}</p>
                  <p>Location: {doctor.hospital}</p>
                </div>
                <div>
                  <p>Fee: ${doctor.fee}</p>
                </div>
              </div>
              {activeId !== doctor.id ?  (
                <div>
                  <button
                    onClick={() => handleCancelConfirmation(doctor.id)}
                    className="btn btn-soft btn-primary w-full mt-4"
                  >
                    Cancel Appointment
                  </button>
                </div>
              ) : (
                <div
                  role="alert"
                  className=" mt-4 alert alert-vertical sm:alert-horizontal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-info h-6 w-6 shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span>
                    Please Confirm if you want to{" "}
                    {bookedDoctors.includes(doctor.id) ? "cancel" : "book"} an
                    appointment with{" "}
                    <span className="font-bold">{doctor.name}</span>.
                  </span>
                  <div className="flex gap-4">
                    <button
                      onClick={handleKeepIt}
                      className="btn btn-sm"
                    >
                      No, Keep It
                    </button>
                    <button
                     onClick={()=>handleDeleteBooking(doctor.id)}
                      className="btn btn-sm btn-primary"
                    >
                      Yes, Cancel It
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <div>
            <p className="text-red-500 font-semibold">
              You have not booked any doctors yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorsList;
