const NewsLetter = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent default form submission behavior
    // handle form submission logic
  };

  return (
    <form onClick={handleSubmit} className="relative w-full h-full ">
      <input type="email" placeholder="Enter your email" className="w-full border-2 placeholder-gray-500 border-black px-4 lg:py-[22px] py-4 rounded relative pr-10 " required />
      <button className=" transition-all duration-300 ease-out top-2 right-2 font-[500] absolute lg:py-4 py-2 rounded lg:px-8 px-4 bg-black text-white hover:bg-[#ffce4c] hover:text-black ">Sign Up</button>
    </form>
  );
};

export default NewsLetter;
