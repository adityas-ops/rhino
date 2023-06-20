import Link from "next/link";
import {BsCheckLg} from "react-icons/bs"
const coursesData = [
    {
      id: 1,
      tag: "PRO",
      title: "Software Engineer",
      level: "Advanced",
      numClasses: 18,
      tag2: "FEATURED",
    },
    {
      id: 2,
      tag: "PRO",
      title: "Frontend Developer",
      level: "Medium",
      numClasses: 32,
      tag2: "POPULER",
    },
    {
      id: 3,
      tag: "PRO",
      title: "Backend Developer",
      level: "Pro",
      numClasses: 20,
      tag2: "TRENDING",
    },
    {
      id: 4,
      tag: "PRO",
      title: "Mobile App Developer",
      level: "Mid",
      numClasses: 13,
      tag2: "FEATURED",
    },
  ];
  

function CourseFeatured() {
  return (
    <>
        <div className="grid grid-cols-2 justify-center items-center w-[90%]   h-full z-20 transform translate-y-[60px]">
        {coursesData.map((course) => (
        <div className="pt-[15px] card-style-nineteen px-[25px] pb-[25px] bg-white border-[1px] border-black rounded-[10px] w-full max-w-[260px] relative flex flex-col tran3s lg:mb-[40px] mb-[20px]" key={course.id}>
          <Link
            href="#"
            className=""
          >
            <span className="tag font-[500] text-white bg-black text-[13px] px-[10px] font-Gordita uppercase py-1/2">
              {course.tag}
            </span>
            <h4 className="mb-0 mt-[25px] text-[24px] font-Gordita font-medium">{course.title}</h4>
            <ul className="lg:pb-[40px] pt-[20px] font-medium flex justify-between text-[15px] font-Gordita">
              <li className="flex items-center font-medium"><BsCheckLg className="text-[18px] font-semibold mr-1"/>{course.level}</li>
              <li className="flex items-center font-medium"><BsCheckLg className="text-[18px] font-semibold mr-1"/>{course.numClasses} Classes</li>
            </ul>
            <span className="font-semibold text-[15px] px-[10px] text-black border-[1px] border-black t uppercase mt-auto">
              {course.tag2}
            </span>
          </Link>
          {/* /.card-style-nineteen */}
        </div>
      ))}
        </div>
    </>
  )
}

export default CourseFeatured