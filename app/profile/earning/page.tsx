import React from "react";
import EarningsView from "@/components/profilePage/earningsView"

export default function earnings() {
  return (
    <>
      <main className="pt-14 lg:pt-28">
        <div className="px-[16px] md:px-[40px] lg:px-[70px] xl:px-[120px] 2xl:px-[150px] py-12">
          <EarningsView />
        </div>
      </main>
    </>
  );
}
