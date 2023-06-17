import Link from "next/link";
import { useRouter } from "next/router";

const MainMenu = () => {
    const router = useRouter();
    const { pathname } = router;
    
    return (
        <>
            <nav className="hidden  lg:flex items-center justify-between  font-medium w-[30%] text-[20px]  ">
                <Link href="/" className={`${pathname === "/" ? "text-[#ff733b]" : "text-black"} hover:text-[#ff733b]`}>
                Home
                </Link>
                <Link href="/courses" className={`${pathname === "/corses" ? "text-[#ff733b]" : "text-black"} hover:text-[#ff733b]`}>
                Courses
                </Link>
                <Link href="/blogs" className={`${pathname === "/blogs" ? "text-[#ff733b]" : "text-black"} hover:text-[#ff733b]`}>
                Blogs
                </Link>
                <Link href="/contact" className={`${pathname === "/contact" ? "text-[#ff733b]" : "text-black"} hover:text-[#ff733b]`}>
               Contact
                </Link>
                </nav>
        </>
    );
}

export default MainMenu;