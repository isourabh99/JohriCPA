import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CiLocationArrow1 } from "react-icons/ci";

import blogsData from "../data/blogDetails";

function BlogDetails() {
  const { id } = useParams();
  const blog = blogsData[id]; // Retrieve the blog using the id from URL

  if (!blog) {
    return (
      <p className="text-center text-red-500 text-2xl font-bold my-10">
        Blog not found
      </p>
    );
  }

  const canonicalUrl = `https://johricpa.ca/blog/${id}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.desc,
    image: blog.src,
    author: {
      "@type": "Person",
      name: blog.postedByName,
    },
    datePublished: blog.postedOn,
    publisher: {
      "@type": "Organization",
      name: "Johri CPA",
      logo: {
        "@type": "ImageObject",
        url: "https://johricpa.ca/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
  };

  return (
    <>
      <Helmet>
        <title>{`${blog.title} | Johri CPA Blog`}</title>
        <meta name="description" content={blog.desc} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.desc} />
        <meta property="og:image" content={blog.src} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <main className="px-2 md:px-20 mt-34 flex gap-4 flex-col md:flex-row my-10">
        <section className="md:w-3/4">
          <div className="w-full flex gap-4 flex-col md:flex-row">
            <img
              src={blog.src}
              alt={`Blog thumbnail for: ${blog.title}`}
              loading="lazy"
              className="md:w-1/4 h-80 object-cover rounded-md shadow-md"
            />

            <div>
              <h1 className="text-4xl font-semibold text-gray-900">
                {blog.title}
              </h1>
              <p className="my-4 text-gray-500">{blog.desc}</p>
            </div>
          </div>

          <p className="my-4 text-gray-500">{blog.desc2}</p>

          <ul>
            {blog.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <CiLocationArrow1 />
                {feature}
              </li>
            ))}
          </ul>

          <p className="my-4 text-gray-500">{blog.desc3}</p>

          <div className="flex gap-4 items-center my-4">
            <img
              src={blog.postedByDp}
              alt={`Author: ${blog.postedByName}`}
              loading="lazy"
              className="h-7 w-7 md:w-14 md:h-14 rounded-full object-center object-cover"
            />

            <div className="md:my-2">
              <p className="font-semibold">{blog.postedByName}</p>
              <p className="text-gray-400">{blog.postedOn}</p>
            </div>
          </div>
        </section>

        <section className="md:w-1/4">
          <h2 className="text-2xl font-semibold text-gray-900">
            {blog.title2}
          </h2>
          <p className="my-4 text-gray-500">{blog.desc4}</p>
          <img
            src={blog.blogpart2}
            alt={`Additional visual for: ${blog.title}`}
            loading="lazy"
          />
        </section>
      </main>
    </>
  );
}

export default BlogDetails;
