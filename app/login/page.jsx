import Image from "next/image";
import InputForm from "@/components/form/Input";
import FormFooter from "@/components/form/Footer";
import Link from "next/link";
import ButtonForm from "@/components/form/Button";

function Login() {
  return (
    <>
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
        <form className="space-y-6" action="#" method="POST">
          <div>
            <InputForm placeholder="john.doe@gmail.com" label="Enter your email" type="email" key="email" name="email" />
          </div>

          <div>
            <InputForm placeholder="123456" label="Enter your Password" type="password" key="password" name="email" />
          </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link href={"#"} className="font-semibold text-pink-600 hover:text-pink-500 dark:text-pink-500 dark:hover:text-pink-600">
                  Forgot password?
                </Link>
              </div>
            </div>

          <div>
            <ButtonForm field={"Log in"} />
          </div>
        </form>

        <FormFooter member="not a member yet" link={"signup"} action={"Register"} />
      </div>
    </div>
  </>
  );
}

export default Login;
