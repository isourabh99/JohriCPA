import React from 'react'
import Card from "../components/Card";
import accountingcard  from "../assets/accountingcard.jpg"
import businessincorporationcard from "../assets/businessincorporationcard.jpg";
import taxationcard from "../assets/taxationcard.jpg";
import managementcard from "../assets/managementcard.jpg";
function WhoWeServe() {
   const cards = [
     {
       src: accountingcard,
       title: "Accounting",
       desc: "If your current accounting and bookkeeping aren’t working for all your needs, it might be time for a change. A streamlined, professional approach can save time, reduce errors, and provide clearer financial insight.",
       to: "/services/accounting",
     },
     {
       src: businessincorporationcard,
       title: "Business Incorporation",
       desc: "Starting a new business is both exciting and overwhelming. From paperwork to tax planning, we help you incorporate smoothly and set a solid foundation for growth.",
       to: "/services/business-incorporation",
     },
     {
       src: taxationcard,
       title: "Taxation",
       desc: "Whether personal or business, handling taxes can be frustrating and time-consuming. We simplify the process, ensure compliance, and help maximize your returns.",
       to: "/services/taxation",
     },
     {
       src: managementcard,
       title: "Management Consulting",
       desc: "Looking for expert management consulting in Brampton? We offer strategic insights and tailored solutions to help your business operate more efficiently and grow sustainably.",
       to: "/services/management-consulting ",
     },
   ];

  return (
    <div className="bg-[#F3F2F7] py-10 my-10">
      <h1 className="text-[#0a56ab] text-center  font-semibold text-2xl md:text-3xl">
        Who We Serve
      </h1>
      <p className=" text-center font-semibold md:text-xl mb-10 mt-4">
        We’re covering all the accounting fields
      </p>
      <div className="px-2 md:px-24 flex justify-between  flex-col md:flex-row w-full">
        {cards.map((card, idx) => (
          <Card
            key={idx}
            src={card.src}
            title={card.title}
            desc={card.desc}
            to={card.to}
          />
        ))}
      </div>
    </div>
  );
}

export default WhoWeServe