import { useState } from "react";
import {BsEye,BsEyeSlash} from "react-icons/bs"

function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return (
    <>
      <form action="#" onSubmit={handleSubmit} className="mt-10 h-full w-full">
        <div className=" flex flex-col w-full h-full ">
          <div className="mb-6">
            <label className="block mb-2 text-gray-500 font-regular ">Name</label>
            <input
              type="text" 
              placeholder="Rashed Kabir"
              className="w-full border-2 placeholder-black border-black  px-4 py-4  rounded"
            />
          </div>

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
                className="absolute right-6 top-5 text-gray-400 cursor-pointer"
                onClick={handleTogglePassword}
              >
                {showPassword ? (
                  <BsEye className="w-[20px] h-[20px]"/>
                ) : (
                  
                  <BsEyeSlash className="w-[20px] h-[20px]"/>
                )}
              </span>
            </div>
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-gray-500 font-regular">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full border-2 placeholder-black border-black px-4 py-4 rounded pr-10"
                required
              />
              <span
                className="absolute right-6 top-5 text-gray-400 cursor-pointer"
                onClick={handleTogglePassword}
              >
                {showPassword ? (
                  <BsEye className="w-[20px] h-[20px]"/>
                ) : (
                  
                  <BsEyeSlash className="w-[20px] h-[20px]"/>
                )}
              </span>
            </div>
          </div>

          <div className="col-span-2">
            <div className="  flex items-start">
              <input type="checkbox" id="agree_to_policy" className="mr-2 mt-[5px]" />
              <div className="">
              <label htmlFor="agree_to_policy" className="font-regular">
                By clicking &quot;SIGN UP&quot; I agree to the Terms and
                Conditions and Privacy Policy.
              </label>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <button className="bg-[#ff3294] text-white font-semibold py-4 px-4 rounded w-full uppercase mt-4 hover:bg-black transition-all duration-300 ease-out">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default SignupForm;
