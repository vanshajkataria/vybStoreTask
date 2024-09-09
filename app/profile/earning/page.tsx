import React from "react";
import EarningsView from "@/components/profilePage/earningsView"

export default function earnings() {
  return (
    <>
      <main className="pt-14 lg:pt-28">
        <div className="container mx-auto py-12">
          <EarningsView />
        </div>
      </main>
    </>
  );
}
