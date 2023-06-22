import React, { useState } from 'react'
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Link from "next/link";
import Image from "next/image";
import items from "../data/portfolio"
import {AiOutlinePlus} from "react-icons/ai"
function CourseGallary() {
    const [filter, setFilter] = useState("*");

const filteredItems =
  filter === "*"
    ? items.slice(8, 17)
    : items.slice(8, 17).filter((item) => item.category.includes(filter));
  return (
   <>
    <div className=" pt-[100px]">
      <div className="lg:container text-center">
      <div className='w-full flex  justify-center '>
        <ul className="text-center flex flex-wrap  g-control-nav-two font-Gordita">
          <li
            className={filter === "*" ? "is-checked" : ""}
            onClick={() => setFilter("*")}
          >
            All
          </li>
          <li
            className={filter === "marketing" ? "is-checked" : ""}
            onClick={() => setFilter("marketing")}
          >
            Marketing
          </li>
          <li
            className={filter === "application" ? "is-checked" : ""}
            onClick={() => setFilter("application")}
          >
            Application
          </li>
          <li
            className={filter === "trading" ? "is-checked" : ""}
            onClick={() => setFilter("trading")}
          >
            Trading
          </li>
          <li
            className={filter === "design" ? "is-checked" : ""}
            onClick={() => setFilter("design")}
          >
            Design
          </li>
          <li
            className={filter === "dev" ? "is-checked" : ""}
            onClick={() => setFilter("dev")}
          >
            Development
          </li>
        </ul>
        </div>
        </div>
        <div className='w-full h-full flex items-center justify-center '>
        <div className="lg:pt-[90px] pt-[50px] grid grid-cols-1 items-center justify-center gap-8 w-fit md:grid-cols-2 lg:grid-cols-3">
          <Gallery>
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={`${item.category} card `}
              >
                <div className="portfolio-block-four mb-[50px] ">
                  <div className="img-meta  relative">
                    <Image
                      width={410}
                      height={340}
                      src={item.image}
                      alt="gallary"
                      
                    />

                    <Item
                      original={item.image}
                      thumbnail={item.image}
                      width={410}
                      height={340}
                    >
                      {({ ref, open }) => (
                        <span
                          role="button"
                          title="Click for large view"
                          className="fancybox w-full justify-center h-full absolute top-0 left-0 text-white bg-[#15151599] right-0 bottom-0 flex items-center opacity-0 hover:opacity-100  transition-all ease-in duration-300"
                          ref={ref}
                          onClick={open}
                        >
                         <AiOutlinePlus className='text-[40px]'/>
                        </span>
                      )}
                    </Item>
                  </div>
                  <Link
                    href={`courses/${item.id}`}
                    className=" shadow-lg py-[22px] px-[5px] rounded-br-[10px] rounded-bl-[10px] bg-white text-center w-full tran3s flex flex-col items-center"
                  >
                    <span className="pj-name font-Gordita font-[500] text-[1.375rem]">{item.name}</span>
                    <span className="font-Gordita text-[17px] text-[#c1c1c1] mt-1">{item.tag}</span>
                  </Link>
                </div>
              </div>
            ))}
          </Gallery>
        </div>
      </div>
    </div>
   </>

  )
}

export default CourseGallary