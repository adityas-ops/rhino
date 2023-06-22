import React from "react";

function MainPage() {
  return (
    <>
      <div className="relative mt-[200px]">
        <div className="container mx-auto px-14">
          <div className="mb-[20px]">
            <div className="sc-title-two italic relative font-[17px] font-Gordita text-[#ff3294]">
              Our Courses
            </div>
          </div>
          <h2 className="text-4xl md:text-10xl lg:text-[4.5rem] font-Gordita font-medium text-black w-[65%] leading-[5.5rem]" >
                Explore Live Classes Courses.
              </h2>
        </div>
        <img
        src="/images/shape/shape_172.svg"
        alt="shap"
        className="absolute right-[16%] top-0"
      />
      <img
        src="/images/shape/shape_175.svg"
        alt="shap"
        className="lazy-img absolute bottom-[-73%] left-[5%]"
      />
      </div>
    </>
  );
}

export default MainPage;
