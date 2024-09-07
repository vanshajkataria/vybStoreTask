import React from "react";
import ProfileView from "@/components/profilePage/profileView"

export default function profile() {
  return (
    <>
      <main className="pt-14 lg:pt-28">
        <div className="container mx-auto py-12">
          <ProfileView />
        </div>
      </main>
    </>
  );
}
