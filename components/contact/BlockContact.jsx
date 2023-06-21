import Image from "next/image";
function BlockContact() {
    const addressBlocks = [
        {
          icon: "/images/icon/icon_147.svg",
          title: "Our Address",
          content: "90 90 90 Armus Digital, Motia, Godda,Jharkhand, India, 814133",
          delay: "100",
        },
        {
          icon: "/images/icon/icon_148.svg",
          title: "Contact Info",
          content: "Open a chat or give us call at",
          link: "tel:+919060835865",
          delay: "200",
        },
        {
          icon: "/images/icon/icon_149.svg",
          title: "Live Support",
          content: "live chat service",
          link: "https://wa.link/6d0e0c",
          delay: "300",
        },
      ];
    
  return (
    <>
{addressBlocks.map((block, index) => (
    <div  key={index} className="address-block-two text-center mb-[40px]">
            <div className="w-[80px] h-[80px] bg-black rounded-[50%] flex items-center justify-center m-auto mb-4">
              <Image width={30} height={30} src={block.icon} alt="icon" />
            </div>
            <h5 className="text-[24px] font-Gordita font-[500] text-[#090f32]">{block.title}</h5>
            <p className="text-[19px] leading-[29px]  text-gray-400 font-[400] text-center font-Gordita">
              {block.content} <br />
              {block.link && (
                <a
                  href={block.link}
                  className={
                    block.link.includes("tel:") ? "text-[22px] text-[#ff3294]" : " underline text-black"
                  }
                >
                  {block.link.replace("tel:", "")}
                </a>
              )}
            </p>
          </div>
      ))}
    </>
  )
}

export default BlockContact