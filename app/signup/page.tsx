import React from "react";
import SignupForm from "@/components/signupPage/signupForm";

export default function signup() {
  return (
    <>
      <main className="pt-14 lg:pt-28">
        <div className="container mx-auto py-12">
          <SignupForm />
        </div>
      </main>
    </>
  );
}
