import Seo from "@/components/common/Seo";
import SignupForm from "@/components/common/SignupForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function signup() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Seo pageTitle="Sign Up" />
      {/*  custom header  */}
      <div className="bg-[#f6f9fb]">
        <header className=" z-[99] top-0 left-0 right-0  py-[20px] px-[60px]">
          <div className="  py-0 px-auto w-full">
            <div className="w-full h-full flex items-center justify-between">
              {/* logo */}
              <div className="order-first lg:order-none">
                <Link href="/" className="order-first lg:order-none">
                  <h3 className="font-Recoleta tracking-[1px] font-semibold text-3xl">
                    RhinoGeeks
                  </h3>
                </Link>
              </div>
              {/* back button  */}
              <Link
                href="/"
                className="font-[500] transition-all duration-300 ease-in-out hover:text-[#ff3294]"
              >
                Go to home
              </Link>
            </div>
          </div>
        </header>
        {/* use data page */}
        <div className="bg-[#f6f9fb] min-h-screen  px-[12px] pt-[50px] md:pt-[90px] pb-4 flex flex-col items-center relative justify-center w-full ">
          <div className="bg-white w-full  lg:w-[700px] border-10 pt-[50px] px-[70px] pb-[60px] rounded-10  shadow-lg relative m-auto  z-10">
            <div class="absolute right-[-60px] top-[-60px]">
              <Image
                src="../images/shape/shape_177.svg"
                alt="Shape"
                width={65}
                height={65}
                className="hidden md:block"
              />
            </div>
            <div className="w-full  h-full text-center ">
              <h2 className="text-black tracking-[1px] leading-[1.29rem] text-4xl  lg:text-6xl font-semibold text-center">
                Registration
              </h2>
              <p className="text-black text-lg lg:text-xl tracking-[1px] text-regular pt-5 lg:pt-[3.29rem]">
                Have an account?{" "}
                <Link href="/login" className="hover:text-blue-500">
                  Login Here
                </Link>
              </p>
            </div>
            <SignupForm />
          </div>
          {/* end form wrapper  */}
          <p className="mt-auto pt-[50px]">
            Copyright @{currentYear} RhinoGeeks
          </p>
          <Image
            src="/images/assets/ils_11.png"
            alt="illustration"
            className=" absolute right-0 bottom-0 w-[25.33%] z-1  wow fadeInRight"
            width={300}
            height={300}

          />
          <Image
            src="/images/assets/ils_12.png"
            alt="illustration"
            className=" absolute left-0 bottom-0 w-[25.33%] z-1  wow fadeInLeft"
            width={300}
            height={300}
          />
        </div>
      </div>
    </>
  );
}

export default signup;
