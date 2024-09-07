import React from "react";
import ProfileBlock from "@/components/LowLevelComponents/profileBlock";

export default function profileView() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 grid-row-2 gap-6">
        <div className="md:col-span-1 md:row-span-1 flex justify-center items-center border border-primaryText px-3 py-6 rounded-2xl">
          <ProfileBlock />
        </div>
        <div className="md:col-span-2 md:row-span-2 border border-primaryText p-6 rounded-2xl">
          <div>
            <h1 className="text-h1m md:text-h1 font-bold">Address</h1>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="addressLine1"
                className="text-h4m md:text-h4 font-bold"
              >
                Address Line 1
              </label>
              <input
                type="text"
                name="addressLine1"
                id="addressLine1"
                className="p-2 border border-primaryText outline-none rounded-xl"
                placeholder="Enter Address"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="addressLine2"
                className="text-h4m md:text-h4 font-bold"
              >
                Address Line 2
              </label>
              <input
                type="text"
                name="addressLine2"
                id="addressLine2"
                className="p-2 border border-primaryText outline-none rounded-xl"
                placeholder="Enter Address"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="zipCode"
                  className="text-h4m md:text-h4 font-bold"
                >
                  Zip Code
                </label>
                <input
                  type="text"
                  name="zipCode"
                  id="zipCode"
                  className="p-2 border border-primaryText outline-none rounded-xl"
                  placeholder="Enter Zip Code"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="city"
                  className="text-h4m md:text-h4 font-bold"
                >
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="p-2 border border-primaryText outline-none rounded-xl"
                  placeholder="Enter City"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="state"
                  className="text-h4m md:text-h4 font-bold"
                >
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  className="p-2 border border-primaryText outline-none rounded-xl"
                  placeholder="Enter State"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="country"
                  className="text-h4m md:text-h4 font-bold"
                >
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  className="p-2 border border-primaryText outline-none rounded-xl"
                  placeholder="Enter Country"
                />
              </div>
            </div>
          </div>
          <div className="pt-4">
            <div className="w-1/4 text-center border border-primaryText rounded-2xl p-2 bg-primary text-secondary">
              <span>Save</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
