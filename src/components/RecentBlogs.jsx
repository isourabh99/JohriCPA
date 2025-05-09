import React from "react";
import { Link } from "react-router-dom";
import user from "../assets/userdp.jpg";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import success from "../assets/success.avif";

function RecentBlogs() {
  const blogs = [
    {
      src: blog1,
      title: `Business Update – 10 October 2024`,
      desc: `Welcome to our Weekly Digest – stay in the know with some recent news updates relevant to business and Welcome to our Weekly Digest – stay in the know with some and `,
      postedByDp:
        "https://i.pinimg.com/474x/8d/95/03/8d9503a77e4c21ebf0ced6c252819a0e.jpg",
      postedByName: `Arjun Nair`,
      postedOn: `Jan 3, 2025`,
      to: "/blog/0",
    },
    {
      src: blog2,
      title: `8 factors to consider before investing`,
      desc: `Welcome to our Weekly Digest – stay in the know with some recent news updates relevant to business and Welcome to our Weekly Digest – stay in the know with some and `,
      postedByDp: user,
      postedByName: `Rajesh Sharma`,
      postedOn: `Dec 30, 2024`,
      to: "/blog/1",
    },
    {
      src: success,
      title: `Succession Planning: A will for your business`,
      desc: `The unfortunate reality is most business owners don’t take proper holidays. Usually this is because Welcome most business owners don’t take propermost business owners don’t take proper `,
      postedByDp:
        "https://i.pinimg.com/474x/ca/8a/ca/ca8acae43c6cd08b09f5c66f90abed71.jpg",
      postedByName: `Sourabh Soni`,
      postedOn: `April 10 2025`,
      to: "/blog/2",
    },
  ];

  return (
    <div className="px-6 md:px-24  my-10">
      <h1 className="text-[#0a56ab] text-center  font-semibold text-2xl md:text-3xl  my-10">
        Recent Blogs
      </h1>
      <div className="flex flex-col md:flex-row justify-between gap-10 ">
        <div className="left md:w-[70%] flex flex-col justify-between   gap-10">
          {blogs.slice(0, 2).map((blog, idx) => (
            <div
              className="w-full md:h-60 bg-white p-2 border-2 rounded border-gray-200 flex md:flex-row flex-col gap-4 overflow-hidden shadow "
              key={idx}
            >
              <img
                src={blog.src}
                alt="Blog article visual preview"
                loading="lazy"
                className="md:w-70 rounded object-center object-cover"
              />
              <div className="md:w-[60%]">
                <p className="text-2xl md:text-3xl font-semibold mb-4">
                  {blog.title}
                </p>
                <p className=" my-4 text-gray-400">
                  {blog.desc}
                  <Link to={blog.to} className="text-[#0a56ab] font-semibold">
                    read more...
                  </Link>
                </p>
                <div className="flex gap-4 items-center my-4">
                  <img
                    src={blog.postedByDp}
                    alt={`Profile picture of ${blog.postedByName}`}
                    loading="lazy"
                    className="h-7 w-7 md:w-10 md:h-10 rounded-full object-center object-cover"
                  />
                  <div className="md:my-2">
                    <p className="text-xs md:text-lg font-semibold">
                      {blog.postedByName}
                    </p>
                    <p className="text-xs md:text-md text-gray-400">
                      {blog.postedOn}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="right md:w-[30%] flex justify-end">
          {blogs[2] && (
            <div className=" h-full bg-white p-2 border-2 rounded border-gray-200 flex  flex-col gap-4 overflow-hidden shadow ">
              <img
                src={blogs[2].src}
                alt="Blog preview"
                loading="lazy"
                className="h-50 w-full object-center object-cover"
              />
              <p className="text-xs md:text-2xl font-semibold mb-4">
                {blogs[2].title}
              </p>
              <p className="text-md md:text-md my-2 text-gray-400">
                {blogs[2].desc}
                <Link to={blogs[2].to} className="text-[#0a56ab] font-semibold">
                  read more...
                </Link>
              </p>
              <div className="flex gap-4 items-center ">
                <img
                  src={blogs[2].postedByDp}
                  alt="User profile picture"
                  loading="lazy"
                  className="h-7 w-7 md:w-10 md:h-10 rounded-full object-center object-cover"
                />
                <div className="md:my-2">
                  <p className="text-xs md:text-lg font-semibold">
                    {blogs[2].postedByName}
                  </p>
                  <p className="text-xs md:text-md text-gray-400">
                    {blogs[2].postedOn}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecentBlogs;
