import Link from "next/link";
import { FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import React from "react";

const links = [
  {
    title: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    title: "Terms & Conditions",
    href: "/terms-and-conditions",
  },
];

const icons = [
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/@rhinogeeks",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/rhinogeeks",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/rhinogeek",
  },
];

const LinkItem = ({ title, href }) => {
  return (
    <li className="ml-5 font-Gordita font-[500] hover:underline ">
      <Link href={href}>{title}</Link>
    </li>
  );
};

const IconItem = ({ icon, href }) => {
  return (
    <li>
      <Link href={href} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff733b]">
      <div className="mx-2 text-xl">{React.createElement(icon)}</div>
      </Link>
    </li>
  );
};

function CopyRightFooter() {
  return (
    <div className="relative w-full h-full pb-0  mt-6 lg:pb-10 flex items-center justify-center text-[#48494e]">
      <div className="w-full  mx-12 ">
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full h-full items-center">
        <div className="order-1 mt-4">
          <ul className="flex justify-center lg:justify-start">
          {links.map((link, index) => (
                <LinkItem key={index} title={link.title} href={link.href} />
              ))}
          </ul>
        </div>
        <div className="order-3 lg:order-2 mt-4  ">
        <p className="text-[17px] text-center font-[300] leading-7">
              Copyright © {new Date().getFullYear()}{" "}
              <Link
                style={{ color: "inherit" }}
                href="/"
              >
                RhinoGeeks
              </Link>
              <br></br>A subsidiary of Armus Digital Private Limited
            </p></div>
        <div className="order-2 lg:order-3 mt-4">
        <ul className="flex justify-center lg:justify-end">
              {icons.map((icon, index) => (
                <IconItem key={index} icon={icon.icon} href={icon.href} />
              ))}
            </ul>
        </div>
      </div>
      </div>
    </div>
    
  );
}

export default CopyRightFooter;
