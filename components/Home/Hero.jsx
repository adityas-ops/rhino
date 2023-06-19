import Link from 'next/link';
import React from 'react'
import { useState } from "react";
import ModalVideo from "react-modal-video";
function Hero() {
    const [isOpen, setOpen] = useState(false);
  return (
   <>
     <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="20QUNgFIrK0"
        onClose={() => setOpen(false)}
        className="absolute"
      />
      <div className='relative pt-[10px] w-full h-full pb-[100px] lg:pt-[100px] md:pt-[50px]'>
      <img
      src="/images/shape/shape_26.svg"
      alt="shape"
      className=" absolute top-[23.3%] left-[8%] w-[11.9%] max-w-[248px]"
      />
        <img
          src="/images/shape/shape_27.svg"
          alt="shape"
          className=" absolute top-[23.3%] right-[8%] w-[9.9%] max-w-[248px]"
        />
        <div className='w-full h-full flex flex-col items-center justify-center '>
            <div className='text-center w-[70%] lg:w-[60%]'>
                <h1 className='z-10 relative text-[40px] lg:text-[82px] font-Recoleta lg:leading-[6.09rem]'>
                <img
                  src="/images/shape/shape_25.svg"
                  alt="shape"
                  className=" absolute left-[3%] top-[45%] hidden lg:block "
                />
                {/* We're Geeky Rhinos &amp; learning together. */}
                We&apos;re Geeky Rhinos  learning together
                </h1>
                <p className="text-center text-[#48494e] text-[23px] lg:text-[25px] font-[400] mb-[40px] pt-[20px] lg:mb-[50px] lg:pt-[30px] tracking-[1px]">
                Pioneering the future of learning and tech brilliance.
              </p>
              <div className='w-full h-full flex  items-center justify-center '>
                <div className='lg:w-[60%] w-[80%] block lg:flex items-center justify-evenly mt-3 lg:mt-[50px]'>
                <Link
                    href="#"
                    className=" bg-[#ffce4c] bea font-[500] relative inline-flex items-center mt-10 lg:mt-4 "
                  >
                    <span>Explore all Courses</span>
                    <img
                      src="/images/icon/icon_123.svg"
                      alt="icon"
                      className="ms-3"
                    />
                  </Link>
                  <div className="btn-eighteen relative inline-block text-black mt-3 lg:mt-1 ml-4 ">
                    <a href="#" className="font-semibold">
                      Join for Free Now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
   </>
  )
}

export default Hero