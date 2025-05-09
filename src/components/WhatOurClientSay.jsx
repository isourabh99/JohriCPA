import React from 'react'
import ClientsCard from './ClientsCard';

function WhatOurClientSay() {
const clientsCards = [
  {
    src: `https://ui-avatars.com/api/?name=Sumiti+Misra&background=random&color=ffffff&bold=true`,
    rating: 5,
    desc: `I have been going to Rajiv Johri for years and I am always impressed with the accounting services that I receive. Rajiv is quick, thorough, and helpful. Being able to complete services virtually and electronically makes the process stress free! Thanks for all of your help.`,
    client: "Sumiti Misra",
    time: `1 year ago`,
  },
  {
    src: `https://ui-avatars.com/api/?name=Zakir+Chandiwala&background=random&color=ffffff&bold=true`,
    rating: 5,
    desc: `JohriCPA provides exceptional services – Their professionalism and attention to detail makes them a top choice for anyone seeking reliable accounting services!`,
    client: "Zakir Chandiwala",
    time: `1 year ago`,
  },
  {
    src: `https://ui-avatars.com/api/?name=Sarfraj+Bhai&background=random&color=ffffff&bold=true`,
    rating: 5,
    desc: `I have been a loyal client of JohriCPA for several years, and I can confidently say that this accounting firm's services are nothing short of exceptional. JohriCPA has consistently demonstrated a commitment to excellence that has made managing my finances a stress-free experience.`,
    client: "Sarfraj Bhai",
    time: `1 year ago`,
  },
  {
    src: `https://ui-avatars.com/api/?name=Sehaj+Bhatia&background=random&color=ffffff&bold=true`,
    rating: 5,
    desc: `Great service provided. Quick to help and answer queries, provided meticulous details of all the work done.`,
    client: "Sehaj Bhatia",
    time: `2 months ago`,
  },
];


  return (
    <div className="px-6 md:px-24 py-10 my-10">
      <h1 className="text-[#0a56ab] text-center  font-semibold text-2xl md:text-3xl">
        Success Stories
      </h1>
      <p className=" text-center font-semibold md:text-xl mb-10 mt-4">
        From our satisfied clients
      </p>
      <div className="flex justify-between items-center flex-col md:flex-row w-full">
        {clientsCards.map((card, idx) => (
          <ClientsCard
            key={idx}
            src={card.src}
            rating={card.rating}
            client={card.client}
            desc={card.desc}
            time={card.time}
          />
        ))}
      </div>
    </div>
  );
}

export default WhatOurClientSay