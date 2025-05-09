import React from "react";
import SEO from "../components/SEO"; // Import SEO component
import RecentBlogs from "../components/RecentBlogs";
import blogbanner from "../assets/blogbanner.png";
import Banner from "../components/Banner";

function Blog() {
  return (
    <>
      {/* SEO Meta Tags */}
      <SEO
        title="Blog | Johri CPA"
        description="Read insightful articles and tips on accounting, consulting, and business services from Johri CPA. Stay informed and updated."
        url="https://johricpa.ca/blog"
        keywords="accounting, consulting, business services, tax advice, Johri CPA, financial consulting"
      />

      <main>
        <Banner
          src={blogbanner}
          heading="Blogs"
          button="Contact Us"
          desc="Explore our in-depth articles, expert opinions, and the latest updates from the world of technology and digital transformation. Whether you're looking to stay ahead of trends, gain insights into our services, or learn from real-world case studies, our blog is your go-to resource for valuable information and inspiration."
        />

        <section>
          <RecentBlogs />
        </section>
      </main>
    </>
  );
}

export default Blog;
