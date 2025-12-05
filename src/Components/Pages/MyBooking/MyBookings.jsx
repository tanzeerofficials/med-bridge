import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { cancelAppointmentBooking, getBookedDoctors } from "../../utilities";
import Chart from "./Chart";
import DoctorsList from "./DoctorsList";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const MyBookings = () => {
  const doctors = useLoaderData();
  const [bookedDoctors, setBookedDoctors] = useState([]);
  useEffect(() => {
    const bookedDoctorsId = getBookedDoctors();
    const filteredDoctors = doctors.filter((doctor) =>
      bookedDoctorsId.includes(doctor.id)
    );
    setBookedDoctors(filteredDoctors);
  }, [doctors]);
  const handleDeleteBooking = (id) => {
    cancelAppointmentBooking(id);
    const updatedBookedDoctors = bookedDoctors.filter((doctor) => doctor.id !== id);
    setBookedDoctors(updatedBookedDoctors);
    toast.success("Appointment cancelled successfully");
    
  };

  return (
    <div>
     
      <Chart bookedDoctors={bookedDoctors}></Chart>
      <DoctorsList
        bookedDoctors={bookedDoctors}
        handleDeleteBooking={handleDeleteBooking}
        
      ></DoctorsList>
    </div>
  );
};

export default MyBookings;
