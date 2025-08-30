import React from "react";
import { FaBullseye, FaEye, FaUsers } from "react-icons/fa";

const sections = [
  {
    icon: <FaBullseye size={28} className="text-[#0a56ab]" />,
    title: "Our Mission",
    desc: `At Johri CPA, our mission is to empower clients with financial clarity and confidence through proactive planning, ethical guidance, and personalized service. We strive to be more than accountants—we aim to be trusted advisors in every financial decision.`,
  },
  {
    icon: <FaEye size={28} className="text-[#0a56ab]" />,
    title: "Our Vision",
    desc: `We envision a future where every business owner and individual has access to trustworthy, forward-thinking financial guidance. Through innovation and deep relationships, we aim to simplify the complexities of finance and help our clients grow with confidence.`,
  },
  {
    icon: <FaUsers size={28} className="text-[#0a56ab]" />,
    title: "Meet the Team",
    desc: `Our team is made up of seasoned CPAs, tax advisors, and financial professionals who bring years of experience and a client-first mindset. We believe great service starts with great people—committed, approachable, and knowledgeable.`,
  },
];

function MissionVisionTeam() {
  return (
    <section className="bg-white px-6 lg:px-24 py-16 w-full">
      <div className="grid md:grid-cols-3 gap-8">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-2xl border-t-4 border-[#0a56ab] p-6 transition-transform hover:-translate-y-2 duration-300"
          >
            <div className="mb-4">{section.icon}</div>
            <h3 className="text-xl font-semibold text-[#0a56ab] mb-2">
              {section.title}
            </h3>
            <p className="text-zinc-700 text-base leading-relaxed">
              {section.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MissionVisionTeam;
