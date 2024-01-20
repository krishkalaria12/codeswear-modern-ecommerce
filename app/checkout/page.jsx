import Image from "next/image";
import InputForm from "@/components/form/Input";
import ButtonForm from "@/components/form/Button";

function Checkout() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="dark:text-gray-200 mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Checkout For your Order
          </h2>
        </div>

        <div className="mt-10 sm:w-[100%] flex-col md:flex-row dark:bg-gray-800 p-8 rounded-xl flex">
          <form className="space-y-6 w-full md:w-1/2" action="#" method="POST">
            <h3 className="text-2xl font-semibold dark:text-white text-black">
              Contact Information
            </h3>
            <div className="flex sm:flex-row flex-col items-center justify-between w-full sm:space-y-0 space-y-3">
              <div className="sm:w-2/5 w-full">
                <InputForm
                  placeholder="First Name"
                  label="Enter your First Name"
                  type="text"
                  key="firstname"
                  name="firstname"
                />
              </div>
              <div className="sm:w-2/5 w-full">
                <InputForm
                  placeholder="Last Name"
                  label="Enter your Last Name"
                  type="text"
                  key="lastname"
                  name="lastname"
                />
              </div>
            </div>
            <div className="flex sm:flex-row flex-col items-center justify-between w-full sm:space-y-0 space-y-3">
              <div className="sm:w-2/5 w-full">
                <InputForm
                  placeholder="Country"
                  label="Country"
                  type="text"
                  key="country"
                  name="country"
                />
              </div>
              <div className="sm:w-2/5 w-full">
                <InputForm
                  placeholder="City"
                  label="City"
                  type="text"
                  key="city"
                  name="city"
                />
              </div>
            </div>
            <div className="flex sm:flex-row flex-col items-center justify-between w-full sm:space-y-0 space-y-3">
              <div className="sm:w-2/5 w-full">
                <InputForm
                  placeholder="State"
                  label="State"
                  type="text"
                  key="state"
                  name="state"
                />
              </div>
              <div className="sm:w-2/5 w-full">
                <InputForm
                  placeholder="Postal Code"
                  label="Postal Code"
                  type="number"
                  key="postal"
                  name="postal"
                />
              </div>
            </div>
            <div className="flex sm:flex-row flex-col items-center justify-between w-full sm:space-y-0 space-y-3">
              <div className="sm:w-2/5 w-full">
                <InputForm
                  placeholder="Flat No, Street No"
                  label="Enter the Flat No"
                  type="text"
                  key="flatnumber"
                  name="flatnumber"
                />
              </div>
              <div className="sm:w-2/5 w-full">
                <InputForm
                  placeholder="1234567890"
                  label="Phone Number"
                  type="number"
                  key="phone"
                  name="phone"
                />
              </div>
            </div>

            <div>
              <InputForm
                placeholder="john.doe@gmail.com"
                label="Enter your email"
                key="email"
                type="email"
                name="email"
              />
            </div>
          </form>
          <div className="md:w-1/2 w-full mx-auto sm:mt-0 mt-4 p-2 sm:p-8 bg-white dark:bg-gray-800">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Order summary
            </h2>
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <Image
                  alt="Basic Tee Sienna"
                  className="h-16 w-16 object-cover"
                  height="64"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "64/64",
                    objectFit: "cover",
                  }}
                  width="64"
                />
                <div className="ml-4 flex-1">
                  <p className="font-medium text-gray-900 dark:text-white">
                    Basic Tee
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Sienna
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Large
                  </p>
                </div>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  $32.00
                </p>
                <p className="ml-4">1</p>
                <TrashIcon className="ml-4 h-5 w-5 text-gray-600 dark:text-gray-400" />
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-between mb-2">
                <span className="text-gray-900 dark:text-white">Subtotal</span>
                <span className="text-gray-900 dark:text-white">$64.00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-900 dark:text-white">Shipping</span>
                <span className="text-gray-900 dark:text-white">$5.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-900 dark:text-white">Taxes</span>
                <span className="text-gray-900 dark:text-white">$5.52</span>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-between mb-4">
                <span className="text-lg font-medium text-gray-900 dark:text-white">
                  Total
                </span>
                <span className="text-lg font-medium text-gray-900 dark:text-white">
                  $75.52
                </span>
              </div>
              <ButtonForm className={"mx-auto w-[30%]"} field={"Checkout"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function TrashIcon(props) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}

export default Checkout;
