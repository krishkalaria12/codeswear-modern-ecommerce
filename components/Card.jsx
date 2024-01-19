import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

function Card() {
    return (
        <div className="flex p-4 dark:bg-[#374151] shadow-md flex-col items-center space-y-2">
          <Image
            alt="Good Vibes Hoodie"
            className="h-[400px] w-[300px] object-cover"
            height="400"
            src="/placeholder.svg"
            style={{
              aspectRatio: "300/400",
              objectFit: "cover",
            }}
            width="300"
          />
          <h2 className="text-lg font-semibold">Hoodie</h2>
          <div className='flex w-full justify-around items-center'>
            <div className="flex space-x-1">
                <span className="h-3 w-3 rounded-full bg-black" />
                <span className="h-3 w-3 rounded-full bg-gray-500" />
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
                <span className="h-3 w-3 rounded-full bg-blue-500" />
            </div>
            <p className="text-base">Good Vibes Hoodie</p>
          </div>
          <div className='flex space-x-2 items-center'>
            <span className="text-xl text-black font-bold dark:text-white">₹949</span>
            <span className="text-base line-through text-gray-500 dark:text-gray-400">₹799</span>
          </div>
          <div className="flex space-x-1">
            <Button className="hover:bg-[#bd1e59] bg-[#DB2777] dark:hover:bg-[#bd1e59] dark:text-white dark:bg-[#DB2777]">S</Button>
            <Button className="hover:bg-[#bd1e59] dark:hover:bg-[#bd1e59] dark:bg-[#DB2777] dark:text-white bg-[#DB2777]">M</Button>
            <Button className="hover:bg-[#bd1e59] dark:hover:bg-[#bd1e59] dark:bg-[#DB2777] dark:text-white bg-[#DB2777]">L</Button>
            <Button className="hover:bg-[#bd1e59] dark:hover:bg-[#bd1e59] dark:bg-[#DB2777] dark:text-white bg-[#DB2777]">XL</Button>
            <Button className="hover:bg-[#bd1e59] dark:hover:bg-[#bd1e59] dark:bg-[#DB2777] dark:text-white bg-[#DB2777]">XXL</Button>
          </div>
        </div>
    )
}

export default Card