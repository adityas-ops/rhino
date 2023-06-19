import React from "react";
const faqData = [
  {
    id: 1,
    question: "Lowest Price.",
    answer:
      "It only takes 5 minutes. Set-up is smooth and simple, with fully customisable page design to reflect your brand.",
  },
  {
    id: 2,
    question: "Boost-up Skills",
    answer:
      "It only takes 5 minutes. Set-up is smooth and simple, with fully customisable page design to reflect your brand.",
  },
  {
    id: 3,
    question: "Learn Language",
    answer:
      "It only takes 5 minutes. Set-up is smooth and simple, with fully customisable page design to reflect your brand.",
  },
];

function Accord() {
  return (
    <div className=" w-full mt-[40px] flex items-center justify-center lg:justify-start">
    <div className="w-[90%]">
     {
         faqData.map((item)=>(
            <>
            <div key={item.id} className="collapse collapse-arrow border-b-[1px] py-2  font-Gordita border-black rounded-[0px]">
        <input type="radio" name="my-accordion-1"  />
        <div className="collapse-title text-3xl  font-medium">
          {item.question}
        </div>
        <div className="collapse-content">
          <p className="mt-2 text-lg w-[90%] leading-[30px]">{item.answer}</p>
        </div>
      </div>
      </>
))}
     </div>
    </div>
  );
}

export default Accord;
