import React from "react";
import Link from "next/link";

function Order() {
  return (
    <section class="text-gray-400 dark:bg-gray-900 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 class="text-sm title-font text-gray-500 tracking-widest">
              BRAND NAME
            </h2>
            <h1 class="text-white text-3xl title-font font-medium mb-4">
              Animated Night Hill Illustrations
            </h1>
            <div class="flex mb-4">
              <span class="flex-grow text-pink-400 border-b-2 border-pink-500 py-2 text-lg px-1">
                Description
              </span>
            </div>
            <p class="leading-relaxed mb-4">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam iligo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean.
            </p>
            <div class="flex border-t border-gray-800 py-2">
              <span class="text-gray-800 dark:text-gray-400">Color</span>
              <span class="ml-auto text-black dark:text-white">Blue</span>
            </div>
            <div class="flex border-t border-gray-800 py-2">
              <span class="text-gray-800 dark:text-gray-400">Size</span>
              <span class="ml-auto text-black dark:text-white">Medium</span>
            </div>
            <div class="flex border-t border-b mb-6 border-gray-800 py-2">
              <span class="text-gray-800 dark:text-gray-400">Quantity</span>
              <span class="ml-auto text-black dark:text-white">4</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="title-font font-medium text-2xl text-white">
                $58.00
              </span>
              <Link href={"/myorders"}>
                <button class="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">
                    My Orders
                </button>
              </Link>
              
            </div>
          </div>
          <img
            alt="ecommerce"
            class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://dummyimage.com/400x400"
          />
        </div>
      </div>
    </section>
  );
}

export default Order;
