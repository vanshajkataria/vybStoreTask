'use client'
import React from "react";
import ProductsCarousel from "@/components/LowLevelComponents/productCarousel";

export default function products() {
  return (
    <>
      <div className="md:container mx-auto px-12 md:px-0 py-12">
        {/* sectionHeading */}
        <h1 className="text-[24px] md:text-[40px] font-bold pb-4">Products</h1>
        {/* sectionHeadingEnd */}
        {/* carouserl */}
        <ProductsCarousel />
      </div>
    </>
  );
}
