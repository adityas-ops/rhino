import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function CourseCategory() {
    const categories = [
        {
          icon: "/images/icon/icon_133.svg",
          title: "Development",
          courses: "Courses",
        },
        {
          icon: "/images/icon/icon_128.svg",
          title: "Graphic Design",
          courses: "Courses",
        },
        {
          icon: "/images/icon/icon_129.svg",
          title: "Interview Preparation",
          courses: "Courses",
        },
        {
          icon: "/images/icon/icon_130.svg",
          title: "Business",
          courses: "Courses",
        },
        {
          icon: "/images/icon/icon_131.svg",
          title: "Digital Marketing",
          courses: "Courses",
        },
        {
          icon: "/images/icon/icon_132.svg",
          title: "Programming Language",
          courses: "Courses",
        },
        {
          icon: "/images/icon/icon_127.svg",
          title: "UI/UX",
          courses: "Courses",
        },
      ];
    
  return (
    <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {categories.map((category, index) => (
        <Link key={index} href='#' className='m-5 '>
          <div className="cards py-10 px-2 bg-[#fff] hover:bg-[#fbf4ee] transition-all ease-in duration-300  border-[1px] rounded-[10px] border-black  w-full text-center tran3s mb-4 xs-mb-2"
          >
            <div className="icon flex items-end justify-center">
              <Image
                width={42}
                height={42}
                src={category.icon}
                alt=""
                className="lazy-img"
              />
            </div>
            <h4 className="text-black lg:mt-[45px] md:mt-30px mt-5 text-[17px] md:text-[19px] lg:text-[21px] b w-full">{category.title}</h4>
            <p className='text-[18px] text-[#505050] mt-3 font-base'>{category.courses}</p>
          </div>
          {/* /.card-style-eighteen */}
        </Link>
      ))}
      <Link  href='#' className='m-5 '>
          <div className="cards py-10 relative px-2 moreItem   border-[1px] rounded-[10px]   w-full text-center  mb-4 xs-mb-2"
          >
<h3 className='mt-3 text-5xl font-semibold pb-4'>20</h3>
          <p className="pb-10  text-2xl">More Category</p>
          <img src="/images/icon/icon_134.svg" alt="" className="m-auto" />

          </div>
          </Link>
    </div>
  )
}

export default CourseCategory