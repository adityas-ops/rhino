import Header from "@/components/Header/Header";
import Link from "next/link";
import Seo from "../components/common/Seo";

const Pricing = () => {
  return (
    <>
      <Seo pageTitle="404" />
      <div className="w-full h-full">
        <div className="w-full min-h-screen  flex flex-col items-center justify-center">
          <div className="container  h-full w-full relative">
            {/* text  */}
            <div className="flex flex-col  items-center m-auto mt-20 lg:mt-12 justify-center">
              <h3 className="font-Gordita text-2xl lg:text-3xl font-[500]">
                Opps! you’r on the wrong place.
              </h3>
              <p className="my-4 w-[95%] p-2  lg:w-[44%]  font-Gordita text-lg font-[400] text-[#48494e] flex text-center items-center justify-center">
                Can not find what you need? Take a moment and do a search below
                or start from our Homepage.
              </p>
              <Link href="/">
                <button className="bg-[#ff3294] hover:bg-black  text-white px-8 py-3 rounded-[25px] font-medium transition-all duration-500 ease-in-out">
                  Back to home
                </button>
              </Link>
            </div>
          </div>
          <img src="/images/assets/ils_06.svg" alt="" className="" />
          <img
            src="/images/shape/shape_178.svg"
            alt="shape"
            className="z-[-1] absolute top-[55%] w-full"
          />
        </div>
      </div>
    </>
  );
};

export default Pricing;
