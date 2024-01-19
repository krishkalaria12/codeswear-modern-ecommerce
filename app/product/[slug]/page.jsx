"use client"
import { useParams} from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import ProductImage from "@/components/ProductImage"
import Image from "next/image"
import { addItem } from "@/app/redux/features/Cartslice"
import { UseDispatch, useDispatch } from "react-redux"
import { useState } from "react"

function Product() {
    const pathname = useParams();
    const [pin,setPin] = useState();
    const dispatch = useDispatch();
    const [ServiceAvailability, setServiceAvailability] = useState();
    const {slug} = pathname;

    const onchangePin = (e) => {
        setPin(e.target.value)
    }
    
    const checkServiceAvailability = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/pincode");
            const pinjson = await response.json();

            if (pinjson.includes(parseInt(pin))) {
                setServiceAvailability(true);
            } else {
                setServiceAvailability(false);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    
        const product = {
            id: slug, 
            name: "Good Vibes Hoodie",
            price: 999, 
            discountedPrice: 799,
            color: "Black", 
            size: "s", 
            quanity: 1
        };

    const handleCart = () => {
        dispatch(addItem({product}))
    }

    return (
        <div className="dark:bg-gray-900 dark:text-white bg-white text-black">
            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-wrap -mx-4">
                <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
                    <div className="flex items-center flex-col-reverse lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                    <div className="md:flex grid gap-y-2 gap-x-0 grid-cols-2 md:flex-row mt-4 lg:space-x-0 space-x-4 lg:flex-col lg:space-y-4">
                        <ProductImage />
                        <ProductImage />
                        <ProductImage />
                    </div>
                    <div className="mb-6">
                        <Image
                        alt="Good Vibes Hoodie"
                        className="rounded-lg h-[700px] w-[700px] dark:border-gray-700 border-gray-300"
                        height="800"
                        src="/placeholder.svg"
                        style={{
                            aspectRatio: "450/600",
                            objectFit: "cover",
                        }}
                        width="450" />
                    </div>
                    </div>
                </div>
                <div className="w-full lg:w-2/3 px-4">
                    <h1 className="text-3xl font-bold mb-2">{product.name} ({product.size}/{product.color})</h1>
                    <h2 className="text-xl mb-6">Product Description:</h2>
                    <p className="mb-4">
                    Embrace positivity and style with the "Good Vibes Hoodie." This cozy and uplifting hoodie is designed to
                    spread positivity wherever you go. The inspiring "Good Vibes" message on the front radiates positivity and
                    warmth, making it an essential addition to your wardrobe.
                    </p>
                    <p className="mb-4">
                    Crafted from high-quality and soft fabric, this hoodie offers comfort while embodying a positive outlook.
                    The regular fit provides a classic and versatile look, perfect for casual outings, chilly days, or
                    whenever you want to uplift your spirits and those around you.
                    </p>
                    <p className="mb-4">
                    The "Good Vibes Hoodie" isn't just clothing; it's a statement of your commitment to fostering a positive
                    atmosphere. Wear it proudly and spread good vibes wherever you go, connecting with like-minded individuals
                    who appreciate the power of positivity.
                    </p>
                    <h3 className="text-lg font-semibold mb-3">Product Highlights:</h3>
                    <ul className="list-disc list-inside mb-6 dark:text-gray-300 text-gray-700">
                    <li>Inspiring "Good Vibes" message for a positive outlook</li>
                    <li>High-quality and soft fabric for maximum comfort</li>
                    <li>Regular fit for a classic and versatile style</li>
                    <li>Perfect for casual outings, spreading positivity, and uplifting your mood</li>
                    <li>Spread good vibes and connect with positivity enthusiasts</li>
                    </ul>
                    <p className="font-semibold dark:text-gray-300 text-gray-700">
                    Tags: hoodie, positivity, good vibes, uplifting, positivity, comfort
                    </p>
                    <div className="bg-white dark:bg-[#111827] transition-colors duration-300">
                    <div className="max-w-4xl pt-4">
                        <div className="flex flex-col flex-wrap gap-4">
                        <div className="flex flex-col space-y-4">
                        <div className="flex items-center space-x-2 border-b-2 pb-3">
                            <Button
                            className="text-black dark:text-white bg-pink-400 hover:bg-pink-400 hover:text-white dark:bg-[#DB2777] dark:hover:bg-pink-400 rounded-full">
                            S
                            </Button>
                            <Button
                            className="text-black dark:text-white bg-pink-400 hover:bg-pink-400 hover:text-white dark:bg-[#DB2777] dark:hover:bg-pink-400 rounded-full">
                            M
                            </Button>
                            <Button
                            className="text-black dark:text-white bg-pink-400 hover:bg-pink-400 hover:text-white dark:bg-[#DB2777] dark:hover:bg-pink-400 rounded-full">
                            L
                            </Button>
                            <Button
                            className="text-black dark:text-white bg-pink-400 hover:bg-pink-400 hover:text-white dark:bg-[#DB2777] dark:hover:bg-pink-400 rounded-full">
                            XL
                            </Button>
                            <Button
                            className="text-black dark:text-white bg-pink-400 hover:bg-pink-400 hover:text-white dark:bg-[#DB2777] dark:hover:bg-pink-400 rounded-full">
                            XXL
                            </Button>
                        </div>
                        <div className="flex space-x-2">
                            <div
                                className="text-3xl font-semibold line-through text-gray-500 dark:text-gray-400">{product.price}</div>
                            <div className="text-5xl font-bold text-pink-400 dark:text-[#DB2777]">{product.discountedPrice}</div>
                            <div className="text-lg text-gray-500 dark:text-gray-400">(Free Shipping)</div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <div className="flex items-center space-x-3">
                            <Input onChange={onchangePin} className="w-64 dark:bg-[#1F2937] dark:border-gray-600 focus:outline-none focus:border-[#DB2777] dark:text-white" placeholder="Enter your Pincode" />
                                <Button onClick={checkServiceAvailability}
                                className="text-black dark:text-white bg-pink-400 hover:bg-[#DB2777] dark:bg-[#DB2777] dark:hover:bg-pink-400 rounded-full">
                                Check
                                </Button>
                            </div>
                            {!ServiceAvailability  && ServiceAvailability!=null && 
                            <div>
                                <p className="text-red-500 text-xl dark:text-red-700">Sorry, We do not deliver to this pincode yet</p>
                            </div> } 
                            {ServiceAvailability && ServiceAvailability!=null && <div>
                            <p className="text-green-500 text-xl dark:text-green-700">Yes , We do deliver at this Pincode</p>
                            </div>}
                            <div className="flex space-x-4">
                                <Button
                                className="text-black dark:text-white bg-pink-400 hover:bg-[#DB2777] dark:bg-[#DB2777] dark:hover:bg-pink-400 rounded-full">
                                Buy Now
                                </Button>
                                <Button
                                className="text-black dark:text-white bg-pink-400 hover:bg-[#DB2777] dark:bg-[#DB2777] dark:hover:bg-pink-400 rounded-full" onClick={handleCart}>
                                Add to Cart
                                </Button>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <div className="text-xl font-semibold text-gray-700 dark:text-gray-300">Exciting Offers:</div>
                            <div className="flex items-center space-x-2">
                            <CheckCircleIcon className="text-green-500" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                Get Flat 10% off on all prepaid orders above ₹249 Use coupon CODESWEAR10
                            </span>
                            </div>
                            <div className="flex items-center space-x-2">
                            <CheckCircleIcon className="text-green-500" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">Get Customized T-Shirts at only ₹549.</span>
                            </div>
                            <div className="flex items-center space-x-2">
                            <CheckCircleIcon className="text-green-500" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                Buy 2 get 1 Free and buy 3 get 2 Free on all Caps - Prepaid orders only.
                            </span>
                            </div>
                            <div className="flex items-center space-x-2">
                            <CheckCircleIcon className="text-green-500" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                Buy 2 get 1 Free and buy 3 get 2 Free on all Mousepads - Prepaid orders only.
                            </span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
    )
}



function CheckCircleIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>)
    );
  }

export default Product