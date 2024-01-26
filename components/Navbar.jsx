'use client'
import { Button } from "@/components/ui/button"
import ThemeButton from "./ThemeButton"
import {useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { login, logout } from "@/redux/features/authSlice"
import authService from "@/lib/appwrite/authConfig"
import {useDispatch, useSelector } from "react-redux"
import { IoClose } from "react-icons/io5";
import { FaPlus, FaMinus, FaUserCircle } from "react-icons/fa";
import { clearCart, increaseItemQuantity, decreaseItemQuantity, setCartFromLocalStorage } from "@/redux/features/Cartslice"

export default function Component() {

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      dispatch(setCartFromLocalStorage(parsedCart));
    }
    const getUsers = async () => {
      const users = await authService.getCurrentUser();
      if (users) {
        dispatch(login(users));
      }
    };
    getUsers()
  }, []);

  const dispatch = useDispatch();

  const Items = useSelector((state) => state.cart.items);
  const PriceCount = useSelector((state) => state.cart.total);
  const ItemCount = useSelector((state) => state.cart.itemTotal);
  const status = useSelector((state) => state.auth.status);

  const [toggle, setToggle] = useState(false);
  const [cartVisible, setCartVisible] = useState(true);
  const [searchVisible, setSearchVisible] = useState(true);

  const toggleCart = () => {
    setCartVisible((prevCartVisible) => !prevCartVisible);
  }

  const toggleSearch = () => {
    setSearchVisible((prevSearchVisible) => !prevSearchVisible);
  };

  const [isDropDown, setisDropDown] = useState(false);

  const handleLoggedInDropdown = () => {
    setisDropDown((prev) => !prev)
  }

  const toggleNav = () => {
    setToggle((toggle) => !toggle)
  }

  const handleClearCart = () => {
    dispatch(clearCart())
    localStorage.removeItem("cart");
  }

  const handleLogout = async () => {
    await authService.logout();
    dispatch(logout());
  }

  const handleIncreaseQuanity = (item) => {
  //   dispatch(increaseItemQuantity({ product: item }));
  }
  
  const handleDecreaseQuanity = (item) => {
  //   dispatch(decreaseItemQuantity({ product: item }));
  }

  return (
    <>
      <nav className="bg-[#ffffff] shadow-md dark:bg-[#111827] border-b border-gray-200 dark:border-[#111827] p-2 sticky top-0 z-50">
      <div className="px-4 w-full h-full lg:px-4">
        <div className="flex justify-between w-full items-center">
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
                <button className="inline-flex items-center justify-center p-2 rounded-md text-pink-600 hover:text-[#DB2777] hover:bg-gray-100 focus:outline-none  focus:text-[#DB2777] dark:bg-gray-[#DB2777] dark:text-pink-400 dark:hover:bg-pink-800" onClick={toggleNav}>
                  <MenuIcon className="h-10 w-10" />
                </button> 
                {toggle ? 
                (<div className="absolute top-16 right-0 w-64 mt-4 py-2 bg-white rounded-lg shadow-xl flex flex-col items-center justify-around z-[1200]  space-y-6">
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
            {searchVisible  ? <div className="flex space-x-2">
              <input
                      className="ml-3 py-2 text-black px-4 border border-gray-600 rounded-md w-72 focus:border-[#DB2777] focus:outline-none"
                      placeholder="Search from our 1000+ designs"
                      type="text"
                  />
                <div  className="bg-[#DB2777] p-2 rounded-full hover:bg-[#9B104E] cursor-pointer inline-flex items-center justify-center">
                      <SearchIcon className="text-white h-6 w-6" />
                </div>
            </div> : null}
          </div>
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
                      {!status && <Link href={"/login"}>
                        <Button className="bg-pink-600 dark:bg-pink-600 dark:hover:bg-[#DB2777] dark:text-white text-white px-4 py-2 rounded-md text-base font-medium hover:bg-[#DB2777] cursor-pointer">
                          Login
                        </Button>
                      </Link>}
                      {status && 
                       <div
                       className="relative inline-block"
                       onClick={handleLoggedInDropdown}
                     >
                       <FaUserCircle className="w-8 h-8 cursor-pointer" />
                 
                       {isDropDown && (
                         <div className="absolute mt-2 w-32 p-2 bg-white border border-gray-300 rounded shadow">
                           <ul>
                             <Link href={""}><li className="py-1 dark:text-black cursor-pointer text-pink-600">My Account</li></Link>
                             <Link href={""}><li className="py-1 dark:text-black cursor-pointer text-pink-600">Orders</li></Link>
                             <li onClick={handleLogout} className="py-1 dark:text-black cursor-pointer text-pink-600">Logout</li>
                           </ul>
                         </div>
                       )}
                     </div>}
                    </div>
                    <div className="flex-shrink-0 mr-4 cursor-pointer relative">
                        <ShoppingCartIcon onClick={toggleCart} className="text-[#DB2777] hover:text-[#9B104E] h-8 w-8 dark:text-[#DB2777] dark:hover:text-[#9B104E]" />
                        <span className="absolute top-0 right-0 bg-[#DB2777] text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                            {ItemCount}
                        </span>
                    </div>
                    <div className="flex-shrink-0 cursor-pointer">
                      <ThemeButton />
                    </div>
                </div>
            </div>
          </div>
          
        </div>
      </div>
    </nav>
      <div className="md:hidden flex fixed p-2 bottom-0 left-0 right-0 w-full bg-[#111827] text-[#DB2777]">
        <div className="flex justify-around w-full font-bold">
          <HomeIcon className="text-[#bd1e59]" />
          <span>
            <SearchIcon onClick={toggleSearch} className="text-[#bd1e59]" />
          </span>
          <ShoppingCartIcon onClick={toggleCart}  className="text-[#bd1e59]" />
          <ThemeButton className="text-[#bd1e59]" />
          <UserIcon className="text-[#bd1e59]" />
        </div>
      </div>
      <div className={`CartSidebar h-screen fixed z-[100] transition-transform ease-in-out delay-1000 duration-1000 ${cartVisible ? 'hidden' : 'block'} w-72 transform top-0 right-0 dark:bg-[#374151] py-10 px-8 bg-[#FDF2F8]`}>
        <h2 className="font-bold text-xl text-center dark:text-white text-black mb-4">Shopping Cart</h2>
        <span onClick={toggleCart} className="absolute right-2 top-5 cursor-pointer text-2xl text-[#bd1e59]"><IoClose /></span>
        <ol className="list-decimal font-semibold">
          {Items.length!=0 && Items.map((item) =>  <li key={item.id}>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold">{item.name}</div>
              <div className="flex font-semibold text-lg items-center justify-center w-1/3">
                <span className="w-4">
                  <FaMinus onClick={handleIncreaseQuanity(item)} className="cursor-pointer text-[#DB2777] inline-flex items-center justify-center rounded-full" />
                </span>
                <span className="mx-2">{item.quantity}</span>
                <span className="w-4">
                  <FaPlus onClick={handleDecreaseQuanity(item)} className="cursor-pointer inline-flex items-center justify-center rounded-full text-[#DB2777]" />
                </span>
              </div>
            </div>
          </li>)}
        </ol>
        {Items.length!=0 ? <div className="flex items-center justify-between">
          <p className="text-xl dark:text-white text-black">Total Price: </p>
          <p className="text-xl text-pink-500 font-bold dark:text-pink-600">₹ {PriceCount}</p>
        </div> : <div>
          <p className="text-xl font-bold dark:text-white text-black">Cart is Empty! Start shopping now</p></div>}
        {Items.length!=0 && <div className="flex items-center space-x-2 justify-center">
          <Link href={"/checkout"}>
            <Button className="bg-pink-600 dark:bg-pink-600 dark:hover:bg-[#bd1e59] dark:text-white text-white px-4 py-2 rounded-md text-base font-medium hover:bg-[#bd1e59] cursor-pointer mt-12">
              Checkout
            </Button>
          </Link>
          <Button onClick={handleClearCart} className="bg-pink-600 dark:bg-pink-600 dark:hover:bg-[#bd1e59] dark:text-white text-white px-4 py-2 rounded-md text-base font-medium hover:bg-[#bd1e59] cursor-pointer mt-12">
            Clear Cart
          </Button>
        </div>}
      </div>

    </>
  )
}

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

function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

