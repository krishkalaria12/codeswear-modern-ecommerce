'use client';
import InputForm from "@/components/form/Input";
import FormFooter from "@/components/form/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from "next/image";
import ButtonForm from "@/components/form/Button";
import { useState } from 'react';
import authService from '@/lib/appwrite/authConfig'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import {login} from "@/redux/features/authSlice"

function Signup() {

  const dispatch = useDispatch();
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(formData.email);
  };

  const validatePassword = () => {
    return formData.password.length >= 8;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailValid = validateEmail();
    const passwordValid = validatePassword();

    if (!emailValid) {
      toast.error("Invalid Email");
    }

    if (!passwordValid) {
      toast.error("Password Must be at least 8  characters")
    }

    if (formData.password !== formData.confirmpassword) {
      toast.error("Password and Confirm Password do not match");
    }    
    

    if (emailValid && passwordValid) {
      create(formData);
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmpassword: ''
      });
    }
  };

  const create = async (data) => {
    try {
      const createdUserData = await authService.createAccount({
        email: data.email,
        password: data.password,
        name: data.name,
      });
  
      if (createdUserData) {
        const currentUserData = await authService.getCurrentUser();
        if (currentUserData) {
          dispatch(login(currentUserData));
          toast.success("Account created successfully");
          setTimeout(() => {
            router.push("/myaccount");
          }, 2000);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      throw error;
    }
  };  

  return (
    <>
    <ToastContainer />
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          src="/codeswearcircle.png"
          alt="Your Company"
          priority={true}
          height={40}
          width={60}
          className="mx-auto h-16 w-auto"
        />
        <h2 className="dark:text-gray-200 mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Register your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" method="POST">
          <div>
            <InputForm readOnly={false} value={formData.name} onChange={handleChange} placeholder="john doe" label="Enter your Name" type="text" key="name" name="name" />
          </div>
          <div>
            <InputForm readOnly={false} value={formData.email} onChange={(e) => handleChange(e)} placeholder="john.doe@gmail.com" label="Enter your email" key="email" type="email" name="email" />
          </div>
          <div>
            <InputForm readOnly={false} value={formData.password} onChange={(e) => handleChange(e)} placeholder="123456" label="Enter your Password" type="password" key="password" name="password" />
          </div>
          <div>
            <InputForm readOnly={false} value={formData.confirmpassword} onChange={(e) => handleChange(e)}  placeholder="123456" label="Confirm your Password" key="confirmpassword" type="password" name="confirmpassword" />
          </div>
          <div>
            <ButtonForm disabled={false} onClick={(e) => handleSubmit(e)}  field={"Register"} />
          </div>
        </form>

        <FormFooter member="already a member " link={"login"} action={"Login"} />
      </div>
    </div>
  </>
  );
}

export default Signup;