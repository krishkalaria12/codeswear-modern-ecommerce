import Image from "next/image";
import InputForm from "@/components/form/Input";
import FormFooter from "@/components/form/Footer";
import Link from "next/link";
import ButtonForm from "@/components/form/Button";

function Signup() {
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
          Register your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <InputForm placeholder="john doe" label="Enter your Name" type="text" key="name" name="name" />
          </div>
          <div>
            <InputForm placeholder="john.doe@gmail.com" label="Enter your email" key="email" type="email" name="email" />
          </div>

          <div>
            <InputForm placeholder="123456" label="Enter your Password" type="password" key="password" name="password" />
          </div>
          <div>

            <InputForm placeholder="123456" label="Confirm your Password" key="confirmpassword" type="password" name="confirmpass" />
          </div>
          <div>
            <ButtonForm field={"Register"} />
          </div>
        </form>

        <FormFooter member="already a member " link={"login"} action={"Login"} />
      </div>
    </div>
  </>
  );
}

export default Signup;
