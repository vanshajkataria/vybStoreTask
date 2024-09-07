import React from "react";

export default function heroVideo() {
  return (
    <>
      {/* heroSectionVideo */}
      <div>
        {/* heroSectionVideoWeb */}
        <div className="hidden md:block">
          <video
            src="/heroSectionWeb.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-screen"
          >
            <source src="/heroSectionWeb.mp4" type="video/mp4" />
          </video>
        </div>
        {/* heroSectionVideoWebEnd */}
        {/* heroSectionVideoMobile */}
        <div className="block md:hidden">
          <video
            src="/heroSectionMobile.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-screen"
          >
            <source src="/heroSectionMobile.mp4" type="video/mp4" />
          </video>
        </div>
        {/* heroSectionVideoMobileEnd */}
      </div>
      {/* heroSectionVideoEnd */}
    </>
  );
}
