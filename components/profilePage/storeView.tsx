import React from "react";
import ProfileBlock from "@/components/LowLevelComponents/profileBlock";
import Image from "next/image";
import banner from "@/assets/profileBanner.png";

export default function storeView() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 grid-row-2 gap-6">
        <div className="md:col-span-1 md:row-span-1 flex justify-center items-center border border-primaryText px-3 py-6 rounded-2xl">
          <ProfileBlock />
        </div>
        <div className="md:col-span-2 md:row-span-2 border border-primaryText p-6 rounded-2xl">
          <div>
            <h1 className="text-h1m md:text-h1 font-bold">Creator Store</h1>
          </div>
          <div>
            <Image src={banner} alt="..." height={105} />{" "}
            <div className="flex items-center pb-4 gap-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </span>
              <span className="text-ctam md:text-cta">
                Change Profile Picture
              </span>
            </div>
          </div>
          <div>
            <h4 className="text-h4m md:text-h4 font-bold">
              Link Social Media Account
            </h4>
            <div className="flex flex-col gap-2 pb-4">
              <div className="border border-primaryText p-1 w-fit rounded-xl flex items-center gap-2 px-4">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="32"
                    height="32"
                    viewBox="0 0 48 48"
                  >
                    <radialGradient
                      id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                      cx="19.38"
                      cy="42.035"
                      r="44.899"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#fd5"></stop>
                      <stop offset=".328" stop-color="#ff543f"></stop>
                      <stop offset=".348" stop-color="#fc5245"></stop>
                      <stop offset=".504" stop-color="#e64771"></stop>
                      <stop offset=".643" stop-color="#d53e91"></stop>
                      <stop offset=".761" stop-color="#cc39a4"></stop>
                      <stop offset=".841" stop-color="#c837ab"></stop>
                    </radialGradient>
                    <path
                      fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                      d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                    ></path>
                    <radialGradient
                      id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                      cx="11.786"
                      cy="5.54"
                      r="29.813"
                      gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#4168c9"></stop>
                      <stop
                        offset=".999"
                        stopColor="#4168c9"
                        stopOpacity="0"
                      ></stop>
                    </radialGradient>
                    <path
                      fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                      d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                    ></path>
                    <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
                    <path
                      fill="#fff"
                      d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                    ></path>
                  </svg>
                </span>
                <div className="border border-primaryText p-1 w-fit rounded-xl">
                  <span>Followers Count</span>
                </div>
                <div className="border border-primaryText p-1 w-fit rounded-xl">
                  <span>Instagram I&apos;D</span>
                </div>
              </div>
              <div className="border border-primaryText p-1 w-fit rounded-xl flex items-center gap-2 px-4">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="32"
                    height="32"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#FF3D00"
                      d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
                    ></path>
                    <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                  </svg>
                </span>
                <div className="border border-primaryText p-1 w-fit rounded-xl">
                  <span>Followers Count</span>
                </div>
                <div className="border border-primaryText p-1 w-fit rounded-xl">
                  <span>YouTube I&apos;D</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="storeURL"
                className="text-h4m md:text-h4 font-bold"
              >
                Claim Your Store URL
              </label>
              <input
                type="text"
                name="storeURL"
                id="storeURL"
                className="p-2 border border-primaryText outline-none rounded-xl"
                placeholder="Username for store"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="genre" className="text-h4m md:text-h4 font-bold">
                Select Genre
              </label>
              <input
                type="text"
                name="genre"
                id="genre"
                className="p-2 border border-primaryText outline-none rounded-xl"
                placeholder="Enter Your Genre"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="bankDetails"
                className="text-h4m md:text-h4 font-bold"
              >
                Add Your Bank Details
              </label>
              <input
                type="text"
                name="bankDetails"
                id="bankDetails"
                className="p-2 border border-primaryText outline-none rounded-xl"
                placeholder="xxxx-xxxx-xxxx-xxxx"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="panDetails"
                className="text-h4m md:text-h4 font-bold"
              >
                Add PAN Card Number
              </label>
              <input
                type="text"
                name="panDetails"
                id="panDetails"
                className="p-2 border border-primaryText outline-none rounded-xl"
                placeholder="xxxxxxxx"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="gstInvoice"
                className="text-h4m md:text-h4 font-bold"
              >
                GST Invoicing
              </label>
              <input
                type="text"
                name="gstInvoice"
                id="gstInvoice"
                className="p-2 border border-primaryText outline-none rounded-xl"
                placeholder="xxxxxxxxxxxx"
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
