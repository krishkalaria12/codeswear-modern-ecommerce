import React from "react";
import Link from "next/link";
import Image from "next/image";

function MobileNav({toggleNav, searchVisible, toggle }) {
  return (
    <div className="flex flex-col space-y-2 items-center w-full md:hidden">
      <div className="flex justify-around items-center w-full">
        <div className="w-[230px] items-center">
          <Link href={"/"}>
            <Image
              alt="Codeswear logo"
              className="h-12 w-full mb-4"
              height="60"
              src="/logo.png"
              style={{
                aspectRatio: "120/60",
                objectFit: "cover",
              }}
              width="120"
            />
          </Link>
        </div>
        <div className="-mr-2 flex items-center h-full md:hidden cursor-pointer">
          <button
            className="inline-flex items-center justify-center p-2 rounded-md text-pink-600 hover:text-[#DB2777] hover:bg-gray-100 focus:outline-none  focus:text-[#DB2777] dark:bg-gray-[#DB2777] dark:text-pink-400 dark:hover:bg-pink-800"
            onClick={toggleNav}
          >
            <MenuIcon className="h-10 w-10" />
          </button>
          {toggle ? (
            <div className="absolute top-16 right-0 w-64 mt-4 py-2 bg-white rounded-lg shadow-xl flex flex-col items-center justify-around z-[1200]  space-y-6">
              <Link
                className="text-black inline-flex items-center px-1 pt-1 text-lg font-semibold hover:text-[#DB2777] cursor-pointer"
                href={"/tshirts"}
              >
                Tshirts
              </Link>
              <Link
                className="text-black inline-flex items-center px-1 pt-1 text-lg font-semibold hover:text-[#DB2777] cursor-pointer"
                href={"/hoodies"}
              >
                Hoodies
              </Link>
              <Link
                className="text-black inline-flex items-center px-1 pt-1 text-lg font-semibold hover:text-[#DB2777] cursor-pointer"
                href={"/sweatshirts"}
              >
                Sweatshirts
              </Link>
              <Link
                className="text-black inline-flex items-center px-1 pt-1 text-lg font-semibold hover:text-[#DB2777] cursor-pointer"
                href={"/mugs"}
              >
                Mugs
              </Link>
              <Link
                className="text-black inline-flex items-center px-1 pt-1 text-lg font-semibold hover:text-[#DB2777] cursor-pointer"
                href={"/caps"}
              >
                Caps
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default MobileNav;

function MenuIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    )
  }
  
  function SearchIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    )
  }
