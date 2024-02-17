import React from "react";
import { IoClose } from "react-icons/io5";
import { FaPlus, FaMinus } from "react-icons/fa";
import Link from "next/link";
import { Button } from "../ui/button";

function CartSidebar({
  cartVisible,
  toggleCart,
  Items,
  handleIncreaseQuanity,
  handleDecreaseQuanity,
  handleClearCart,
  PriceCount,
}) {
  return (
    <div
      className={`CartSidebar h-screen fixed z-[100] transition-transform ease-in-out delay-1000 duration-1000 ${
        cartVisible ? "hidden" : "block"
      } w-72 transform top-0 right-0 dark:bg-[#374151] py-10 px-8 bg-[#FDF2F8]`}
    >
      <h2 className="font-bold text-xl text-center dark:text-white text-black mb-4">
        Shopping Cart
      </h2>
      <span
        onClick={toggleCart}
        className="absolute right-2 top-5 cursor-pointer text-2xl text-[#bd1e59]"
      >
        <IoClose />
      </span>
      <ol className="list-decimal font-semibold">
        {Items.length != 0 &&
          Items.map((item) => (
            <li key={item.id}>
              <div className="item flex my-5">
                <div className="w-2/3 font-semibold">
                  {item.name} / ({item.size} | {item.color})
                </div>
                <div className="flex font-semibold text-lg items-center justify-center w-1/3">
                  <span className="w-4">
                    <FaMinus
                      onClick={handleIncreaseQuanity(item)}
                      className="cursor-pointer text-[#DB2777] inline-flex items-center justify-center rounded-full"
                    />
                  </span>
                  <span className="mx-2">{item.quantity}</span>
                  <span className="w-4">
                    <FaPlus
                      onClick={handleDecreaseQuanity(item)}
                      className="cursor-pointer inline-flex items-center justify-center rounded-full text-[#DB2777]"
                    />
                  </span>
                </div>
              </div>
            </li>
          ))}
      </ol>
      {Items.length != 0 ? (
        <div className="flex items-center justify-between">
          <p className="text-xl dark:text-white text-black">Total Price: </p>
          <p className="text-xl text-pink-500 font-bold dark:text-pink-600">
            ₹ {PriceCount}
          </p>
        </div>
      ) : (
        <div>
          <p className="text-xl font-bold dark:text-white text-black">
            Cart is Empty! Start shopping now
          </p>
        </div>
      )}
      {Items.length != 0 && (
        <div className="flex items-center space-x-2 justify-center">
          <Link href={"/checkout"}>
            <Button className="bg-pink-600 dark:bg-pink-600 dark:hover:bg-[#bd1e59] dark:text-white text-white px-4 py-2 rounded-md text-base font-medium hover:bg-[#bd1e59] cursor-pointer mt-12">
              Checkout
            </Button>
          </Link>
          <Button
            onClick={handleClearCart}
            className="bg-pink-600 dark:bg-pink-600 dark:hover:bg-[#bd1e59] dark:text-white text-white px-4 py-2 rounded-md text-base font-medium hover:bg-[#bd1e59] cursor-pointer mt-12"
          >
            Clear Cart
          </Button>
        </div>
      )}
    </div>
  );
}

export default CartSidebar;
