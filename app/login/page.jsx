'use client'
import InputForm from "@/components/form/Input";
import FormFooter from "@/components/form/Footer";
import Link from "next/link";
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import authService from '@/lib/appwrite/authConfig'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import {login} from "@/redux/features/authSlice"
import ButtonForm from "@/components/form/Button";

function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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

  const handleLogin = async (e) => {
    e.preventDefault();

    const emailValid = validateEmail();
    const passwordValid = validatePassword();

    if (!emailValid) {
      toast.error("Invalid Email");
    }

    if (!passwordValid) {
      toast.error("Password Must be at least 8  characters")
    }

    if (emailValid && passwordValid) {
      loginMethod(formData);
      setFormData({
        email: '',
        password: '',
      });
    }
  };

  const loginMethod = async(data) => {
    setFormData({
      email: '',
      password: '',
    });
    try {
        const session = await authService.login(data)
        if (session) {
            const userData = await authService.getCurrentUser()
            if (userData) {
                dispatch(login(userData))
                toast.success("Logged In successfully")
                setTimeout(() => {
                  router.push("/")
                }, 2000);
            }
        }
    } catch (error) {
        throw error
    }
}

  return (
    <>
    <ToastContainer />
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          src="https://tailwindui.com/img/logos/mark.svg?color=pink&shade=600"
          alt="Your Company"
        //   height={40}
        //   width={60}
          className="mx-auto h-10 w-auto"
        />
        <h2 className="dark:text-gray-200 mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" method="POST">
          <div>
            <InputForm onChange={(e) => handleChange(e)} value={formData.email} placeholder="john.doe@gmail.com" label="Enter your email" type="email" key="email" name="email" />
          </div>

          <div>
            <InputForm onChange={(e) => handleChange(e)} value={formData.password} placeholder="123456" label="Enter your Password" type="password" key="password" name="password" />
          </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link href={"#"} className="font-semibold text-pink-600 hover:text-pink-500 dark:text-pink-500 dark:hover:text-pink-600">
                  Forgot password?
                </Link>
              </div>
            </div>

          <div>
            <ButtonForm onClick={handleLogin} field={"Log in"} />
          </div>
        </form>

        <FormFooter member="not a member yet" link={"signup"} action={"Register"} />
      </div>
    </div>
  </>
  );
}

export default Login;
