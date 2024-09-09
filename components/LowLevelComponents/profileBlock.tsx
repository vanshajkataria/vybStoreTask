import React from "react";
import Image from "next/image";
import user from "@/assets/user.png";
import Link from "next/link";

export default function profileBlock() {
  return (
    <>
      <div>
        <div>
          <Image src={user} alt="..." className="w-full md:w-3/4 mx-auto" />
        </div>
        <div className="flex justify-center items-center gap-2">
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
          <span className="text-p1m md:text-p1">Change Profile Picture</span>
        </div>
        <div>
          <h1 className="text-h1m md:text-h1 font-bold w-full text-center">Samira Hadid</h1>
        </div>
        <div>
          <div className="flex flex-col gap-4">
            <Link href="/profile">
            <div className="w-full text-center border border-primaryText rounded-2xl p-2">
              <span>Profile</span>
            </div>
            </Link>
            <Link href="/profile/store">
            <div className="w-full text-center border border-primaryText rounded-2xl p-2">
              <span>My Store</span>
            </div>
            </Link>
            <Link href="/profile/earning">
            <div className="w-full text-center border border-primaryText rounded-2xl p-2">
              <span>Earnings</span>
            </div>
            </Link>
            <Link href="/profile/address">
            <div className="w-full text-center border border-primaryText rounded-2xl p-2">
              <span>Address</span>
            </div>
            </Link>
            <div className="w-full text-center border border-primaryText rounded-2xl p-2 bg-primary text-secondary">
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
