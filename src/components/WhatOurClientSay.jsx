import React from 'react'
import ClientsCard from './ClientsCard';

function WhatOurClientSay() {
    const clientsCards = [
      {
        src: `https://i.pinimg.com/474x/e7/33/8a/e7338a374bb3d7f83f1b0e90b836b144.jpg`,
        rating: 3,
        desc: `Manhar and the RMP team are exceptional! They are my go to for all tax related needs. I highly recommend RMP to my personal and professional networks.`,
        client: "Neha Patel",
        time: `2 months ago`,
      },
      {
        src: `https://i.pinimg.com/474x/ca/8a/ca/ca8acae43c6cd08b09f5c66f90abed71.jpg`,
        rating: 2,
        desc: `Manhar and the RMP team are exceptional! They are my go to for all tax related needs. I highly recommend RMP to my personal and professional networks.`,
        client: "Sourabh Soni",
        time: `6 months ago`,
      },
      {
        src: `https://i.pinimg.com/474x/b5/55/02/b555027a561b8955c445ce8fec67c346.jpg`,

        rating: 4,
        desc: `Manhar and the RMP team are exceptional! They are my go to for all tax related needs. I highly recommend RMP to my personal and professional networks.`,
        client: "Priya Mehta",
        time: `2 months ago`,
      },
      {
        src: `https://i.pinimg.com/474x/8d/95/03/8d9503a77e4c21ebf0ced6c252819a0e.jpg`,
        desc: `Manhar and the RMP team are exceptional! They are my go to for all tax related needs. I highly recommend RMP to my personal and professional networks.`,
        rating: 5,
        client: "Arjun Nair",
        time: `2 months ago`,
      },
    ];
  return (
    <div className="px-2 md:px-24 py-10 my-10">
      <h1 className="text-[#0a56ab] text-center  font-semibold text-2xl md:text-3xl">
        What Our Clients Say
      </h1>
      <p className=" text-center font-semibold md:text-xl mb-10 mt-4">
        Hear more from our satisfied clients
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