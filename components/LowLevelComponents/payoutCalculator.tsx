/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";

export default function payoutCalculator() {
  const [followerValue, setFollowerValue] = useState(10);
  const [productValue, setProductValue] = useState(1);

  const handleFollowerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFollowerValue(Number(event.target.value));
  };
  const handleProductChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductValue(Number(event.target.value));
  };
  return (
    <>
      <div>
        <div className="flex flex-col pb-6">
          <label
            htmlFor="influencerDropdown"
            className="text-p1m md:text-p1 pb-4"
          >
            What kind of influencer are you?
          </label>
          <select
            name="influencerDropdown"
            id="influencerDropdown"
            className="outline-none appearance-none p-2 w-full md:w-1/2"
          >
            <option
              value="select"
              disabled
              selected
              className="text-secondaryText"
            >
              Select influencer type?
            </option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advance">Advance</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full">
            <label htmlFor="followerRange">
              How many followers do you have?
            </label>
            <div className="w-full pt-4">
              <input
                type="range"
                min="10"
                max="1000000"
                value={followerValue}
                className="w-full h-3 bg-gray-300 rounded-lg appearance-none cursor-pointer transition-opacity duration-200 hover:opacity-100 focus:outline-none"
                id="followerRange"
                onChange={handleFollowerChange}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-p1m md:text-p1 font-semibold">Monthly Earning</p>
            <span className="text-h3m md:text-h3 font-semibold">₹ {followerValue}</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full">
            <label htmlFor="productRange">
            How many products do you list monthly?
            </label>
            <div className="w-full pt-4">
              <input
                type="range"
                min="1"
                max="100"
                value={productValue}
                className="w-full h-3 bg-gray-300 rounded-lg appearance-none cursor-pointer transition-opacity duration-200 hover:opacity-100 focus:outline-none"
                id="productRange"
                onChange={handleProductChange}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-p1m md:text-p1 font-semibold">Yearly Earning</p>
            <span className="text-h3m md:text-h3 font-semibold">₹ {productValue}</span>
          </div>
        </div>
        <div className="w-fit mx-auto mt-12 bg-primary px-4 py-2 text-[#fff] rounded-xl">
            <span>Calculate</span>
        </div>
      </div>
    </>
  );
}
