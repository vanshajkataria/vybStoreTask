import React from "react";
import StoreView from "@/components/profilePage/storeView"

export default function store() {
  return (
    <>
      <main className="pt-14 lg:pt-28">
        <div className="container mx-auto py-12">
          <StoreView />
        </div>
      </main>
    </>
  );
}
