import React from "react";
import Seo from "../common/Seo";
import CourseCategory from "./CourseCategory";
import FeatureBook from "./FeatureBook";
import Hero from "./Hero";

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
            <div className="pt-[10px] md:pt-[20px] lg:[30px]">
              <div className="uppercase  text-lg  font-Gordita tracking-[2px] text-gray-400 mb-2">
                CHoose your path
              </div>
              <h2 className="text-6xl  font-Gordita font-medium text-black ">
                What’s your goal?
              </h2>
              
            </div>

            {/* second grid */}
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
