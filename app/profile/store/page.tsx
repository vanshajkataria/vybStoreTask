import React from "react";
import StoreView from "@/components/profilePage/storeView"

export default function store() {
  return (
    <>
      <main className="pt-14 lg:pt-28">
        <div className="px-[16px] md:px-[40px] lg:px-[70px] xl:px-[120px] 2xl:px-[150px] py-12">
          <StoreView />
        </div>
      </main>
    </>
  );
}
