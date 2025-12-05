export const getDoctorsData = async () => {
  const res = await fetch("/doctors.json");
  const doctorsList = await res.json();
  return doctorsList;
};
export const getBlogsData = async () => {
  const res = await fetch("/blogs.json");
  const blogsList = await res.json();
  return blogsList;
}
export const getContactData = async () => {
  const res = await fetch("/contact.json");
  const contactInfo = await res.json();
  return contactInfo;
}
export const saveAppointmentBooking = (doctorId) => {
  const bookedDoctors =
    JSON.parse(localStorage.getItem("booked-doctors-id")) || [];
  if (!bookedDoctors.includes(doctorId)) {
    bookedDoctors.push(doctorId);
    localStorage.setItem("booked-doctors-id", JSON.stringify(bookedDoctors));
  }
};
export const getBookedDoctors = () => {
  return JSON.parse(localStorage.getItem("booked-doctors-id")) || [];
};
export const cancelAppointmentBooking = (doctorId) => {
    const bookedDoctors =JSON.parse(localStorage.getItem("booked-doctors-id")) || [];
    const updatedBookedDoctors = bookedDoctors.filter(id => id !== doctorId);
    localStorage.setItem("booked-doctors-id", JSON.stringify(updatedBookedDoctors));

}