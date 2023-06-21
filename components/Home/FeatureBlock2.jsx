import Link from "next/link";
import React from "react";

function FeatureBlock2() {
  return (
    <>
      <div className="lg:pt-[130px] pt-[70px] flex items-center justify-center overflow-x-hidden">
        <div className="container  mx-16">
          <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center">
            <div className="w-full h-full ">
              <div className="mb-[30px] mt-[30px]">
                <div className="text-[16px] tracking-[2px] opacity-[30%]">
                  BECOME AN INSTRUCTOR
                </div>
                <h2 className="md:text-6xl text-4xl mt-4  font-Gordita font-medium  text-black">
                  Join us &amp; Spread<p className="mt-4"> Knowledge.</p>
                </h2>
              </div>
              <p className="text-[20px] leading-10 tracking-[.5px] w-[65%]   lg:mb-[50px] mb-[25px]">
              Instructors from around the world teach millions of students on
              jano. We provide the tools and skills to teach what you love.
            </p>
            <Link href="/contact" className="w-fit flex items-center py-3 text-[16px] font-Gordita font-medium rounded-[10px]  px-10  hover:bg-[#ff8c24] hover:text-white bg-black text-white mb-10">
              Start Teaching Now
            </Link>
            </div>
            </div>
            {/* second grid */}
            <div className="flex justify-start">
            <img
              src="/images/media/img_68.png"
              alt="media"
              className="lazy-img sm-mt-40"
            />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureBlock2;
