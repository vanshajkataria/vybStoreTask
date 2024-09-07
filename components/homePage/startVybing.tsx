/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import Image from "next/image";
import React, { useRef } from "react";
import image1 from "@/assets/3D-1.png";
import image2 from "@/assets/3D-2.png";
import image3 from "@/assets/3D-3.png";
import image4 from "@/assets/3D-4.png";

export default function startVybing() {
  const ref = useRef(null);
  return (
    <>
      <section className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" ref={ref}>
          {/* main block */}
          <div className="bg-primary p-6 text-tertiaryText rounded-2xl w-full md:w-3/4 mx-auto h-fit md:sticky md:top-48">
            <h3 className="text-[18px] md:text-[27px] font-bold">
              Start Vybing with us!
            </h3>
            <p className="text-[16px] md:text-[18px] font-medium py-4">
              &quot;We help influencers make money by monetizing their travel
              plans, merchandise, and digital goods and many more.&quot;
            </p>
            <span className="text-primaryText bg-tertiary p-2 rounded-xl">
              Join Us
            </span>
          </div>
          {/* main block end */}
          <div className="grid grid-cols-1 gap-6">
            {/* 1 */}
            <div className="flex gap-4">
              <div className="flex-col flex justify-items-center items-center">
                <span className="bg-primary px-4 py-3 text-secondary font-black rounded-lg">
                  1
                </span>
                <span className="w-0.5 h-full bg-secondaryText"></span>
              </div>
              <div className="bg-secondary text-primaryText p-6 rounded-2xl">
                <h3 className="text-[16px] md:text-[22px] font-bold">
                  Sign Up and create your own store hassle-free.
                </h3>
                <p className="text-[14px] md:text-[16px] font-medium py-4">
                  Join us via google signin and verify your influencer status by
                  entering you social media Id and unlock your store{" "}
                  <span className="font-bold">@ zero cost</span>.
                </p>
                <div className="flex justify-center items-center">
                  <Image src={image1} alt="..." width={250} />
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="flex gap-4">
              <div className="flex-col flex justify-items-center items-center">
                <span className="bg-primary px-4 py-3 text-secondary font-black rounded-lg">
                  2
                </span>
                <span className="w-0.5 h-full bg-secondaryText"></span>
              </div>
              <div className="bg-secondary text-primaryText p-6 rounded-2xl">
                <h3 className="text-[16px] md:text-[22px] font-bold">
                  Build & customize your store front.
                </h3>
                <p className="text-[14px] md:text-[16px] font-medium py-4">
                  Simply fill in the details to build your digital store. Once
                  done, start selling your products to your audience.
                </p>
                <div className="flex justify-center items-center">
                  <Image src={image2} alt="..." width={250} />
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="flex gap-4">
              <div className="flex-col flex justify-items-center items-center">
                <span className="bg-primary px-4 py-3 text-secondary font-black rounded-lg">
                  3
                </span>
                <span className="w-0.5 h-full bg-secondaryText"></span>
              </div>
              <div className="bg-secondary text-primaryText p-6 rounded-2xl">
                <h3 className="text-[16px] md:text-[22px] font-bold">
                  Call audience to your store. Easily integrate links into
                  content.
                </h3>
                <p className="text-[14px] md:text-[16px] font-medium py-4">
                  After setting up your products, its time to go public. Put
                  your store link in insta bio and lets make first post together
                  !
                </p>
                <div className="flex justify-center items-center">
                  <Image src={image3} alt="..." width={250} />
                </div>
              </div>
            </div>
            {/* 4 */}
            <div className="flex gap-4">
              <div className="flex-col flex justify-items-center items-center">
                <span className="bg-primary px-4 py-3 text-secondary font-black rounded-lg">
                  4
                </span>
              </div>
              <div className="bg-secondary text-primaryText p-6 rounded-2xl">
                <h3 className="text-[16px] md:text-[22px] font-bold">
                  &quot;Monetize your influencer status: Earn money adding real
                  value to your true followers!&quot;
                </h3>
                <p className="text-[14px] md:text-[16px] font-medium py-4">
                  Let VYB the money now !! Its here and widthdraw it
                  periodically.
                </p>
                <div className="flex justify-center items-center">
                  <Image src={image4} alt="..." width={250} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
