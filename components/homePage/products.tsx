'use client'
import React from "react";
import ProductsCarousel from "@/components/LowLevelComponents/productCarousel";

export default function products() {
  return (
    <>
      <div className="container mx-auto py-12">
        {/* sectionHeading */}
        <h1 className="text-[24px] md:text-[40px] font-bold pb-4">Products</h1>
        {/* sectionHeadingEnd */}
        {/* carouserl */}
        <ProductsCarousel />
      </div>
    </>
  );
}
