import React from 'react';
import ourdifference from "../assets/ourdifference.png";
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

function OurDifference() {
  return (
    <div className="bg-white px-6 md:px-24 py-16 w-full">
      {/* Top section: Side-by-side */}
      <div className="flex flex-col lg:flex-row gap-8 items-start ">
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={ourdifference}
            alt="Why Clients Choose Johri CPA"
            className="rounded-lg w-full shadow-md"
          />
        </div>

        {/* Title + Intro */}
        <div className="w-full lg:w-1/2 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-semibold text-[#0a56ab] flex items-center gap-2">
            Why Clients Choose Johri CPA
          </h2>

          <p className="text-base sm:text-2xl text-black font-medium">
            Trusted for 12+ Years in Personalized Financial Excellence
          </p>
          <p className="text-lg sm:text-xl md:text-lg text-zinc-700">
            At Johri CPA, we specialize in providing tailored accounting and tax
            solutions that match every client’s unique financial journey. Our
            team is committed to transparency, accuracy, and building trust that
            lasts.
          </p>
          <p className="text-lg sm:text-xl md:text-lg  text-zinc-700">
            For over 12 years, Johri CPA has earned the trust of individuals and
            businesses through reliable advice and a strong commitment to
            excellence. Our firm thrives on a personalized, client-centric
            approach—recognizing that no two financial situations are alike.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#0a56ab] text-white text-sm font-semibold px-5 py-2 rounded-md hover:bg-[#084b93] transition"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Bottom section: Full width */}
      <div className="mt-10 space-y-4 text-sm sm:text-base leading-relaxed text-zinc-700">
        <p className="text-lg sm:text-xl md:text-lg  text-zinc-700">
          Whether you're an entrepreneur, an established business, or an
          individual seeking guidance, we tailor every solution to your unique
          goals.
        </p>
        <p className="text-lg sm:text-xl md:text-lg  text-zinc-700">
          Our team brings deep, cross-sector expertise to every engagement,
          serving clients from a range of industries with precision and insight.
          From personal tax filings and corporate tax planning to bookkeeping
          and financial consulting, we offer a full suite of services under one
          roof—ensuring consistency, accuracy, and efficiency.
        </p>
        <p className="text-lg sm:text-xl md:text-lg  text-zinc-700">
          At Johri CPA, we value transparency and integrity in every
          interaction. Clients appreciate our clear communication, ethical
          approach, and commitment to delivering timely, compliant, and accurate
          results.
        </p>
        <p>
          By leveraging the latest technology, we streamline processes, reduce
          manual effort, and make financial management more convenient.
        </p>
        <p className="text-lg sm:text-xl md:text-lg  text-zinc-700">
          What truly sets us apart is the trust we build. Many of our clients
          have been with us for years, reflecting the long-term relationships we
          nurture through dependable service and lasting impact.
        </p>
      </div>
    </div>
  );
}

export default OurDifference;
