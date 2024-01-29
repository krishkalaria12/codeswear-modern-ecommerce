"use client";
import InputForm from "@/components/form/Input";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import authService from "@/lib/appwrite/authConfig";
import ButtonForm from "@/components/form/Button";
import { useRouter } from 'next/navigation'
import Loading from "../Loading";

function myAccount() {

  const router = useRouter()
  const [data, setData] = useState({});
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    accountDetails();
    setisLoading(false);
  });

  const accountDetails = async () => {
    const data = await authService.getCurrentUser();
    if (data==undefined || data==null) {
      router.push('/login')
      toast.error("Login to view your account")
    }
    else {
      setData(data);
    }
  };

  const { $createdAt, name, email, phone } = data;

  const formattedData = (dateat) => {
    const timestamp = String(dateat);
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return formattedDate;
  };

  const handleSubmit = () => {

  }

  if (isLoading==true) {
    return <Loading />
  }

  if (data!=undefined || data.length!=0) {
    return (
      <>
        <ToastContainer />
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
          <div className="mt-10 sm:w-[100%] flex-col md:flex-col dark:bg-gray-800 p-8 rounded-xl flex">
            <div className="w-full">
              <h3 className="text-2xl mb-2 font-semibold dark:text-white text-black">
                Account Information
              </h3>
              <div className="flex sm:flex-row flex-col items-center justify-between w-full sm:space-y-0 space-y-3">
                <div className="sm:w-2/5 w-full">
                  <InputForm
                    placeholder="john.doe@gmail.com"
                    label="Email Address"
                    key="email"
                    type="email"
                    name="email"
                    readOnly={true}
                    value={email}
                  />
                </div>
                <div className="sm:w-2/5 w-full">
                  <InputForm
                    placeholder="1234567890"
                    label="Phone Number"
                    key="phone"
                    type="text"
                    name="phone"
                    readOnly={true}
                    value={phone}
                  />
                </div>
              </div>
              <div className="flex mt-2 sm:flex-row flex-col items-center justify-between w-full sm:space-y-0 space-y-3">
                <div className="sm:w-2/5 w-full">
                  <InputForm
                    readOnly={true}
                    placeholder="First Name"
                    label="First Name"
                    type="text"
                    key="firstname"
                    name="firstname"
                    value={name}
                  />
                </div>
                <div className="sm:w-2/5 w-full">
                  <InputForm
                    readOnly={true}
                    placeholder="Created At"
                    label="Created At"
                    type="text"
                    key="created"
                    name="created"
                    value={formattedData($createdAt)}
                  />
                </div>
              </div>
            </div>
            <form className="space-y-6 w-full" method="POST">
              <h3 className="text-2xl mt-4 font-semibold dark:text-white text-black">Change Password</h3>
              
              <div className="flex sm:flex-row flex-col items-center justify-between w-full sm:space-y-0 space-y-3">
                <div className="sm:w-2/5 w-full">
                  <InputForm
                      placeholder="12345678"
                      label="Current Password"
                      key="password"
                      type="password"
                      name="password"
                      readOnly={false}
                      />
                </div>
                <div className="sm:w-2/5 w-full">
                <InputForm
                    placeholder="1234567890"
                    label="New Password"
                    key="newpassword"
                    type="newpassword"
                    name="newpassword"
                    readOnly={false}
                  />
                </div>
              </div>
              <ButtonForm className={"w-[30%] mx-auto"} onClick={handleSubmit} field={"Submit"} />
            </form>
          </div>
        </div>
      </>
    );
  }
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

export default myAccount;
