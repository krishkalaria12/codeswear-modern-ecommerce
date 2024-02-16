import Testimonial from "@/components/Home/Testimonial";
import Image from "next/image";
import Link from "next/link";

function Home() {
  return (
    <div className="bg-white dark:bg-gray-800">
      <section className="text-black dark:text-gray-400 bg-white dark:bg-gray-800 body-font">
        <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font text-black sm:text-4xl text-3xl mb-4 font-medium dark:text-white">
              Explore Trendy Apparel {" "}
              <br className="hidden lg:inline-block" />
              for Every Style
            </h1>
            <p className="mb-8 leading-relaxed">
              Welcome to <span className="font-bond">CodesWear</span>, where style meets comfort! Discover a world of fashionable apparel, including trendy t-shirts, cozy sweatshirts, and stylish hoodies. Elevate your wardrobe with our premium collection of apparel that blends quality, comfort, and the latest fashion trends.
              <br />
              Embrace the perfect blend of style and functionality. Your journey to elevated fashion begins here at CodesWear. Browse our collection and redefine your style effortlessly.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
                Shop Now
              </button>
              <button className="ml-4 inline-flex dark:text-white text-black dark:bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 dark:hover:bg-gray-500 hover:text-white rounded text-lg">
                Explore More
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              width={500}
              height={500}
              src="/photo-1576566588028-4147f3842f27.avif"
            />
          </div>
        </div>
      </section>
      <section className="text-black dark:text-gray-400 bg-white dark:bg-gray-800 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-96 overflow-hidden">
                <Image
                  alt="hoodie"
                  width={300}
                  height={300}
                  className="rounded w-full object-cover object-center mb-2 transition-transform duration-300 hover:scale-110"
                  src="/oversizedtshirt.webp"
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">
                Trendy T-Shirts
              </h2>
              <p className="leading-relaxed text-base">
                Explore our collection of stylish and comfortable t-shirts.
                Perfect for casual wear and expressing your unique style.
              </p>
              <Link href={"/tshirts"}>
                <button className="flex mx-auto mt-6 text-white bg-pink-500 border-0 py-2 px-5 focus:outline-none hover:bg-pink-600 rounded">
                  Shop Now
                </button>
              </Link>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-96 overflow-hidden">
                <Image
                  alt="hoodie"
                  width={300}
                  height={300}
                  className="rounded w-full object-cover object-center mb-2 transition-transform duration-300 hover:scale-110"
                  src="/hoodiehome.webp"
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">
                Cozy Hoodies
              </h2>
              <p className="leading-relaxed text-base">
                Stay warm and stylish with our collection of cozy hoodies.
                Perfect for chilly days and relaxed weekends.
              </p>
              <Link href={"/hoodies"}>
                <button className="flex mx-auto mt-6 text-white bg-pink-500 border-0 py-2 px-5 focus:outline-none hover:bg-pink-600 rounded">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="text-black dark:text-gray-400 bg-white dark:bg-gray-800 body-font">
        <div className="container px-5 py-10 mx-auto flex flex-wrap">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-gray-800 text-2xl font-medium title-font dark:text-white">
            Simplified Shopping, Seamless Satisfaction
            </h1>
            <h2 className="text-sm mt-3 text-pink-600 dark:text-pink-400 tracking-widest font-medium title-font mb-1">
            Enhanced E-Commerce Experience: Elevating Every Interaction
            </h2>
          </div>
          <section class="text-gray-600 body-font">
  <div class="container px-5 mx-auto flex flex-wrap">
    <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-shrink-0 w-24 h-24 dark:bg-gray-900 bg-indigo-100 text-indigo-500 dark:text-indigo-700 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="title-font text-gray-900 mb-1 text-xl dark:text-gray-300 font-bold">Curated Collections</h2>
          <p class="leading-relaxed dark:text-gray-400 text-gray-600">Discover thoughtfully curated product selections that align with the latest trends and your unique style.</p>
        </div>
      </div>
    </div>
    <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">2</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-shrink-0 w-24 h-24 dark:bg-gray-900 bg-indigo-100 text-indigo-500 dark:text-indigo-700 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="title-font text-gray-900 mb-1 text-xl dark:text-gray-300 font-bold">Effortless Navigation</h2>
          <p class="leading-relaxed dark:text-gray-400 text-gray-600">Seamlessly browse through our user-friendly interface for a hassle-free shopping experience.</p>
        </div>
      </div>
    </div>
    <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">3</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-shrink-0 w-24 h-24 dark:bg-gray-900 bg-indigo-100 text-indigo-500 dark:text-indigo-700 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
            <circle cx="12" cy="5" r="3"></circle>
            <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
          </svg>
        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="title-font text-gray-900 mb-1 text-xl dark:text-gray-300 font-bold">Secure Transactions</h2>
          <p class="leading-relaxed dark:text-gray-400 text-gray-600">Shop with confidence knowing that your transactions are secure, ensuring a safe and trustworthy buying process</p>
        </div>
      </div>
    </div>
    <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">4</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-shrink-0 w-24 h-24 dark:bg-gray-900 bg-indigo-100 text-indigo-500 dark:text-indigo-700 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="title-font text-gray-900 mb-1 text-xl dark:text-gray-300 font-bold">Streamlined Shopping: Elevate Your Experience</h2>
          <p class="leading-relaxed dark:text-gray-400 text-gray-600">Simplify your shopping experience with our intuitive interface. Effortless navigation, seamless transactions, and curated collections - delivering an unparalleled user experience at your fingertips.</p>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
      </section>
      <section className=" dark:text-gray-400 bg-white dark:bg-gray-800 body-font text-gray-600">
        <div className="container px-5 py-10 mx-auto">
          <h1 className="text-3xl text-gray-900 font-medium title-font dark:text-white mb-12 text-center">
            Customer Reviews
          </h1>
          <div className="flex flex-wrap -m-4">
            <Testimonial name={"Krish"} description={"Exceptional quality and on-trend styles! I love the t-shirt I bought from CodesWear. Comfortable, stylish, and delivered with speed. A go-to destination for fashion-forward shopping!"} />
            <Testimonial description={"Excellent quality! The t-shirt I bought is super comfortable and the print is vibrant. Will definitely shop here again."} name={"Emily Johnson"} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

function CheckIcon(props) {
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
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function LockIcon(props) {
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
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function ReceiptIcon(props) {
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
      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z" />
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
      <path d="M12 17V7" />
    </svg>
  );
}

function ScalingIcon(props) {
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
      <path d="M21 3 9 15" />
      <path d="M12 3H3v18h18v-9" />
      <path d="M16 3h5v5" />
      <path d="M14 15H9v-5" />
    </svg>
  );
}

function SettingsIcon(props) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function ShipIcon(props) {
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
      <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76" />
      <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" />
      <path d="M12 10v4" />
      <path d="M12 2v3" />
    </svg>
  );
}

function StoreIcon(props) {
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
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
      <path d="M2 7h20" />
      <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
    </svg>
  );
}
