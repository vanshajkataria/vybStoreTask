import Image from "next/image";
import React from "react";
import travel from "@/assets/travel.png";
import merch from "@/assets/merch.png";
import digital from "@/assets/digital.png";
import fashion from "@/assets/fashion.png";

export default function heroInfo() {
  return (
    <>
      {/* heroSectionInfo */}
      <div className="bg-[#FFF] drop-shadow-2xl rounded-2xl p-6">
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-primaryText text-center"> */}
        <div className="flex flex-wrap justify-around items-center text-center gap-6">
          <div className="flex flex-col justify-center items-center gap-6">
            <div className="bg-[#DBFFD6] rounded-full w-[110px] h-[110px] overflow-hidden">
              <Image src={travel} alt="" />
            </div>
            <h2 className="text-[20px] md:text-[32px] font-bold">
              Travel Itinerary
            </h2>
          </div>
          <span className="hidden lg:flex h-32 w-0.5 bg-[#000]"></span>
          <div className="flex flex-col justify-center items-center gap-6">
            <div className="bg-[#FFD4D2A6] rounded-full w-[110px] h-[110px] overflow-hidden">
              <Image src={merch} alt="" />
            </div>
            <h2 className="text-[20px] md:text-[32px] font-bold">
              Custom Merchandise
            </h2>
          </div>
          <span className="hidden lg:flex h-32 w-0.5 bg-[#000]"></span>
          <div className="flex flex-col justify-center items-center gap-6">
            <div className="bg-[#FFEFBC] rounded-full w-[110px] h-[110px] overflow-hidden">
              <Image src={digital} alt="" />
            </div>
            <h2 className="text-[20px] md:text-[32px] font-bold">
              Digital Content
            </h2>
          </div>
          <span className="hidden lg:flex h-32 w-0.5 bg-[#000]"></span>
          <div className="flex flex-col justify-center items-center gap-6">
            <div className="bg-[#FFEFBC] rounded-full w-[110px] h-[110px] overflow-hidden">
              <Image src={fashion} alt="" />
            </div>
            <h2 className="text-[20px] md:text-[32px] font-bold">
              Fashion Brands
            </h2>
          </div>
        </div>
      </div>
      {/* heroSectionInfoEnd */}
    </>
  );
}
