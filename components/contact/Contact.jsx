import React from "react";
import Seo from "../common/Seo";
import BlockContact from "./BlockContact";
import ContactForm from "./ContactForm";
import Map from "./Map";

function Contact() {
  return (
    <>
      <Seo pageTitle="Contact" />
      <div className="relative lg:mt-[240px] mt-[130px] flex justify-center">
        <div className="container mx-auto">
          <div className="text-center mb-[65px] w-full h-full ">
            <div className="sc-title-two mb-[45px] ml-4 relative  inline-block  italic text-[17px] font-Gordita text-[#ff3294]">
              Contact info
            </div>
            <h2 className="text-4xl md:text-10xl lg:text-[72px] font-Gordita font-medium text-black">
              Get in Touch.
            </h2>
          </div>
        </div>
        <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes absolute top-[4%] right-[17%]"
        />
      </div>
      {/*  contact section one  */}
      <div className="mt-[30px] lg:mt-[60px] text-center ">
        <div className="container mx-auto px-2">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <BlockContact />
          </div>
        </div>
      </div>
      {/* end of contact section one   */}
      {/* contact section two */}
      <div className="mt-[60px] lg:mt-[60px] text-center ">
        <div className="container mx-auto px-2">
          <div className="w-full flex justify-center">
            <h2 className=" text-center w-[50%] mt-100 lg:mb-[80px] mt-[40px] mb-40  font-Gordita text-[58px] font-[500] text-black">
              Any question? Send us message.
            </h2>
          </div>
        </div>
        <div className="w-full h-full flex justify-center">
        <div className="w-[85%]">
        <ContactForm/>
        </div>
        </div>
      </div>
      <div className="container mx-auto">
        <Map/>
      </div>
    </>
  );
}

export default Contact;
