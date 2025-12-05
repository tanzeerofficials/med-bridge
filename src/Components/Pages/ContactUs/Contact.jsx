import React from "react";
import { Helmet } from "react-helmet";
import { FaPhoneVolume } from "react-icons/fa";
import { MdMarkEmailRead, MdOutlineAddLocationAlt, MdPermPhoneMsg } from "react-icons/md";
import { useLoaderData } from "react-router-dom";

const Contact = () => {
  const contactData = useLoaderData();

  return (
    <div className="md:p-12 lg:p-16 p-4 flex flex-col gap-6">
      
      <div className="p-6 bg-white rounded-2xl text-center shadow-lg">
        <h2 className="text-2xl font-bold text-primary">
         <span className="text-secondary">24/7</span> Available 
        </h2>
        
        <p className="text-gray-500">{contactData.tagline}</p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        <div className="p-6 bg-white rounded-2xl shadow-lg mt-6">
          <div className="flex items-center gap-2 mb-4">
            <p className="text-3xl text-secondary">
              {" "}
              <MdOutlineAddLocationAlt />
            </p>
            <h3 className="text-xl font-semibold">Address</h3>
          </div>
          <p>{contactData.address.street}</p>
          <p>
            {contactData.address.city}, {contactData.address.state}{" "}
            {contactData.address.zip}
          </p>
          <p>{contactData.address.country}</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-lg mt-6">
          <div className="flex items-center gap-2 mb-4">
            <p className="text-3xl text-secondary">
              {" "}
              <MdPermPhoneMsg />
            </p>
            <h3 className="text-xl font-semibold">Contact</h3>
          </div>
          <p>
            <span className="font-semibold">Main</span>:{" "}
            {contactData.phones.main}
          </p>
          <p>
            <span className="font-semibold">Support</span>:{" "}
            {contactData.phones.support}
          </p>
          <p>
            <span className="font-semibold">Emergency</span>:{" "}
            {contactData.phones.emergency}
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-lg mt-6">
          <div className="flex items-center gap-2 mb-4">
            <p className="text-3xl text-secondary">
              {" "}
              <MdMarkEmailRead />
            </p>
            <h3 className="text-xl font-semibold">Email</h3>
          </div>
          <p>
            <span className="font-semibold">Support</span>:{" "}
            {contactData.emails.support}
          </p>
          <p>
            <span className="font-semibold">Billing</span>:{" "}
            {contactData.emails.billing}
          </p>
          <p>
            <span className="font-semibold">Careers</span>:{" "}
            {contactData.emails.careers}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
