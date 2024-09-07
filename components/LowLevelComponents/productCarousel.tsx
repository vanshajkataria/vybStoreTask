/* eslint-disable no-var */
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import delhi from "@/assets/delhi.png";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };
  return (
    <Slider {...settings}>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:p-12 gap-12">
          <div className="flex flex-col justify-between gap-12">
            <div>
              <h1 className="text-h1m md:text-h1 font-bold">Delhi Itinerary</h1>
              <p className="text-p2m md:text-p2">
                Delhi, India&apos;s capital territory, is a massive metropolitan
                area in the country&apos;s north. In Old Delhi, a neighborhood
                dating to the 1600s, stands the imposing Mughal-era Red Fort, a
                symbol of India, and the sprawling Jama Masjid mosque, whose
                courtyard accommodates 25,000 people.
              </p>
            </div>
            <div className="flex justify-center md:justify-start items-center gap-6">
              <div className="border border-primary text-primary px-4 py-2 rounded-2xl w-fit">
                <span>Rs. 349</span>
              </div>
              <div className="border border-primary text-[#fff] bg-primary px-4 py-2 rounded-2xl w-fit">
                <span>More</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
            <Image src={delhi} alt="..." />
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:p-12 gap-12">
          <div className="flex flex-col justify-between gap-12">
            <div>
              <h1 className="text-h1m md:text-h1 font-bold">Delhi Itinerary</h1>
              <p className="text-p2m md:text-p2">
                Delhi, India&apos;s capital territory, is a massive metropolitan
                area in the country&apos;s north. In Old Delhi, a neighborhood
                dating to the 1600s, stands the imposing Mughal-era Red Fort, a
                symbol of India, and the sprawling Jama Masjid mosque, whose
                courtyard accommodates 25,000 people.
              </p>
            </div>
            <div className="flex justify-center md:justify-start items-center gap-6">
              <div className="border border-primary text-primary px-4 py-2 rounded-2xl w-fit">
                <span>Rs. 349</span>
              </div>
              <div className="border border-primary text-[#fff] bg-primary px-4 py-2 rounded-2xl w-fit">
                <span>More</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
            <Image src={delhi} alt="..." />
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:p-12 gap-12">
          <div className="flex flex-col justify-between gap-12">
            <div>
              <h1 className="text-h1m md:text-h1 font-bold">Delhi Itinerary</h1>
              <p className="text-p2m md:text-p2">
                Delhi, India&apos;s capital territory, is a massive metropolitan
                area in the country&apos;s north. In Old Delhi, a neighborhood
                dating to the 1600s, stands the imposing Mughal-era Red Fort, a
                symbol of India, and the sprawling Jama Masjid mosque, whose
                courtyard accommodates 25,000 people.
              </p>
            </div>
            <div className="flex justify-center md:justify-start items-center gap-6">
              <div className="border border-primary text-primary px-4 py-2 rounded-2xl w-fit">
                <span>Rs. 349</span>
              </div>
              <div className="border border-primary text-[#fff] bg-primary px-4 py-2 rounded-2xl w-fit">
                <span>More</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
            <Image src={delhi} alt="..." />
          </div>
        </div>
      </div>
    </Slider>
  );
}
