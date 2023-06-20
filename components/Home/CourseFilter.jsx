import { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import {AiFillStar} from "react-icons/ai"
import { BsBookmark } from "react-icons/bs";
const courseData = [
  {
    id: 1,
    imgSrc: "/images/media/img_63.jpg",
    instructor: "Rashed Ka.",
    duration: "53m",
    title: "Master in Design System in Figam & Sketch",
    rating: 4,
    ratingsCount: 310,
    price: 17.99,
    discountedPrice: 29.99,
    tags: ["graphic", "it", "language", "coding"],
  },
  {
    id: 2,
    imgSrc: "/images/media/img_64.jpg",
    instructor: "Zubayer Al Hasan",
    duration: "8h",
    title: "Master in Bootstrap only within 30 days.",
    rating: 4,
    ratingsCount: 180,
    price: 13.99,
    discountedPrice: 19.99,
    tags: ["art", "marketing", "it", "coding"],
  },
  {
    id: 3,
    imgSrc: "/images/media/img_65.jpg",
    instructor: "Rashed Ka.",
    duration: "53m",
    title: "Master in Design System in Figam & Sketch",
    rating: 4,
    ratingsCount: 310,
    price: 17.99,
    discountedPrice: 29.99,
    tags: ["coding", "it", "language", "graphic", "art"],
  },
  {
    id: 4,
    imgSrc: "/images/media/img_66.jpg",
    instructor: "Zubayer Al Hasan",
    duration: "8h",
    title: "Master in Bootstrap only within 30 days.",
    rating: 4,
    ratingsCount: 180,
    price: 13.99,
    discountedPrice: 19.99,
    tags: ["graphic", "art", "marketing", "language"],
  },
  {
    id: 5,
    imgSrc: "/images/media/img_64.jpg",
    instructor: "Zubayer Al Hasan",
    duration: "8h",
    title: "Master in Bootstrap only within 30 days.",
    rating: 4,
    ratingsCount: 180,
    price: 13.99,
    discountedPrice: 19.99,
    tags: ["language", "marketing", "graphic"],
  },
  {
    id: 6,
    imgSrc: "/images/media/img_65.jpg",
    instructor: "Zubayer Al Hasan",
    duration: "8h",
    title: "Master in Bootstrap only within 30 days.",
    rating: 4,
    ratingsCount: 180,
    price: 13.99,
    discountedPrice: 19.99,
    tags: ["art", "marketing", "coding", "it"],
  },
];

const CourseFilter = () => {
  const [filter, setFilter] = useState("*");

  const filteredItems =
    filter === "*"
      ? courseData
      : courseData.filter((item) => item.tags.includes(filter));

  var settings = {
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <ul
        className="flex w-full  border-b-0 pb-[40px] lg:mb-[80px] md:mb-[30px]"
        data-aos="fade-up"
      >
        <ul className="w-[60%] justify-between text-center flex flex-wrap uppercase">
          <li className="nav-item  font-medium font-Gordita text-[12px]">
            <button
              className={
                filter === "*"
                  ? "active nav-link px-6 py-2 bg-white text-black rounded-[30px] "
                  : "nav-link px-6 py-2 bg-white text-black rounded-[30px]"
              }
              onClick={() => setFilter("*")}
            >
              ALL
            </button>
          </li>
          <li className="nav-item font-medium font-Gordita text-[12px]">
            <button
              className={
                filter === "graphic"
                  ? "active uppercase nav-link px-6 py-2 bg-white text-black rounded-[30px]"
                  : "nav-link px-6 py-2 bg-white text-black uppercase rounded-[30px]"
              }
              onClick={() => setFilter("graphic")}
            >
              Graphic Design
            </button>
          </li>
          <li className="nav-item font-medium font-Gordita text-[12px]">
            <button
              className={
                filter === "it"
                  ? "active uppercase nav-link px-6 py-2 bg-white text-black rounded-[30px]"
                  : "nav-link px-6 py-2 bg-white text-black uppercase rounded-[30px]"
              }
              onClick={() => setFilter("it")}
            >
              IT
            </button>
          </li>
          <li className="nav-item font-medium font-Gordita text-[12px]">
            <button
              className={
                filter === "language"
                  ? "active nav-link px-6 py-2 bg-white text-black uppercase rounded-[30px]"
                  : "nav-link px-6 py-2 bg-white text-black uppercase rounded-[30px]"
              }
              onClick={() => setFilter("language")}
            >
              Language
            </button>
          </li>
          <li className="nav-item font-medium font-Gordita text-[12px]">
            <button
              className={
                filter === "coding"
                  ? "active nav-link px-6 py-2 bg-white text-black uppercase rounded-[30px]"
                  : "nav-link px-6 py-2 bg-white text-black uppercase rounded-[30px]"
              }
              onClick={() => setFilter("coding")}
            >
              Coding
            </button>
          </li>
          <li className="nav-item font-medium font-Gordita text-[12px]">
            <button
              className={
                filter === "art"
                  ? "active nav-link px-6 py-2 bg-white text-black uppercase rounded-[30px]"
                  : "nav-link px-6 py-2 bg-white text-black uppercase rounded-[30px]"
              }
              onClick={() => setFilter("art")}
            >
              Art
            </button>
          </li>
          <li className="nav-item font-medium font-Gordita text-[12px]">
            <button
              className={
                filter === "marketing"
                  ? "active nav-link px-6 py-2 bg-white text-black uppercase rounded-[30px]"
                  : "nav-link px-6 py-2 bg-white text-black uppercase rounded-[30px]"
              }
              onClick={() => setFilter("marketing")}
            >
              Marketing
            </button>
          </li>
        </ul>
      </ul>
      {/* close buttons  */}
      <div className="lg:w-[114vw] relative w-[150vw] overflow-x-hidden translate-x-[-25vw] transform lg:translate-x-[-12vw]">
      <div className="my-0 mx-[-12px] lg:mx-[-40px] w-[calc(1320px + 22vw)]">
        <div className="tab-content w-full  z-10 relative  ">
        <div className="mt-10" >
          <Slider {...settings} arrows={false}  >
            {filteredItems.map((course) => (
              <div className="py-0 px-[20px] z-20 w-full h-full " key={course.id}>
                <div className=" p-[16px] border-[1px] border-black rounded-[10px] bg-[#fff] hover:bg-[#fbf1ea]   transition-all ease-in duration-300">
                  <div className="border-[1px] border-black rounded-[10px] overflow-hidden mb-[18px]">
                    <Image
                      width={415}
                      height={222}
                      src={course.imgSrc}
                      alt="media"
                      // className="w-[100px]"
                      
                    />
                  </div>
                  {/* /.img-meta */}
                  <div className="course-data">
                    <div className="flex items-center justify-between">
                      <div className="course-by text-[17px] text-black opacity-75">
                        {course.instructor}
                      </div>
                      <div className="course-duration text-[17px] text-black">
                        {course.duration}
                      </div>
                    </div>
                    <a href="#" className="text-[22px] text-[#000] font-medium tracking-[0.1px] max-w-[94%]  mt-[7px] mx-0 mb-[15px] ">
                      {course.title}
                    </a>
                    <div className="course-review mt-[17px] flex items-center">
                      <ul className="flex rating">
                        {Array.from({ length: course.rating }, (_, i) => (
                          <li className="activeStar" key={i}>
                            <AiFillStar/>
                          </li>
                        ))}
                        {Array.from({ length: 5 - course.rating }, (_, i) => (
                          <li className="star" key={i}>
                            <AiFillStar />
                          </li>
                        ))}
                      </ul>
                      <span className="fs-15 tx-dark ms-1">
                        ({course.ratingsCount})
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-[30px] mb-[10px]">
                      <strong className="price font-Gordita text-[20px] font-medium ">
                        ${course.price.toFixed(2)}{" "}
                        <del className="opacity-50 font-medium">
                          ${course.discountedPrice.toFixed(2)}
                        </del>
                      </strong>
                      <a href="#" className="bookmark" title="Bookmark">
                        <BsBookmark className="text-[25px]"/>
                      </a>
                    </div>
                  </div>
                  {/* /.course-data */}
                </div>
                {/* /.card-style-twenty */}
              </div>
            ))}
          </Slider>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default CourseFilter;
