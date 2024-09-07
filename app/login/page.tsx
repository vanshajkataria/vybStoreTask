import React from "react";
import LoginForm from "@/components/loginPage/loginForm";

export default function login() {
  return (
    <>
      <main className="pt-14 lg:pt-28">
        <div className="container mx-auto py-12">
          <LoginForm />
        </div>
      </main>
    </>
  );
}
