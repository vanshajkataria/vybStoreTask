import React from "react";
import AddressView from "@/components/profilePage/addressView"

export default function address() {
  return (
    <>
      <main className="pt-14 lg:pt-28">
        <div className="container mx-auto py-12">
          <AddressView />
        </div>
      </main>
    </>
  );
}
