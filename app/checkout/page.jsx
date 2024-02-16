'use client'
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "@/redux/features/Cartslice";
import Loading from "../Loading";
import InputForm from "@/components/form/Input";
import ButtonForm from "@/components/form/Button";
import Image from "next/image";
import TrashIcon from "@/components/TrashIcon";
import {toast, ToastContainer} from "react-toastify";
import { v4 as uuidv4 } from 'uuid';
import { createOrder } from "@/actions/createOrder";
import accountDetails from "@/actions/getUser";

function Checkout() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const [user, setUser] = useState(false);
  const [userId, setUserId] = useState("");
  const [noItem, setNoItem] = useState(false);
  const [firstRender, setFirstRender] = useState(true);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    country: "",
    city: "",
    state: "",
    postalCode: "",
    flatno: "",
    phoneno: "",
    email: "",
    id: "",
    userid: "",
  });

  useEffect(() => {
    setFirstRender(false);
    const userData = async () => {
      const data = await accountDetails();
      if (data!=null) {
        setUser(true);
        setUserId(data.$id);
      }
      else {
        setNoItem(true);
      }
    }
    userData();
  }, []);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (!storedCart || storedCart.items.length === 0) {
      setNoItem(true);
    } else {
      setNoItem(false);
    }
  }, [items]);

  const handleRemoveProduct = (item) => {
    dispatch(removeItem(item));
  };
  // console.log(items);

  const handleSubmitCheckout = async () => {
    if (items.length === 0) {
      toast.error("Your Cart is empty!");
    } else if (!isValidPhoneNumber(formData.phoneno)) {
      toast.error("Enter a valid 10 digit phone number");
    } else if (!isValidPostalCode(formData.postalCode)) {
      toast.error("Enter a valid 6 digit postal code");
    } else if (!isValidEmail(formData.email)) {
      toast.error("Enter a valid email");
    } else if (user==false) {
      toast.error("Please Login before Checkout");
    } else if (
      !formData.firstname ||
      !formData.email ||
      !formData.phoneno ||
      !formData.lastname ||
      !formData.city ||
      !formData.country ||
      !formData.postalCode ||
      !formData.flatno ||
      !formData.state
    ) {
      toast.error("Please Enter all the fields");
    } else {
      const id = uuidv4();
      formData.id = id;
      formData.userid = userId;
      const res = await createOrder(formData, items);
      console.log(res);
      setFormData({
        firstname: "",
        lastname: "",
        country: "",
        city: "",
        state: "",
        postalCode: "",
        flatno: "",
        phoneno: "",
        email: "",
        id: "",
        userid: "",
      });
    }
  };  
  
  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const isValidPhoneNumber = (phone) => /^\d{10}$/.test(phone);
  const isValidPostalCode = (postalCode) => /^\d{6}$/.test(postalCode);
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (firstRender) {
    return <Loading />;
  }

  return (
    <>
      <ToastContainer />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
        <h2 className="dark:text-gray-200 mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {noItem ? "Checkout For your Order" : "No Items Available"}
        </h2>
        <div className="mt-10 sm:w-[100%] flex-col md:flex-row dark:bg-gray-800 p-8 rounded-xl flex">
          <form className="space-y-6 w-full md:w-1/2" method="POST">
            <h3 className="text-2xl font-semibold dark:text-white text-black">
              Contact Information
            </h3>
            <div className="flex sm:flex-row flex-col items-center justify-between w-full sm:space-y-0 space-y-3">
              <div className="sm:w-2/5 w-full">
                <InputForm
                  readOnly={false}
                  placeholder="First Name"
                  label="Enter your First Name"
                  type="text"
                  key="firstname"
                  name="firstname"
                  value={formData.firstname}
                      onChange={(e) => handleInputChange("firstname", e.target.value)}
                />
              </div>
              <div className="sm:w-2/5 w-full">
                <InputForm
                  readOnly={false}
                  placeholder="Last Name"
                  label="Enter your Last Name"
                  type="text"
                  key="lastname"
                  name="lastname"
                  value={formData.lastname}
                  onChange={(e) => handleInputChange("lastname", e.target.value)}
                />
              </div>
            </div>
            <div className="flex sm:flex-row flex-col items-center justify-between w-full sm:space-y-0 space-y-3">
              <div className="sm:w-2/5 w-full">
                <InputForm
                  readOnly={false}
                  placeholder="Country"
                  label="Country"
                  type="text"
                  key="country"
                  name="country"
                  value={formData.country}
                  onChange={(e) => handleInputChange("country", e.target.value)}
                />
              </div>
              <div className="sm:w-2/5 w-full">
                <InputForm
                  readOnly={false}
                  placeholder="City"
                  label="City"
                  type="text"
                  key="city"
                  name="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                />
              </div>
            </div>
            <div className="flex sm:flex-row flex-col items-center justify-between w-full sm:space-y-0 space-y-3">
              <div className="sm:w-2/5 w-full">
                <InputForm
                  readOnly={false}
                  placeholder="State"
                  label="State"
                  type="text"
                  key="state"
                  name="state"
                  value={formData.state}
                  onChange={(e) => handleInputChange("state", e.target.value)}
                />
              </div>
              <div className="sm:w-2/5 w-full">
                <InputForm
                  readOnly={false}
                  placeholder="Postal Code"
                  label="Postal Code"
                  type="number"
                  key="postal"
                  name="postal"
                  value={formData.postalCode}
                  onChange={(e) => handleInputChange("postalCode", e.target.value)}
                />
              </div>
            </div>
            <div className="flex sm:flex-row flex-col items-center justify-between w-full sm:space-y-0 space-y-3">
              <div className="sm:w-2/5 w-full">
                <InputForm
                  readOnly={false}
                  placeholder="Flat No, Street No"
                  label="Enter the Flat No"
                  type="number"
                  key="flatnumber"
                  name="flatnumber"
                  value={formData.flatno}
                  onChange={(e) => handleInputChange("flatno", e.target.value)}
                />
              </div>
              <div className="sm:w-2/5 w-full">
                <InputForm
                  readOnly={false}
                  placeholder="1234567890"
                  label="Phone Number"
                  type="number"
                  key="phone"
                  name="phone"
                  value={formData.phoneno}
                  onChange={(e) => handleInputChange("phoneno", e.target.value)}
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
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </div>
          </form>
          <div className="md:w-1/2 w-full mx-auto sm:mt-0 mt-4 p-2 sm:p-8 bg-white dark:bg-gray-800">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Order summary
            </h2>
            <div className="space-y-4">
              {items.length !== 0 &&
                items.map((item) => (
                  <div
                    className="flex items-start justify-between"
                    key={item.id}
                  >
                    <Image
                      alt="Basic Tee Sienna"
                      className="h-16 w-16 object-cover"
                      height="64"
                      src={`${item.image ? item.image : "/placeholder.svg"}`}
                      style={{
                        aspectRatio: "64/64",
                        objectFit: "cover",
                      }}
                      width="64"
                    />
                    <div className="ml-4 flex-1">
                      <p className="font-medium text-xl text-gray-900 dark:text-white">
                        {item.name} ({item.size.toUpperCase()}/{item.color})
                      </p>
                      <div className="flex space-x-2">
                        <p className="text-base text-gray-600 dark:text-gray-400">
                          Quantity:
                        </p>
                        <p className="text-base text-gray-600 dark:text-gray-400">
                          {item.quantity}
                        </p>
                      </div>
                    </div>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      ₹ {item.price * item.quantity}
                    </p>
                    <span onClick={() => handleRemoveProduct(item)}>
                      <TrashIcon className="ml-4 h-5 w-5 text-gray-600 cursor-pointer dark:text-gray-400" />
                    </span>
                  </div>
                ))}
            </div>
            <div className={"flex flex-col items-center space-y-4"}>
              <div className={"flex w-full mt-6 items-center justify-between"}>
                <p>
                  Shipping Charges
                </p>
                <p>
                  ₹ 50
                </p>
              </div>
              <div className={"flex w-full mt-6 items-center justify-between"}>
                <p>
                  Taxes
                </p>
                <p>
                  ₹ 40
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-between mb-4">
                <span className="text-lg font-medium text-gray-900 dark:text-white">
                  Total
                </span>
                <span className="text-lg font-medium text-gray-900 dark:text-white">
                  ₹ {!noItem ? total + 50 + 40 : 0}
                </span>
              </div>
              <ButtonForm
                  disabled={noItem}
                  onClick={handleSubmitCheckout}
                className="mx-auto w-[30%] cursor-pointer"
                field="Checkout"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
