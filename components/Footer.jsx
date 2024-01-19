import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
      <footer className="dark:bg-[#111827] bg-gray-100 text-gray-600 dark:text-gray-300">
        <div className="container mx-auto px-4 py-8 md:flex md:justify-between md:items-center">
          <div className="mb-6 md:mb-0">
              <Link href={"/"}>
                <Image
                alt="Codeswear logo"
                className="md:h-8 md:w-full h-16 w-60 mb-4"
                height="60"
                src="/logo.png"
                style={{
                  aspectRatio: "120/60",
                  objectFit: "cover",
                }}
                width="120"
              />
              </Link>
            <p className="text-sm dark:text-gray-400">{`Wear the <code/>`}</p>
            <p className="text-sm dark:text-gray-400">Premium coding tshirts, hoodies and apparels</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div>
              <h5 className="text-lg font-semibold mb-4 dark:text-gray-200">SHOP</h5>
              <ul className="text-sm space-y-2 dark:text-gray-400">
                <Link href={"/tshirts"}><li className="cursor-pointer dark:hover:text-[#DB2777] hover:text-[#DB2777] font-semibold">T-Shirts</li></Link>
                <Link href={"/sweatshirts"}><li className="cursor-pointer dark:hover:text-[#DB2777] hover:text-[#DB2777] font-semibold">Sweatshirts</li></Link>
                <Link href={"/hoodies"}><li className="cursor-pointer dark:hover:text-[#DB2777] hover:text-[#DB2777] font-semibold">Hoodies</li></Link>
                <Link href={"/caps"}><li className="cursor-pointer dark:hover:text-[#DB2777] hover:text-[#DB2777] font-semibold">Caps</li></Link>
                <Link href={"/mugs"}><li className="cursor-pointer dark:hover:text-[#DB2777] hover:text-[#DB2777] font-semibold">Mugs</li></Link>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4 dark:text-gray-200">CUSTOMER SERVICE</h5>
              <ul className="text-sm space-y-2 dark:text-gray-400">
                <Link href={"/contact"}><li className="cursor-pointer dark:hover:text-[#DB2777] hover:text-[#DB2777] font-semibold">Contact Us</li></Link>
                <Link href={"/about"}><li className="cursor-pointer dark:hover:text-[#DB2777] hover:text-[#DB2777] font-semibold">About Us</li></Link>
                <Link href={"/return-policy"}><li className="cursor-pointer dark:hover:text-[#DB2777] hover:text-[#DB2777] font-semibold">Return Policy</li></Link>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4 dark:text-gray-200">POLICY</h5>
              <ul className="text-sm space-y-2 dark:text-gray-400">
                <Link href={"/privacy-policy"}><li className="cursor-pointer dark:hover:text-[#DB2777] hover:text-[#DB2777] font-semibold">Privacy Policy</li></Link>
                <Link href={"/terms-and-conditions"}><li className="cursor-pointer dark:hover:text-[#DB2777] hover:text-[#DB2777] font-semibold">Terms and Conditions</li></Link>
              </ul>
            </div>
            <div>
                <div className="bg-white">
                    <Image
                    alt="Payment methods"
                    className="h-32 w-full mb-4"
                    height="80"
                    src="/pay.png"
                    style={{
                    aspectRatio: "160/40",
                    objectFit: "cover",
                    }}
                    width="160"
                />
                </div>
              <p className="text-xs dark:text-gray-500">Customer Protection</p>
              <p className="text-xs dark:text-gray-500">Full/Partial Refund, if the item is not as described</p>
            </div>
          </div>
        </div>
        <div className="dark:bg-gray-800 container mx-auto px-4 py-4 text-center text-sm dark:text-gray-300">
          © 2024 Codeswear.com — All Rights Reserved
        </div>
      </footer>
    )
  }
  
  