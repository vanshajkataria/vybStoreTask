import React from "react";
import ProfileBlock from "@/components/LowLevelComponents/profileBlock";
import Image from "next/image";
import graph from "@/assets/graph.png";

export default function earningsView() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 grid-row-2 gap-6">
        <div className="md:col-span-1 md:row-span-1 flex justify-center items-center border border-primaryText px-3 py-6 rounded-2xl">
          <ProfileBlock />
        </div>
        <div className="justify-start md:col-span-2 md:row-span-2 border border-primaryText p-6 rounded-2xl">
          <div className="flex flex-col justify-start  gap-4">
            <div className="flex justify-start items-center gap-4">
              <div className="px-4 py-2 border border-primary rounded-xl w-fit bg-primary text-[#fff]">
                <span>Daily</span>
              </div>
              <div className="px-4 py-2 border border-primary rounded-xl w-fit">
                <span>Monthly</span>
              </div>
              <div className="px-4 py-2 border border-primary rounded-xl w-fit">
                <span>Till Date</span>
              </div>
              <div className="px-4 py-2 border border-primary rounded-xl w-fit">
                <span>All</span>
              </div>
            </div>
            <div>
              <Image src={graph} alt="..." />
            </div>
            <div>
            <h3 className="text-h3m md:text-h3 font-bold">Withdraw History</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
