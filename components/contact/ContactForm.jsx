import React from 'react'

function ContactForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission
      };
  return (
    <div className="w-full h-full" data-aos="fade-up">
        <form onSubmit={handleSubmit} className="grid grid-cols-1">
            <input className='w-full py-[18px] text-[18px] placeholder-gray-500 border-b-2 border-black font-[400] outline-none' placeholder='Your Name*' type="text" name="name" required/>
            <input className='w-full py-[18px] text-[18px] placeholder-gray-500 border-b-2 border-black mt-[29px] outline-none' placeholder='Email Address*' type="email" name="email" required></input>
            <textarea className='w-full h-[120px] text-start text-[18px] placeholder-gray-500 border-b-2 border-black mt-[49px] outline-none' placeholder='Your message*' name="message" required  defaultValue={""}/>
            </form>
            <div className='w-full  flex mt-[32px]'>
            <button onSubmit="submit" className='py-3 px-10 text-white font-semibold hover:bg-black transition-all ease-in duration-300 rounded-[30px] bg-[#ff3294]'>
                send Message
            </button>
            </div>
            
    </div>
  )
}

export default ContactForm