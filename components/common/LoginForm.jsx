import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <form action="#" onSubmit={handleSubmit} className="mt-10 h-full w-full">
        <div className=" flex flex-col w-full h-full ">
          <div className="mb-6">
            <label className="block mb-2 text-gray-500 font-regular">Email</label>
            <input
              type="email"
              placeholder="hasan@gmail.com"
              required
              className="w-full border-2 placeholder-black border-black px-4 py-4 rounded"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-gray-500 font-regular">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full border-2 placeholder-black border-black px-4 py-4 rounded pr-10"
                required
              />
              <span
                className="absolute right-2 top-2 cursor-pointer"
                onClick={handleTogglePassword}
              >
                {showPassword ? (
                  <i className="far fa-eye"></i>
                ) : (
                  <i className="far fa-eye-slash"></i>
                )}
              </span>
            </div>
          </div>
          <div className="col-span-2">
            <div className=" flex items-center justify-between">
            <div className=" flex items-center">
              <input type="checkbox" id="agreement" className="mr-2 mt-[5px]" />
              <label htmlFor="agreement" className="font-[300]">Keep me logged in</label>
              </div>
              <div className="">
                    <Link
                    href="#" 
                    className="hover:underline font-[300]"
                    >
                        Forget Password?
                    </Link>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <button className="bg-[#ff3294] text-white font-semibold py-4 px-4 rounded w-full uppercase mt-4 hover:bg-black transition-all duration-300 ease-out">
             log in
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
