import Slider from "react-slick";
import testimonial from "../data/testimonial";
import {AiFillStar} from "react-icons/ai"
import Image from "next/image";

function Testimonial() {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
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
              dots: true,
            },
          },
        ],
      };
    
  return (
    <>
<Slider {...settings}>
        {testimonial.slice(0, 4).map((item) => (
          <div className="item" key={item.id}>
            <div className="bg-[#ffffff] shadow-md rounded-[10px] relative pt-[50px] px-[70px] pb-[40px] mt-[40px] mx-6 mb-[70px] border-[1px] border-black">
              <div className=" flex items-center justify-between">
                <div>
                  <h3 className="text-black  text-3xl font-medium font-Gordita">{item.title}</h3>
                  <ul className="flex rating justify-evenly w-[60%] mt-4">
                  {Array.from({ length: item.rating }).map((_, index) => (
                      <li key={index}>
                        <AiFillStar className="text-[#ffc12b]"/>
                      </li>
                    ))}
                      </ul>
                </div>
                <img src="/images/icon/icon_112.svg" alt="" width={50} />
              </div>
              <p className="text-[26px] font-Gordita leading-[45px] mt-9">{item.text}</p>
              <div className="flex items-center mt-12 pb-4 justify-between">
                <div className=" font-Gordita font-medium text-black  text-[20px]">
                  {item.author},{" "}
                  <span className="opacity-50 fw-normal">{item.location}</span>
                </div>
                <Image
                  width={60}
                  height={60}
                  src={item.image}
                  alt="tesimonial avatar"
                  className="rounded-[50%]"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  )
}

export default Testimonial