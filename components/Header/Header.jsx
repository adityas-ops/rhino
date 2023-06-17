import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import MainMenu from "./MainMenu";
import Image from "next/image";
function Header() {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);
  return (
    <>
      <header
        className={`${
          navbar
            ? "fixed w-full top-0 shadow-md z-50 "
            : ""}    bg-white`}
      >
       <div
        className={`bg-[#ffce4c]  w-full h-full  ${navbar ? "hidden" : ""}`}
      >
        <p className="lg:text-[16px] text-[14px] font-Gordita text-center font-[400]  py-[10px] transition-all duration-500 ease-in">
          It&lsquo;s the last day to save. The skills for now —{" "}
          <a href="#" className="font-[500] hover:underline ">
            now on sale.
          </a>
        </p>
      </div>
        <div className="relative  w-full h-full  flex items-center justify-center pt-5 pb-6 ">
          <div className="flex items-center justify-between w-[96%] lg:w-[92%]">
            <div className="order-first lg:order-none">
              <Link href="/" className="order-first lg:order-none">
                <h3 className="font-Recoleta relative text-3xl">
                  RhinoGeeks
                </h3>
              </Link>
            </div>
            <MainMenu />
            <div className="flex items-center order-last lg:order-3 ">
            <Link
              href="/login"
              className="text-[20px] text-black font-[500]  hidden lg:flex items-center mr-4 hover:underline"
            >
              <Image
                src="/images/icon/icon_121.svg"
                alt="icon"
                className="mr-2"
                width={20}
                height={20}
              />
              <span>login</span>
            </Link>
            <Link
              href="/signup"
              className="leading-[45px] rounded-[28px] tracking-[-0.36px] mr-1 px-8 bg-black text-white font-bold  hidden lg:block hover:bg-[#ffce4c] hover:text-black transition-all duration-300 ease-in-out">
              Sign Up
            </Link>
          </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
