"use client";
import {notFound, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import ProductImage from "@/components/ProductImage"
import Image from "next/image";
import service from "@/lib/appwrite/dbConfig";
import conf from "@/conf/conf";
import { useRouter } from "next/navigation";
import { addItem, clearCart } from "@/redux/features/Cartslice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import NotFound from "../../not-found";

function Product({ params }) {
  const pathname = useParams();
  const router = useRouter();
  const [pin, setPin] = useState();
  const dispatch = useDispatch();
  const [ServiceAvailability, setServiceAvailability] = useState();
  const { slug } = pathname;

  const onchangePin = (e) => {
    setPin(e.target.value);
  };

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


  useEffect(() => {
    fetchProduct();
  }, []);

  const [variants, setVariants] = useState({});
  const [productSlug, setProductSlug] = useState({});
  const [color, setColor] = useState(undefined);
  const [size, setSize] = useState(undefined);
  const [wrongSlug, setWrongSlug] = useState(false);

  const fetchProduct = async () => {
    const slug = params.slug;
    const fetchProductSlug = await service.getPostBySlug(slug, conf.appwriteSweatshirtsCollectionId);
    if (fetchProductSlug.documents.length!=0) {
      setWrongSlug(false);
      setProductSlug(fetchProductSlug.documents[0]);
      setColor(fetchProductSlug.documents[0].color);
      setSize(fetchProductSlug.documents[0].size);
      const products = await service.getPostsByName(
        fetchProductSlug.documents[0].name, conf.appwriteSweatshirtsCollectionId
      );
      const documents = products.documents;
      const availableProducts = documents.filter((item) => item.isAvailable);
      const colorsizeslug = {};
  
      for (let item of availableProducts) {
        if (Object.keys(colorsizeslug).includes(item.color)) {
          colorsizeslug[item.color][item.size] = { slug: item.slug };
        } else {
          colorsizeslug[item.color] = {};
          colorsizeslug[item.color][item.size] = { slug: item.slug };
        }
      }
  
      setVariants(colorsizeslug);
    }
    else {
      setWrongSlug(true);
    }
  };

  const refreshVariant = (newsize, newcolor) => {
    let url = `/product/sweatshirts/${variants[newcolor][newsize]["slug"]}`;
    router.push(url);
  };

  const { slug: ProductSlug, name, Price, discountedPrice, color: ProductColor, size: ProductSize, imageUrl: ProductImageUrl } = productSlug;

  const handleCart = () => {
    const item = {
      id: ProductSlug,
      name: name,
      price: Price,
      discountedPrice: discountedPrice,
      color: ProductColor,
      size: ProductSize,
      image: ProductImageUrl,
      quantity: 1,
    };
  
    dispatch(addItem({ product: item }));
  };
  
  const handleBuyNow = () => {
    const item = {
      id: ProductSlug,
      name: name,
      price: Price,
      discountedPrice: discountedPrice,
      color: ProductColor,
      size: ProductSize,
      image: ProductImageUrl,
      quantity: 1,
    };
  
    dispatch(clearCart());
    dispatch(addItem({ product: item }));
    router.push("/checkout");
  };

  if (wrongSlug==true) {
    return <NotFound />
  }

  return (
    <div className="dark:bg-gray-900 dark:text-white bg-white text-black">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
            <div className="flex items-center flex-col-reverse lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
              <div className="mb-6">
                <Image
                  alt="Good Vibes Hoodie"
                  className="rounded-lg h-[700px] w-[700px] dark:border-gray-700 border-gray-300"
                  height="800"
                  src={`${productSlug.imageUrl ? productSlug.imageUrl : "/placeholder.svg"}`}
                  style={{
                    aspectRatio: "450/600",
                    objectFit: "cover",
                  }}
                  width="450"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/3 px-4">
            <h1 className="text-3xl font-bold mb-2">
              {productSlug.name} ({productSlug.size?.toUpperCase()}/
              {productSlug.color})
            </h1>
            <h2 className="text-xl mb-6">Product Description:</h2>
            <p className="mb-4">{productSlug.description}</p>
            <h3 className="text-lg font-semibold mb-3">Product Highlights:</h3>
            <ul className="list-disc list-inside mb-6 dark:text-gray-300 text-gray-700">
              <li>Inspiring "Good Vibes" message for a positive outlook</li>
              <li>High-quality and soft fabric for maximum comfort</li>
              <li>Regular fit for a classic and versatile style</li>
              <li>
                Perfect for casual outings, spreading positivity, and uplifting
                your mood
              </li>
              <li>Spread good vibes and connect with positivity enthusiasts</li>
            </ul>
            <p className="font-semibold dark:text-gray-300 text-gray-700">
              Tags: hoodie, positivity, good vibes, uplifting, positivity,
              comfort
            </p>
            <div className="flex mt-4 space-x-8 items-center">
            <div className="flex space-x-2 mt-2 items-center">
              {variants &&
                Object.keys(variants).includes("red") &&
                Object.keys(variants["red"]).includes(size) && (
                  <button
                    onClick={() => refreshVariant(size, "red")}
                    className={`h-5 ${
                      color === "red"
                        ? "dark:border-white border-black border-2"
                        : "border-grey-300"
                    } w-5 rounded-full`}
                    style={{ background: "red" }}
                  ></button>
                )}
                {variants &&
                Object.keys(variants).includes("yellow") &&
                Object.keys(variants["yellow"]).includes(size) && (
                  <button
                    onClick={() => refreshVariant(size, "yellow")}
                    className={`h-5 ${
                      color === "yellow"
                        ? "dark:border-white border-black border-2"
                        : "border-grey-300"
                    } w-5 rounded-full`}
                    style={{ background: "yellow" }}
                  ></button>
                )}

              {variants &&
                Object.keys(variants).includes("blue") &&
                Object.keys(variants["blue"]).includes(size) && (
                  <button
                    onClick={() => refreshVariant(size, "blue")}
                    className={`h-5 ${
                      color === "blue"
                        ? "dark:border-white border-black border-2"
                        : "border-grey-300"
                    } w-5 rounded-full`}
                    style={{ background: "blue" }}
                  ></button>
                )}

              {variants &&
                Object.keys(variants).includes("green") &&
                Object.keys(variants["green"]).includes(size) && (
                  <button
                    onClick={() => refreshVariant(size, "green")}
                    className={`h-5 ${
                      color === "green"
                        ? "dark:border-white border-black border-2"
                        : "border-grey-300"
                    } w-5 rounded-full`}
                    style={{ background: "green" }}
                  ></button>
                )}
            </div>
            <div class="flex ml-6 items-center">
                      <span class="mr-3">Size</span>
                      <div class="relative">
                        <select
                          onChange={(e) =>
                            refreshVariant(e.target.value, color)
                          }
                          value={size}
                          class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10"
                        >
                          {variants && variants[color]?.s && (
                            <option value={"s"}>S</option>
                          )}
                          {variants && variants[color]?.m && (
                            <option value={"m"}>M</option>
                          )}
                          {variants && variants[color]?.l && (
                            <option value={"l"}>L</option>
                          )}
                          {variants && variants[color]?.xl && (
                            <option value={"xl"}>XL</option>
                          )}
                          {variants && variants[color]?.xxl && (
                            <option value={"xxl"}>XXL</option>
                          )}
                        </select>
                        <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-4 h-4"
                            viewBox="0 0 24 24"
                          >
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
            </div>
            <div className="bg-white dark:bg-[#111827] transition-colors duration-300">
              <div className="max-w-4xl pt-4">
                <div className="flex flex-col flex-wrap gap-4">
                  <div className="flex flex-col space-y-4">
                    
                    <div className="flex space-x-2">
                      <div className="text-3xl font-semibold line-through text-gray-500 dark:text-gray-400">
                        ₹{productSlug.discountedPrice}
                      </div>
                      <div className="text-5xl font-bold text-pink-400 dark:text-[#DB2777]">
                        ₹{productSlug.Price}
                      </div>
                      <div className="text-lg text-gray-500 dark:text-gray-400">
                        (Free Shipping)
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-3">
                      <Input
                        onChange={onchangePin}
                        className="w-64 dark:bg-[#1F2937] dark:border-gray-600 focus:outline-none focus:border-[#DB2777] dark:text-white"
                        placeholder="Enter your Pincode"
                      />
                      <Button
                        onClick={checkServiceAvailability}
                        className="text-black dark:text-white bg-pink-400 hover:bg-[#DB2777] dark:bg-[#DB2777] dark:hover:bg-pink-400 rounded-full"
                      >
                        Check
                      </Button>
                    </div>
                    {!ServiceAvailability && ServiceAvailability != null && (
                      <div>
                        <p className="text-red-500 text-xl dark:text-red-700">
                          Sorry, We do not deliver to this pincode yet
                        </p>
                      </div>
                    )}
                    {ServiceAvailability && ServiceAvailability != null && (
                      <div>
                        <p className="text-green-500 text-xl dark:text-green-700">
                          Yes , We do deliver at this Pincode
                        </p>
                      </div>
                    )}
                    <div className="flex space-x-4">
                      <Button
                        onClick={handleBuyNow}
                        className="text-black dark:text-white bg-pink-400 hover:bg-[#DB2777] dark:bg-[#DB2777] dark:hover:bg-pink-400 rounded-full"
                      >
                        Buy Now
                      </Button>
                      <Button
                        className="text-black dark:text-white bg-pink-400 hover:bg-[#DB2777] dark:bg-[#DB2777] dark:hover:bg-pink-400 rounded-full"
                        onClick={handleCart}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                      Exciting Offers:
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircleIcon className="text-green-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Get Flat 10% off on all prepaid orders above ₹249 Use
                        coupon CODESWEAR10
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircleIcon className="text-green-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Get Customized T-Shirts at only ₹549.
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircleIcon className="text-green-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Buy 2 get 1 Free and buy 3 get 2 Free on all Caps -
                        Prepaid orders only.
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircleIcon className="text-green-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Buy 2 get 1 Free and buy 3 get 2 Free on all Mousepads -
                        Prepaid orders only.
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
  );
}

function CheckCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24" // Corrected viewBox attribute
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

export default Product;
