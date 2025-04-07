import React from 'react'
import ClientsCard from './ClientsCard';

function WhatOurClientSay() {
    const clientsCards = [
      {
        src: `https://s3-alpha-sig.figma.com/img/5371/1eff/67b689309eb8138b640562a727188338?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=svJqBSZdtHdAG-6aLbd94K~bpzQQAU4jSGWoM1z2vK-QpLwPhGTm3p48WkF-DDuuIb4CPRrA0wx~RjRYX08~FSDJo5pq5oQIH2zzATOv700vgpz2cVkx3BOlpZNONwiPndSJ6f2w9gLlmrUjCy0Zh2tkFsDPPBBipDkz9wV8v~VkZgzrY3Eb9gSQb5-sjgv1sKKx2ljWyEfblpVjVUmORmt0fA~JIiKzzqjpzZwhsbbP2XqpTXOZ1yJwqmYWXnWtOnbww0yFNHQ~UQvibTYIvo7RcgN1FbHgJWV82Qd8m6rSSUanFUXb9-epXh6fV3qceRffkX-o-tDhaD842yZeFQ__`,
        rating: 3,
        desc: `Manhar and the RMP team are exceptional! They are my go to for all tax related needs. I highly recommend RMP to my personal and professional networks.`,
        client: "Sourabh Soni",
        time: `2 months ago`,
      },
      {
        src: `https://s3-alpha-sig.figma.com/img/5371/1eff/67b689309eb8138b640562a727188338?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=svJqBSZdtHdAG-6aLbd94K~bpzQQAU4jSGWoM1z2vK-QpLwPhGTm3p48WkF-DDuuIb4CPRrA0wx~RjRYX08~FSDJo5pq5oQIH2zzATOv700vgpz2cVkx3BOlpZNONwiPndSJ6f2w9gLlmrUjCy0Zh2tkFsDPPBBipDkz9wV8v~VkZgzrY3Eb9gSQb5-sjgv1sKKx2ljWyEfblpVjVUmORmt0fA~JIiKzzqjpzZwhsbbP2XqpTXOZ1yJwqmYWXnWtOnbww0yFNHQ~UQvibTYIvo7RcgN1FbHgJWV82Qd8m6rSSUanFUXb9-epXh6fV3qceRffkX-o-tDhaD842yZeFQ__`,
        rating: 3,
        desc: `Manhar and the RMP team are exceptional! They are my go to for all tax related needs. I highly recommend RMP to my personal and professional networks.`,
        client: "Sourabh Soni",
        time: `2 months ago`,
      },
      {
        src: `https://s3-alpha-sig.figma.com/img/5371/1eff/67b689309eb8138b640562a727188338?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=svJqBSZdtHdAG-6aLbd94K~bpzQQAU4jSGWoM1z2vK-QpLwPhGTm3p48WkF-DDuuIb4CPRrA0wx~RjRYX08~FSDJo5pq5oQIH2zzATOv700vgpz2cVkx3BOlpZNONwiPndSJ6f2w9gLlmrUjCy0Zh2tkFsDPPBBipDkz9wV8v~VkZgzrY3Eb9gSQb5-sjgv1sKKx2ljWyEfblpVjVUmORmt0fA~JIiKzzqjpzZwhsbbP2XqpTXOZ1yJwqmYWXnWtOnbww0yFNHQ~UQvibTYIvo7RcgN1FbHgJWV82Qd8m6rSSUanFUXb9-epXh6fV3qceRffkX-o-tDhaD842yZeFQ__`,
        rating: 3,
        desc: `Manhar and the RMP team are exceptional! They are my go to for all tax related needs. I highly recommend RMP to my personal and professional networks.`,
        client: "Sourabh Soni",
        time: `2 months ago`,
      },
      {
        src: `https://s3-alpha-sig.figma.com/img/5371/1eff/67b689309eb8138b640562a727188338?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=svJqBSZdtHdAG-6aLbd94K~bpzQQAU4jSGWoM1z2vK-QpLwPhGTm3p48WkF-DDuuIb4CPRrA0wx~RjRYX08~FSDJo5pq5oQIH2zzATOv700vgpz2cVkx3BOlpZNONwiPndSJ6f2w9gLlmrUjCy0Zh2tkFsDPPBBipDkz9wV8v~VkZgzrY3Eb9gSQb5-sjgv1sKKx2ljWyEfblpVjVUmORmt0fA~JIiKzzqjpzZwhsbbP2XqpTXOZ1yJwqmYWXnWtOnbww0yFNHQ~UQvibTYIvo7RcgN1FbHgJWV82Qd8m6rSSUanFUXb9-epXh6fV3qceRffkX-o-tDhaD842yZeFQ__`,
        desc: `Manhar and the RMP team are exceptional! They are my go to for all tax related needs. I highly recommend RMP to my personal and professional networks.`,
        rating: 3,
        client: "Sourabh Soni",
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