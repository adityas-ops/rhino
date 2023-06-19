import React from 'react'

const featuresData = [
    {
      icon: "/images/icon/icon_124.svg",
      title: "Learn skills over",
      subtitle: "Video courses.",
    },
    {
      icon: "/images/icon/icon_125.svg",
      title: "Choose courses taught",
      subtitle: "Real-world experts.",
    },
    {
      icon: "/images/icon/icon_126.svg",
      title: "Learn in live classes on",
      subtitle: "Mobile and desktop.",
    },
  ];

function FeatureBook() {
  return (
    <>
     <div  className="w-full grid grid-col md:grid-cols-2 lg:grid-cols-3  h-full py-10 lg:py-0 lg:h-[250px] ">
    {featuresData.map((feature, index) => (
        <div key={index} className=" flex items-center justify-center py-10">
          <div className="w-[70px] h-[60px]  border-2 border-[#ffce4c] rounded-[100%]  flex items-center justify-center">
            <img src={feature.icon} alt="icon" className="lazy-img" />
          </div>
          <div className="pl-4 w-full mx-4 ">
            <h4 className="text-white m-0 text-[22px] lg:text-[24px]  font-[500] leading-[20px] lg:leading-[40px]">{feature.title}</h4>
            <p className="m-0 text-white opacity-[70%] text-[22px] lg:text-[24px] font-light">{feature.subtitle}</p>
          </div>
        </div>
    ))}
    </div>
  </>
  )
}

export default FeatureBook