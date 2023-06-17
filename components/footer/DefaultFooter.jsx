import Image from "next/image";
import Link from "next/link";
import React from "react";
import CopyRightFooter from "./CopyRightfooter";
import NewsLetter from "./NewsLetter";

const columns = [
  {
    title: "Pages",
    links: [
      { label: "About Us", url: "/" },
      { label: "Contact", url: "/" },
      { label: "Our Team", url: "/" },
      { label: "Courses", url: "/" },
      { label: "Blogs", url: "/" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Email", url: "mailto:info@rhinogeeks.com" },
      { label: "WhatsApp", url: "https://wa.link/6d0e0c" },
      { label: "Contact", url: "tel:+919060835865" },
    ],
  },

  {
    title: "Social",
    links: [
      {
        label: "Instagram",
        url: "https://www.instagram.com/rhinogeeks/?hl=en",
      },
      { label: "LinkedIn", url: "https://www.linkedin.com/company/rhinogeek" },
      { label: "YouTube", url: "https://www.youtube.com/@rhinogeeks" },
    ],
  },
];

const Footer2 = () => {
  return (
    <>
      {columns.map((column, index) => (
        <div className="flex flex-col items-center " key={index}>
          <h5 className="text-[16px] mb-[20px] font-Gordita uppercase tracking-[4px] text-gray-400">
            {column.title}
          </h5>
          <ul className="text-[16px] font-Gordita">
            {column.links.map((link, index) => (
              <li key={index} className="pb-5 hover:text-[#ee8d38]">
                <Link href={link.url}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

function DefaultFooter() {
  return (
    <>
    <div className="relative pt-[150px] w-full h-full ">
      <div className=" w-full h-full ">
        <div className="grid grid-cols-2 lg:grid-cols-6 mb-[60px]">
          <div className="hidden lg:flex items-start justify-center f">
            <Link href="/" className="order-first lg:order-none ">
              <h3 className="font-Recoleta relative text-3xl mt-1">
                RhinoGeeks
              </h3>
            </Link>
          </div>
          <Footer2 />
          <div className="lg:col-span-2">
          <div className="ml-10 w-[80%]">
            <h5 className="text-[16px] mb-[20px] font-Gordita uppercase tracking-[4px] text-center lg:text-start text-gray-400">NEWSLETTER</h5>
            <h5 className="text-[20px] font-Gordita font-bold pb-[24px] lg:text-start text-center">Join our newsletter</h5>
            <NewsLetter/>
            <div className="text-[16px] text-gray-700 mt-3 lg:text-start text-center">
                We only send interesting and relevant emails.
              </div>
          </div>
          </div>
        </div>
      </div>
      <hr/>
    <CopyRightFooter/>
    <Image
        src="/images/shape/shape_173.svg"
        alt="shape"
        className="absolute top-[45%] hidden lg:block"
        width={150}
        height={200}
      />
    </div>
    
    </>
  );
}

export default DefaultFooter;
