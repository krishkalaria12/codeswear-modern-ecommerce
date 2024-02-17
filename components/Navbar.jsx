'use client'
import {useEffect, useState } from "react"
import { useRouter } from 'next/navigation'
import { login, logout } from "@/redux/features/authSlice"
import authService from "@/lib/appwrite/authConfig"
import {useDispatch, useSelector } from "react-redux"
import { clearCart, increaseItemQuantity, decreaseItemQuantity, setCartFromLocalStorage } from "@/redux/features/Cartslice"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MobileFooter from "./Navbar/MobileFooter"
import CartSidebar from "./Navbar/CartSidebar"
import MobileNav from "./Navbar/MobileNav"
import DesktopNav from "./Navbar/DesktopNav"

export default function Component() {

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      dispatch(setCartFromLocalStorage(parsedCart));
    }
    const getUsers = async () => {
      const cookieFallback = localStorage.getItem("cookieFallback");
      if (cookieFallback) {
        if (cookieFallback.length!=[]) {
            const users = await authService.getCurrentUser();
            if (users) {
              dispatch(login(users));
            }
        }
        else {
          dispatch(logout());
        }
      }
    };
    getUsers()
  }, []);

  const dispatch = useDispatch();
  const router = useRouter();

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
    toast.success("Logged out Successfully")
    setTimeout(() => {
      router.push("/login")
    }, 2000);
  }

  const handleIncreaseQuanity = (item) => {
    // dispatch(increaseItemQuantity({ product: item }));
  }
  
  const handleDecreaseQuanity = (item) => {
    // dispatch(decreaseItemQuantity({ product: item }));
  }

  return (
    <>
      <ToastContainer />
      <nav className="bg-[#ffffff] shadow-md dark:bg-[#111827] border-b border-gray-200 dark:border-[#111827] p-2 sticky top-0 z-50">
      <div className="px-4 w-full h-full lg:px-4">
        <div className="flex justify-between w-full items-center">
          <MobileNav toggleNav={toggleNav} toggle={toggle} searchVisible={searchVisible} />
          <DesktopNav
            status={status}
            handleLogout={handleLogout}
            handleLoggedInDropdown={handleLoggedInDropdown}
            isDropDown={isDropDown}
            toggleCart={toggleCart}
            ItemCount={ItemCount}
          />
        </div>
      </div>
    </nav>
      <MobileFooter handleLoggedInDropdown={handleLoggedInDropdown} handleLogout={handleLogout} isDropDown={isDropDown} status={status} toggleCart={toggleCart} />
      <CartSidebar cartVisible={cartVisible} toggleCart={toggleCart} Items={Items} PriceCount={PriceCount} handleClearCart={handleClearCart} handleDecreaseQuanity={handleDecreaseQuanity} handleIncreaseQuanity={handleIncreaseQuanity} />
    </>
  )
}


