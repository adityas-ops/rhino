import Link from "next/link";
import React from "react";
import Seo from "../common/Seo";
import Accord from "./Accord";
import CourseCategory from "./CourseCategory";
import CourseFeatured from "./CourseFeatured";
import CourseFilter from "./CourseFilter";
import FeatureBook from "./FeatureBook";
import Hero from "./Hero";
import HowToStartBlock from "./HowToStartBlock";

function LandingPage() {
  return (
    <>
      {/* seo */}
      <Seo pageTitle="Home- RhinoGeeks" />
      {/* theme banner */}
      <Hero />
      {/* feature section */}
      <div className="relative bg-feature object-cover background bg-no-repeat bg-[#0f0f0f] ">
        <div className="container mx-auto px-16">
          <FeatureBook />
        </div>
        <img
          src="/images/shape/shape_148.svg"
          alt="shape"
          className=" absolute bottom-0 "
        />
        <img
          src="/images/shape/shape_149.svg"
          alt="shape"
          className="absolute top-12 left-20"
        />
        <img
          src="/images/shape/shape_150.svg"
          alt="shape"
          className="absolute top-0 right-0"
        />
        <img
          src="/images/shape/shape_151.svg"
          alt="shape"
          className="absolute bottom-10 right-12"
        />
      </div>

      {/* feature section 2nd  */}
      <div className="w-full h-full mt-[60px] lg:mt-[150px]">
        <div className="container mx-auto lg:px-16">
          {/* title */}
          <div className="text-center mb-10">
            <div className=" text-[16px] tracking-[2px] text-gray-400  uppercase">
              OUR CORUSES
            </div>
            <h2 className=" font-[500] text-[35px] md:text-[44px] lg:text-[64px] text-black">
              Explore 100+ Live Online Courses
            </h2>
          </div>
        </div>
        {/*  container end */}
        <div className="m-auto bg-repeat-y max-w-[1400px] pt-[40px] bg-feature2">
          <div className="container mx-auto lg:px-4">
            <CourseCategory />
          </div>
        </div>
      </div>
      {/* feature section 3 */}
      <div className="w-full h-full mt-[60px] lg:mt-[150px]">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="">
              <div className="uppercase  text-lg  font-Gordita tracking-[2px] text-gray-400 mb-2">
                CHoose your path
              </div>
              <h2 className="md:text-6xl text-4xl  font-Gordita font-medium mt-2 text-black ">
                What’s your goal?
              </h2>
              <Accord />
              <Link href="#">
                <button className="mt-[70px] mb-[60px]  py-3  px-10 rounded font-Gordita font-[500] bg-black text-white lg:mt-[50px]">
                  Explorer All
                </button>
              </Link>
            </div>

            {/* second grid */}
            <div className="w-full relative h-full">
              <div className="container z-10 flex justify-center  ">
                <CourseFeatured />
              </div>
              <img
                src="/images/shape/shape_152.svg"
                alt="shape"
                className="absolute z-0 transform translate-x-[-50%] translate-y-[-50%] top-[46%] left-[50%] "
              />
              <img
                src="/images/shape/shape_153.svg"
                alt="shape"
                className="lazy-img bottom-[8%] absolute right-[-7%]"
              />
            </div>
          </div>
        </div>
      </div>
      {/* feature section 4  */}
      <div className="relative pt-[80px] pb-[80px] bg-[#fbf4ee] lg:pt-[130px] lg:pb-[180px] mt-[180px] ">
        <div className="absolute z-10 right-[16%] top-[-8%] text-center w-[9.5%] min-w-[130px]">
          <img
            src="/images/shape/shape_154.svg"
            alt="media"
            className="rotate"
          />
          <div className="text-[36px] leading-[0.72em] absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
            A+ <br />
            <span className="text-[0.44em]">Courses</span>
          </div>
        </div>
        {/* rating box end */}
        <div className="w-full h-full">
          <div className="relative px-10 w-full h-full">
            <div className="mb-[40px]">
              <h2 className=" text-4xl md:text-5xl lg:text-6xl font-Gordita font-medium text-black">Featured Courses</h2>
            </div>
            <CourseFilter />
          </div>
        </div>
      </div>
      {/* feature section 5 */}
      <HowToStartBlock />
      
    </>
  );
}

export default LandingPage;
