'use client'
import React from "react";
import PayoutCalculator from "@/components/LowLevelComponents/payoutCalculator"

export default function payout() {
  return (
    <>
      <div className="container mx-auto py-12">
        {/* sectionHeading */}
        <h1 className="text-h3m md:text-h3 font-bold pb-4 text-center">ESTIMATE EARNING POTENTIAL</h1>
        {/* sectionHeadingEnd */}
        {/* Estimator */}
        <PayoutCalculator />
      </div>
    </>
  );
}
