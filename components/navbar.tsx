"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/assets/logo.gif";
import hamburger from "@/assets/Vector.svg";
import close from "@/assets/close.svg";
import AccDropdown from "@/components/LowLevelComponents/accountDropdown";
import Link from "next/link";

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isActive, setActive] = useState(false);
  const toggleHamburger = () => {
    setActive(!isActive);
  };
  return (
    <>
      <div className="px-[16px] md:px-[40px] lg:px-[70px] xl:px-[120px] 2xl:px-[150px] fixed left-0 right-0 pt-[12px] z-40">
        <div className="px-6 py-2 rounded-full flex justify-between items-center gap-[60px] bg-secondary/45 glass-blur">
          <Link href="/">
            <Image src={logo} alt="VYB Store Logo" width={100} />
          </Link>
          {/* search bar */}
          <div className="relative">
            <input
              type="search"
              name="search"
              id="search"
              className="bg-tertiaryText w-[290px] rounded-2xl flex items-center gap-1 py-2 pr-2 pl-8"
              placeholder="Search"
            />
            <label
              htmlFor="search"
              className="flex items-center gap-1 absolute left-1 top-2.5"
            >
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
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </span>
            </label>
          </div>
          {/* search bar end */}
          {/* navbar items */}
          <div className="hidden lg:flex justify-between items-center flex-grow">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1">
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
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                </span>
                Cart
              </div>
              <div className="flex items-center gap-1">
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
                      d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                    />
                  </svg>
                </span>
                About
              </div>
              <div className="flex items-center gap-1">
                <span>
                  <svg
                    width="18"
                    height="19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth="0.2"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      d="M14.7727 3.27031C14.025 2.51514 13.1357 1.91486 12.1558 1.50383C11.1758 1.09281 10.1244 0.879121 9.06172 0.875H9C6.84512 0.875 4.77849 1.73102 3.25476 3.25476C1.73102 4.77849 0.875 6.84512 0.875 9V13.375C0.875 13.8723 1.07254 14.3492 1.42417 14.7008C1.77581 15.0525 2.25272 15.25 2.75 15.25H4C4.49728 15.25 4.9742 15.0525 5.32583 14.7008C5.67746 14.3492 5.875 13.8723 5.875 13.375V10.25C5.875 9.75272 5.67746 9.27581 5.32583 8.92417C4.9742 8.57254 4.49728 8.375 4 8.375H2.15313C2.27366 7.07182 2.76315 5.83 3.56424 4.79508C4.36532 3.76016 5.44481 2.97502 6.67617 2.53169C7.90753 2.08836 9.23975 2.0052 10.5167 2.29196C11.7936 2.57872 12.9624 3.22352 13.8859 4.15078C15.0148 5.28539 15.7091 6.78052 15.8477 8.375H14C13.5027 8.375 13.0258 8.57254 12.6742 8.92417C12.3225 9.27581 12.125 9.75272 12.125 10.25V13.375C12.125 13.8723 12.3225 14.3492 12.6742 14.7008C13.0258 15.0525 13.5027 15.25 14 15.25H15.875C15.875 15.7473 15.6775 16.2242 15.3258 16.5758C14.9742 16.9275 14.4973 17.125 14 17.125H9.625C9.45924 17.125 9.30027 17.1908 9.18306 17.3081C9.06585 17.4253 9 17.5842 9 17.75C9 17.9158 9.06585 18.0747 9.18306 18.1919C9.30027 18.3092 9.45924 18.375 9.625 18.375H14C14.8288 18.375 15.6237 18.0458 16.2097 17.4597C16.7958 16.8737 17.125 16.0788 17.125 15.25V9C17.1291 7.93717 16.9234 6.88398 16.5197 5.90077C16.1161 4.91757 15.5224 4.02368 14.7727 3.27031ZM4 9.625C4.16576 9.625 4.32473 9.69085 4.44194 9.80806C4.55915 9.92527 4.625 10.0842 4.625 10.25V13.375C4.625 13.5408 4.55915 13.6997 4.44194 13.8169C4.32473 13.9342 4.16576 14 4 14H2.75C2.58424 14 2.42527 13.9342 2.30806 13.8169C2.19085 13.6997 2.125 13.5408 2.125 13.375V9.625H4ZM14 14C13.8342 14 13.6753 13.9342 13.5581 13.8169C13.4408 13.6997 13.375 13.5408 13.375 13.375V10.25C13.375 10.0842 13.4408 9.92527 13.5581 9.80806C13.6753 9.69085 13.8342 9.625 14 9.625H15.875V14H14Z"
                      fill="#404040"
                    />
                  </svg>
                </span>
                Contact
              </div>

              <Link href="/profile">
                <div className="flex items-center gap-1">
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
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                  </span>
                  Profile
                </div>
              </Link>
            </div>
            <div>
              {!loggedIn ? (
                <Link
                  href="/login"
                  className="border border-primaryText p-2 rounded-2xl"
                  onClick={() => setLoggedIn(false)}
                >
                  <span>Login</span>
                </Link>
              ) : (
                <div className="relative">
                  <AccDropdown />
                </div>
              )}
            </div>
          </div>
          {/* navbar items end */}
          {/* hamburger icon */}
          <div className="block lg:hidden" onClick={toggleHamburger}>
            <Image src={hamburger} alt="Hamburger Menu" height={48} />
          </div>
          {/* hamburger icon end*/}
        </div>
      </div>
      <div>
        <div
          className={`z-[100] lg:hidden fixed top-0 right-0 w-3/4 h-screen bg-secondary/45 glass-blur transition-all duration-300 ease-in-out overflow-hidden ${
            isActive ? "-translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-12">
            <div className="flex justify-end" onClick={toggleHamburger}>
              <Image src={close} alt="Hamburger Menu" height={48} />
            </div>
            <div className="flex flex-col justify-center h-full gap-6 ">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-1">
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
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                  </span>
                  Cart
                </div>
                <div className="flex items-center gap-1">
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
                        d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                      />
                    </svg>
                  </span>
                  About
                </div>
                <div className="flex items-center gap-1">
                  <span>
                    <svg
                      width="18"
                      height="19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      strokeWidth="0.2"
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        d="M14.7727 3.27031C14.025 2.51514 13.1357 1.91486 12.1558 1.50383C11.1758 1.09281 10.1244 0.879121 9.06172 0.875H9C6.84512 0.875 4.77849 1.73102 3.25476 3.25476C1.73102 4.77849 0.875 6.84512 0.875 9V13.375C0.875 13.8723 1.07254 14.3492 1.42417 14.7008C1.77581 15.0525 2.25272 15.25 2.75 15.25H4C4.49728 15.25 4.9742 15.0525 5.32583 14.7008C5.67746 14.3492 5.875 13.8723 5.875 13.375V10.25C5.875 9.75272 5.67746 9.27581 5.32583 8.92417C4.9742 8.57254 4.49728 8.375 4 8.375H2.15313C2.27366 7.07182 2.76315 5.83 3.56424 4.79508C4.36532 3.76016 5.44481 2.97502 6.67617 2.53169C7.90753 2.08836 9.23975 2.0052 10.5167 2.29196C11.7936 2.57872 12.9624 3.22352 13.8859 4.15078C15.0148 5.28539 15.7091 6.78052 15.8477 8.375H14C13.5027 8.375 13.0258 8.57254 12.6742 8.92417C12.3225 9.27581 12.125 9.75272 12.125 10.25V13.375C12.125 13.8723 12.3225 14.3492 12.6742 14.7008C13.0258 15.0525 13.5027 15.25 14 15.25H15.875C15.875 15.7473 15.6775 16.2242 15.3258 16.5758C14.9742 16.9275 14.4973 17.125 14 17.125H9.625C9.45924 17.125 9.30027 17.1908 9.18306 17.3081C9.06585 17.4253 9 17.5842 9 17.75C9 17.9158 9.06585 18.0747 9.18306 18.1919C9.30027 18.3092 9.45924 18.375 9.625 18.375H14C14.8288 18.375 15.6237 18.0458 16.2097 17.4597C16.7958 16.8737 17.125 16.0788 17.125 15.25V9C17.1291 7.93717 16.9234 6.88398 16.5197 5.90077C16.1161 4.91757 15.5224 4.02368 14.7727 3.27031ZM4 9.625C4.16576 9.625 4.32473 9.69085 4.44194 9.80806C4.55915 9.92527 4.625 10.0842 4.625 10.25V13.375C4.625 13.5408 4.55915 13.6997 4.44194 13.8169C4.32473 13.9342 4.16576 14 4 14H2.75C2.58424 14 2.42527 13.9342 2.30806 13.8169C2.19085 13.6997 2.125 13.5408 2.125 13.375V9.625H4ZM14 14C13.8342 14 13.6753 13.9342 13.5581 13.8169C13.4408 13.6997 13.375 13.5408 13.375 13.375V10.25C13.375 10.0842 13.4408 9.92527 13.5581 9.80806C13.6753 9.69085 13.8342 9.625 14 9.625H15.875V14H14Z"
                        fill="#404040"
                      />
                    </svg>
                  </span>
                  Contact
                </div>
                <Link href="/profile">
                  <div className="flex items-center gap-1">
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
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                    </span>
                    Profile
                  </div>
                </Link>
              </div>
              <div>
                {!loggedIn ? (
                  <Link
                    href="/login"
                    className="border border-primaryText p-2 rounded-2xl"
                    onClick={() => setLoggedIn(false)}
                  >
                    <span>Login</span>
                  </Link>
                ) : (
                  <div className="relative">
                    <AccDropdown />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
