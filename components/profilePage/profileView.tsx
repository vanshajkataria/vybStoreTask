import React from "react";
import ProfileBlock from "@/components/LowLevelComponents/profileBlock"

export default function profileView() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 grid-row-2 gap-6">
        <div className="md:col-span-1 md:row-span-1 flex justify-center items-center border border-primaryText px-3 py-6 rounded-2xl">
          <ProfileBlock />
        </div>
        <div className="md:col-span-2 md:row-span-2 border border-primaryText p-6 rounded-2xl">
          <div>
            <h1 className="text-h1m md:text-h1 font-bold">Profile</h1>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="userName"
                className="text-h4m md:text-h4 font-bold"
              >
                User Name
              </label>
              <input
                type="text"
                name="userName"
                id="userName"
                className="p-2 border border-primaryText outline-none rounded-xl"
                placeholder="Enter User Name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-h4m md:text-h4 font-bold">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="p-2 border border-primaryText outline-none rounded-xl"
                placeholder="Enter Email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-h4m md:text-h4 font-bold"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="p-2 border border-primaryText outline-none rounded-xl"
                placeholder="Enter Password"
              />
              <span className="text-right text-ctam md:text-cta text-primary cursor-pointer font-semibold">
                Reset your password
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-h4m md:text-h4 font-bold">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="p-2 border border-primaryText outline-none rounded-xl"
                placeholder="Enter Phone Number"
              />
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
