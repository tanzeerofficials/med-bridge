import React from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

const Blogs = () => {
  const blogList = useLoaderData();
  console.log(blogList);
  return (
    <div className="my-6 md:mx-[4rem] mx-4 p-6 ">
      <div className="bg-white rounded-lg shadow-md p-6 text-center mb-6">
        <h2 className="font-bold text-2xl ">
          Welcome to <span>MedBridge</span> Daily Blogs
        </h2>
        <p>
          Stay updated with the latest health tips, medical news, and expert
          advice from our team of healthcare professionals.
        </p>
      </div>
      {blogList.map((blog) => (
        <div
          key={blog.id}
          className="collapse bg-base-100 border-base-300 border my-6 px-6"
        >
          <input type="checkbox" />
          <div className="collapse-title font-semibold">{blog.question}</div>
          <div className="collapse-content text-sm overflow-x-auto">
            <pre>{blog.answer}</pre>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
