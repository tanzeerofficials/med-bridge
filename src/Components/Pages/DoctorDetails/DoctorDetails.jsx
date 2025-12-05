import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import {
  cancelAppointmentBooking,
  getBookedDoctors,
  saveAppointmentBooking,
} from "../../utilities";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DoctorDetails = () => {
  const doctors = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();
  const [availability, setAvailability] = useState("Checking...");
  const doctor = doctors.find((doc) => doc.id === parseInt(id));
  const [confirmBooking, setConfirmBooking] = useState(false);
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const todaysIndex = new Date().getDay();

  useEffect(() => {
    if (!doctor) {
      navigate("/404", { replace: true });
      return;
  
    }
    const isAvailableToday = doctor.workdays?.includes(dayNames[todaysIndex]);
    setAvailability(
      isAvailableToday ? "Available Today" : "Not Available Today"
    );
  }, [doctor, todaysIndex, id]);

  const handleConfirmBooking = (id) => {
    setConfirmBooking(true);
  };

  const handleBooking = (id) => {
    setConfirmBooking(false);
    toast.success(`Appointment booked with ${doctor.name} successfully!`);
    saveAppointmentBooking(id);
  };
  const bookedDoctors = getBookedDoctors();

  const handleCancelBookingConfirmation = (id) => {
    setConfirmBooking(true);
  };
  const handleDeleteBooking = (id) => {
    setConfirmBooking(false);
    cancelAppointmentBooking(id);
    toast.success(`Appointment with ${doctor.name} has been canceled.`);
  };
  const handleCancelationbtn = () => {
    setConfirmBooking(false);
    return;
  };

  return (
    doctor && (
      <div className="flex md:w-3/4 flex-col items-center p-2 md:px-[4rem]  mx-auto">
        <div className="md:p-[4rem] w-full p-4 text-center bg-white shadow-lg rounded-lg mt-4 ">
          <h2 className="text-2xl font-bold">Doctor's Profile</h2>
          <p>
            Welcome to doctor details page. All the details will be shown here.
            Contact us if you need more information.
          </p>
        </div>
        <div className="md:my-[3rem] mt-2 ">
          <div className=" bg-white  md:p-[2rem] shadow rounded-2xl">
            <div className=" grid md:grid-cols-2 grid-cols-1 gap-8 items-center">
              <div>
                <img src={doctor.image} className="p-4 rounded-lg" />
              </div>
              <div className="p-4">
                <h1 className="text-2xl font-bold">{doctor.name}</h1>
                <div className="flex gap-4 my-2 items-center">
                  <p className="font-bold text-sm text-gray-500">
                    {doctor.degree}
                  </p>
                  <div className="badge badge-soft badge-info">
                    {doctor.specialty}
                  </div>
                </div>
                <p className="text-gray-600">Works At: {doctor.hospital}</p>
                <hr className="text-gray-300 my-2" />
                <p className="text-gray-600">From: {doctor.location}</p>
                <p className="text-gray-600">
                  Speaks: {doctor.languages[0]}, {doctor.languages[1]}
                </p>
                <hr className="text-gray-300 my-2" />
                <p className="text-gray-600">
                  Availability: {doctor.availability}
                </p>
                <p className="text-gray-600">Fee: ${doctor.fee}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:p-[4rem] w-full p-4 text-center bg-white shadow-lg rounded-lg mb-8">
          <h2 className="text-2xl font-bold py-2 border-dashed border-b-2 border-gray-300">
            Book Appointment
          </h2>
          <div className="flex justify-between py-2  border-dashed border-b-2 border-gray-300">
            <p className="font-bold">Availablity: </p>
            <div className="badge badge-outline badge-info">{availability}</div>
          </div>
          <div role="alert" className="alert alert-soft alert-info mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 shrink-0 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>
              Due to high patient volume, appointment are taken only for today.
              We appreciate your understanding.
            </span>
          </div>
          {!confirmBooking && (
            <div
              className={`${
                availability === "Not Available Today" ? "hidden" : ""
              }`}
            >
              {!bookedDoctors.includes(doctor.id) ? (
                <button
                  onClick={() => handleConfirmBooking(doctor.id)}
                  className="btn btn-primary mt-4 w-full"
                >
                  Book An Appointment
                </button>
              ) : (
                <button
                  onClick={() => handleCancelBookingConfirmation(doctor.id)}
                  className="btn btn-primary mt-4 w-full"
                >
                  Cancel Appointment
                </button>
              )}
            </div>
          )}
          {confirmBooking && (
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
              {!bookedDoctors.includes(doctor.id) ? (
                <div className="flex gap-4">
                  <button onClick={handleCancelationbtn} className="btn btn-sm">
                    Cancel
                  </button>
                  <button
                    onClick={() => handleBooking(doctor.id)}
                    className="btn btn-sm btn-primary"
                  >
                    Book Now
                  </button>
                </div>
              ) : (
                <div className="flex gap-4">
                  <button onClick={handleCancelationbtn} className="btn btn-sm">
                    No, Keep It
                  </button>
                  <button
                    onClick={() => handleDeleteBooking(doctor.id)}
                    className="btn btn-sm btn-primary"
                  >
                    Yes, Cancel It
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default DoctorDetails;
