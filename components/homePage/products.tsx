'use client'
import React from "react";
import ProductsCarousel from "@/components/LowLevelComponents/productCarousel";

export default function products() {
  return (
    <>
      <div className="px-[16px] md:px-[40px] lg:px-[70px] xl:px-[120px] 2xl:px-[150px] py-12">
        {/* sectionHeading */}
        <h1 className="text-[24px] md:text-[40px] font-bold pb-4">Products</h1>
        {/* sectionHeadingEnd */}
        {/* carouserl */}
        <ProductsCarousel />
      </div>
    </>
  );
}
