"use client";
import InputForm from "@/components/form/Input";
import FormFooter from "@/components/form/Footer";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import authService from "@/lib/appwrite/authConfig";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { login } from "@/redux/features/authSlice";
import ButtonForm from "@/components/form/Button";
import Image from "next/image";
import Loading from "../Loading";
import accountDetails from "@/actions/getUser";

function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(true);

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
      toast.error("Password Must be at least 8  characters");
    }

    if (emailValid && passwordValid) {
      loginMethod(formData);
      setFormData({
        email: "",
        password: "",
      });
    }
  };

  const loginMethod = async (data) => {
    setFormData({
      email: "",
      password: "",
    });
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login(userData));
          router.push("/myaccount");
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const userData = async () => {
      const data = await accountDetails();
      if (data) {
        router.push("/");
      } else {
        setLoading(false);
      }
    };
    userData();
  });

  if (loading == true) {
    return <Loading />;
  }

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
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" method="POST">
            <div>
              <InputForm
                readOnly={false}
                onChange={(e) => handleChange(e)}
                value={formData.email}
                placeholder="john.doe@gmail.com"
                label="Enter your email"
                type="email"
                key="email"
                name="email"
              />
            </div>

            <div>
              <InputForm
                readOnly={false}
                onChange={(e) => handleChange(e)}
                value={formData.password}
                placeholder="123456"
                label="Enter your Password"
                type="password"
                key="password"
                name="password"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link
                  href={"#"}
                  className="font-semibold text-pink-600 hover:text-pink-500 dark:text-pink-500 dark:hover:text-pink-600"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <div>
              <ButtonForm
                disabled={false}
                onClick={handleLogin}
                field={"Log in"}
              />
            </div>
          </form>

          <FormFooter
            member="not a member yet"
            link={"signup"}
            action={"Register"}
          />
        </div>
      </div>
    </>
  );
}

export default Login;
