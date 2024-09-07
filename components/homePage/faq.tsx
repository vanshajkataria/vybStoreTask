import React from "react";
import FAQDropdown from "@/components/LowLevelComponents/faqDropdown"

export default function faq() {
  return (
    <>
      <div className="container mx-auto flex flex-col justify-center items-center gap-6 py-12">
        <div>
          <h3 className="text-[18px] md:text-[27px] font-bold">FREQUENTLY ASKED QUESTIONS</h3>
        </div>
        <div className="text-[16px] md:text-[18px] font-medium text-center">
          <p>
            Quick answers to questions you may have. Can&apos;t find what you&apos;re
            looking for?
          </p>
          <p>Check out our full documentation</p>
        </div>
        <div className="w-full"><FAQDropdown /></div>
      </div>
    </>
  );
}
