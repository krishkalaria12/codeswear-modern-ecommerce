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
  const router = useRouter();
  const [data, setData] = useState({});
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verifycode, setVerifycode] = useState('');
  const [phonePassword, setphonePassword] = useState('');
  const [isLoading, setisLoading] = useState(true);
  const [isPhoneNumberVerified, setIsPhoneNumberVerified] = useState(false);


  useEffect(() => {
    accountDetails();
    setisLoading(false);
  }, []);

  const accountDetails = async () => {
    const data = await authService.getCurrentUser();
    if (data == undefined || data == null) {
      toast.success("Log in to view your account");
      setTimeout(() => {
        router.push("/login")
      }, 2100);
    } else {
      setData(data);
    }
  };

  const { $createdAt, $id, name, email, phone, phoneVerification } = data;

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

  const handleSubmitPhone = (e) => {
    e.preventDefault();

    const response = setPhoneNumberFunction(phoneNumber)
    if (response===undefined) {
      toast.error('Invalid phone number format. Please enter a 10-digit number.');
    }
    else {
      const ccphoneNumber = "+91"+phoneNumber;
      if (phonePassword=="" || phonePassword.length==0) {
        toast.error("Enter the Password to Verify your phone number");
      }
      createPhoneNumber(ccphoneNumber);
    }
  };

  const validateVC = (value) => {
    const testing = /^\d{6}$/
    return value && testing.test(value);
  }

  const createPhoneNumber = async (phoneNumber) => {
    try {
      const data = await authService.updatePhone(phoneNumber, phonePassword);
      if (data) {
        setIsPhoneNumberVerified(true);
        const verification = await authService.createPhoneVerification();
        if (verification) {
          toast.success('Verification code sent successfully');
        }
        else {
          toast.error("Error Sending Verification Code");
        }
      }
    } catch (error) {
      console.error(error);
      toast.error('Error creating phone number: '+ error);
    }
  };

  const handleSubmitVerify = async (e) => {
    e.preventDefault();

    if (!validateVC(verifycode)) {
      toast.error('Enter a valid verification code');
      return;
    }

    try {
      const verifyCodeResponse = await authService.updatePhoneVerification(verifycode, $id);
      if (verifyCodeResponse) {
        toast.success('Phone number verified successfully');
      } else {
        toast.error('Failed to verify phone number');
      }
    } catch (error) {
      console.error(error);
      toast.error('Error verifying phone number : ' + error.message);
    }
  };

  const handleSubmitPass = (e) => {
    e.preventDefault();

    if (!currentPassword || !newPassword) {
      toast.error("Current and New Password are required");
      return;
    }

    if (currentPassword == newPassword) {
      toast.error("Current and New Password cannot be same!");
    }

    if (newPassword.length < 8) {
      toast.error("New Password must be at least 8 characters");
      return;
    }

    updatePass(newPassword, currentPassword);
  };

  const setPhoneNumberFunction = (value) => {
    const isValidPhoneNumber = /^\d{10}$/.test(value);
    if (isValidPhoneNumber) {
      return value;
    }
    else {
      return undefined;
    }
  };
  

  const updatePass = async (newPass, currentPass) => {
    try {
      const data = await authService.updatePassword(newPass, currentPass);
      if (data) {
        toast.success("Password updated successfully");
      } else {
        toast.error("Couldn't update password");
      }
    } catch (error) {
      toast.error("Couldn't update password! Check Credentials");
    }
    setCurrentPassword('');
    setNewPassword('');
  };

  if (isLoading) {
    return <Loading />;
  }

  if (data!=undefined || data.length!=0) {
    return (
      <>
        <ToastContainer autoClose={1900} />
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
                {phone!="" && <div className="sm:w-2/5 w-full">
                  <InputForm
                    placeholder="1234567890"
                    label="Phone Number"
                    key="phone"
                    type="text"
                    name="phone"
                    readOnly={true}
                    value={phone}
                  />
                </div>}
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
            {(phone=="" && phoneVerification==false) && <form className="space-y-6 w-full" method="POST">
              <h3 className="text-2xl mt-4 font-semibold dark:text-white text-black">Update Phone Number</h3>
              
              <div className="flex flex-col items-center justify-between w-full sm:space-y-0 gap-y-6 space-y-3">
                {!isPhoneNumberVerified ?
                <>
                  <div className="flex sm:flex-row flex-col items-center justify-between w-full sm:space-y-0 space-y-3">
                  <div className="sm:w-2/5 w-full">
                    <InputForm
                      placeholder="12345678"
                      label="Enter your Phone Number"
                      type="tel"
                      name="changephone"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <div className="sm:w-2/5 w-full">
                    <InputForm
                      placeholder="12345678"
                      label="Enter Password to update Phone Number"
                      type="password"
                      name="phonepassword"
                      value={phonePassword}
                      onChange={(e) => setphonePassword(e.target.value)}
                    />
                  </div>
              </div>
              <ButtonForm className={"w-[30%] mx-auto"} onClick={(e) => handleSubmitPhone(e)} field={"Submit"} />
                </>: 
                  <div className="flex flex-col items-center justify-between w-full sm:space-y-0 gap-y-6 space-y-3">
                    <div className="sm:w-2/5 w-full">
                      <InputForm
                        placeholder="12345678"
                        label="Enter Verification Code"
                        type="tel"
                        name="verifycode"
                        value={verifycode}
                        onChange={(e) => setVerifycode(e.target.value)}
                      />
                    </div>
                    <ButtonForm className={"w-[30%] mx-auto"} onClick={(e) => handleSubmitVerify(e)} field={"Verify"} />
                  </div>
                  }
              </div>
            </form>}
            <form className="space-y-6 w-full" method="POST">
              <h3 className="text-2xl mt-4 font-semibold dark:text-white text-black">Change Password</h3>
              
              <div className="flex sm:flex-row flex-col items-center justify-between w-full sm:space-y-0 space-y-3">
                <div className="sm:w-2/5 w-full">
                      <InputForm
                        placeholder="12345678"
                        label="Current Password"
                        type="password"
                        name="currentPassword"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                      />
                    </div>
                    <div className="sm:w-2/5 w-full">
                      <InputForm
                        placeholder="1234567890"
                        label="New Password"
                        type="password"
                        name="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </div>
              </div>
              <ButtonForm className={"w-[30%] mx-auto"} onClick={(e) => handleSubmitPass(e)} field={"Submit"} />
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
