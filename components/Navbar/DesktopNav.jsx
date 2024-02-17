import React from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeButton from "../ThemeButton";
import { Button } from "../ui/button";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleTheme } from "@/redux/features/themeSlice";

function DesktopNav({ status, handleLogout, handleLoggedInDropdown, isDropDown, toggleCart, ItemCount }) {
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className="md:flex hidden xl:flex-row flex-col w-full justify-around items-center">
      <div className="flex items-center">
        <div className="-ml-2 mr-6 flex items-center cursor-pointer">
          <Link href={"/"}>
            <Image
              alt="Logo"
              height="32"
              priority={true}
              src="/logo.png"
              style={{
                aspectRatio: "120/32",
                objectFit: "cover",
              }}
              width="120"
              className="w-[80vw] md:w-[30vw] md:max-w-none max-w-[80%] py-4 md:py-0 xs:py-0 xl:w-[14vw]"
            />
          </Link>
        </div>
        <div className="hidden sm:flex sm:items-center sm:space-x-2">
          <input
            className="ml-3 py-2 text-black px-4 border border-gray-600 rounded-md w-72 focus:border-[#DB2777] focus:outline-none"
            placeholder="Search from our 1000+ designs"
            type="text"
          />
          <div className="bg-[#DB2777] p-1 rounded-full hover:bg-[#9B104E] cursor-pointer">
            <SearchIcon className="text-white h-6 w-6" />
          </div>
        </div>
      </div>
      <div className="flex space-x-2 w-full items-center justify-around">
        <div className="hidden sm:ml-10 sm:flex sm:space-x-4">
          <Link
            className="text-black dark:hover:text-[#DB2777] dark:text-white inline-flex items-center px-1 pt-1 text-lg font-semibold hover:text-[#DB2777] cursor-pointer"
            href={"/tshirts"}
          >
            Tshirts
          </Link>
          <Link
            className="text-black dark:hover:text-[#DB2777] dark:text-white inline-flex items-center px-1 pt-1 text-lg font-semibold hover:text-[#DB2777] cursor-pointer"
            href={"/hoodies"}
          >
            Hoodies
          </Link>
          <Link
            className="text-black dark:hover:text-[#DB2777] dark:text-white inline-flex items-center px-1 pt-1 text-lg font-semibold hover:text-[#DB2777] cursor-pointer"
            href={"/sweatshirts"}
          >
            Sweatshirts
          </Link>
          <Link
            className="text-black dark:hover:text-[#DB2777] dark:text-white inline-flex items-center px-1 pt-1 text-lg font-semibold hover:text-[#DB2777] cursor-pointer"
            href={"/mugs"}
          >
            Mugs
          </Link>
          <Link
            className="text-black dark:hover:text-[#DB2777] dark:text-white inline-flex items-center px-1 pt-1 text-lg font-semibold hover:text-[#DB2777] cursor-pointer"
            href={"/caps"}
          >
            Caps
          </Link>
        </div>
        <div className="flex items-center">
          <div className="flex-shrink-0 mr-4">
            {!status && (
              <Link href={"/login"}>
                <Button className="bg-pink-600 dark:bg-pink-600 dark:hover:bg-[#DB2777] dark:text-white text-white px-4 py-2 rounded-md text-base font-medium hover:bg-[#DB2777] cursor-pointer">
                  Login
                </Button>
              </Link>
            )}
            {status && (
              <div
                className="relative inline-block"
                onClick={handleLoggedInDropdown}
              >
                <FaUserCircle className="w-8 h-8 cursor-pointer" />

                {isDropDown && (
                  <div className="absolute mt-2 w-32 p-2 bg-white border border-gray-300 rounded shadow">
                    <ul>
                      <Link href={"/myaccount"}>
                        <li className="py-1 dark:text-pink-600 cursor-pointer text-pink-500 font-bold">
                          My Account
                        </li>
                      </Link>
                      <Link href={"/myorders"}>
                        <li className="py-1 dark:text-pink-600 cursor-pointer text-pink-500 font-bold">
                          Orders
                        </li>
                      </Link>
                      <li
                        onClick={handleLogout}
                        className="py-1 dark:text-pink-600 cursor-pointer font-bold text-pink-500"
                      >
                        Logout
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="flex-shrink-0 mr-4 cursor-pointer relative">
            <ShoppingCartIcon
              onClick={toggleCart}
              className="text-[#DB2777] hover:text-[#9B104E] h-8 w-8 dark:text-[#DB2777] dark:hover:text-[#9B104E]"
            />
            <span className="absolute top-0 right-0 bg-[#DB2777] text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
              {ItemCount}
            </span>
          </div>
          <div className="flex-shrink-0 cursor-pointer">
            <ThemeButton onClick={handleToggleTheme} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopNav;

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

  function ShoppingCartIcon(props) {
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
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    )
  }
