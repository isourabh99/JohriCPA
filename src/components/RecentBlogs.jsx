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
      desc: `The unfortunate reality is most business owners don't take proper holidays. Usually this is because Welcome most business owners don't take propermost business owners don't take proper `,
      postedByDp:
        "https://i.pinimg.com/474x/ca/8a/ca/ca8acae43c6cd08b09f5c66f90abed71.jpg",
      postedByName: `Sourabh Soni`,
      postedOn: `April 10 2025`,
      to: "/blog/2",
    },
  ];

  const BlogCard = ({ blog, isFeatured = false }) => (
    <div
      className={`w-full bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md ${
        isFeatured ? "h-full" : "md:h-[280px]"
      }`}
    >
      <div
        className={`flex ${
          isFeatured ? "flex-col" : "md:flex-row flex-col"
        } gap-4 p-4`}
      >
        <div className={`${isFeatured ? "w-full" : "md:w-[40%] w-full"}`}>
          <img
            src={blog.src}
            alt="Blog article visual preview"
            loading="lazy"
            className="w-full h-[200px] md:h-full rounded-lg object-cover"
          />
        </div>
        <div
          className={`${
            isFeatured ? "w-full" : "md:w-[60%] w-full"
          } flex flex-col justify-between`}
        >
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 line-clamp-2">
              {blog.title}
            </h2>
            <p className="text-gray-600 text-sm md:text-base mb-4 line-clamp-3">
              {blog.desc}
              <Link
                to={blog.to}
                className="text-[#0a56ab] font-semibold ml-1 hover:underline"
              >
                read more...
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-3 mt-auto">
            <img
              src={blog.postedByDp}
              alt={`Profile picture of ${blog.postedByName}`}
              loading="lazy"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm md:text-base font-semibold">
                {blog.postedByName}
              </p>
              <p className="text-xs md:text-sm text-gray-500">
                {blog.postedOn}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="px-4 sm:px-6 lg:px-24 py-12">
      <h1 className="text-[#0a56ab] text-center font-semibold text-2xl md:text-3xl mb-10">
        Recent Blogs
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {blogs.slice(0, 2).map((blog, idx) => (
            <BlogCard key={idx} blog={blog} />
          ))}
        </div>
        <div className="lg:col-span-1">
          {blogs[2] && <BlogCard blog={blogs[2]} isFeatured={true} />}
        </div>
      </div>
    </section>
  );
}

export default RecentBlogs;
