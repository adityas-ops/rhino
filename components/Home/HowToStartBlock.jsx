import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
function HowToStartBlock() {
  return (
    <>
      <div className="bg-black relative pt-[130px] pb-[65px] flex justify-center items-center">
        <div className="container  mx-10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* first grid */}
            <div className="order-1 lg:order-2 flex flex-col w-full items-end ">
              <div className=" w-[85%]">
                <div className="mb-[30px] ">
                  <h2 className="md:text-6xl text-4xl   font-Gordita font-medium mt-2 text-white">
                    Don&apos;t know how to start.
                  </h2>
                </div>
                <p className="text-[20px] leading-8 w-[95%] text-white opacity-75 lg:mb-[50px] mb-[30px]">
                  This short quiz will sort you out. Answer a few simple
                  questions to get personal career advice and course
                  recommendations.
                </p>
                <Link
                  href="/pages-menu/about-us-v2"
                  className="btn-twentyFive w-fit flex items-center py-3 text-[18px] font-Gordita font-medium rounded-[10px]  px-10 border-2 hover:bg-[#ffce4c] hover:text-black border-[#ffce4c] text-[#ffce4c] mb-10"
                >
                  Let’s get started
                  <BsArrowRight className="ml-2 text-[25px]" />
                </Link>
              </div>
            </div>

            {/* second grid */}
            <div className="order-2 lg:order-1 flex lg:block justify-center">
              <img
                src="/images/media/img_67.png"
                alt="media"
                className="lazy-img sm-mt-40"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HowToStartBlock;
